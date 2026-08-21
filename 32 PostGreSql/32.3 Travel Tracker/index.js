import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Daigo@Dojima#0",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  // result.rows.forEach((country)=>{
  //   countries.push(country.country_code);
  // });
  for(let i=0;i<result.rows.length;i++){ //stupid way
    countries.push(result.rows[i].country_code)
  }
  // console.log(countries);
  res.render("index.ejs",{countries: countries, total: countries.length});
  // db.end();
});

//first attempt
// app.post("/add", async (req, res) => {
//   const country = req.body.country;
//   console.log(country);
//   const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);
//   // console.log(result);
//   if(result.rows){
//     await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [result.rows[0].country_code]);
//     const result1 = await db.query("SELECT country_code FROM visited_countries");
//     let countries = [];
//     result1.rows.forEach((country)=>{
//       countries.push(country.country_code);
//     });
//     res.render("index.ejs",{countries: countries, total: countries.length});
//   }
// })

app.post("/add", async (req, res) => {
  const country = req.body.country;
  // console.log(country);
  try{
    // const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1", [country]);
    const result = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [country.toLowerCase()]); // update to allow user to enter parts of longer country names (Like 'America' isntead of 'United States of America')
    if(result.rows.length > 0){
      try{
        await db.query('INSERT INTO visited_countries (country_code) VALUES ($1)', [result.rows[0].country_code]);
        res.redirect("/"); // just call the get method, really cool way, you can also call a repeatable function
      }
      catch(err){
        const countries = await checkVisisted();
        res.render("index.ejs", {
          countries: countries,
          total: countries.length,
          error: "Country already added, you dumb mothafucka",
        });
      }
      
    }
    else{
      throw new Error("Country name does not exist, try again.") // query can return a null value that won't throw an error, you either need to generate a possible error in the try block 
      // or throw an error when the condition fails, which is what I did
      // Refer to solution3.js for how Angela makes an error in the try block by declaring a const variable for country_code which results in a null value creating the error
    }
  }
  catch (err){
    // console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: err,
    });

  }

  // console.log(result);
  
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
