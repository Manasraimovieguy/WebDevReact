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
  console.log(countries);
  res.render("index.ejs",{countries: countries, total: countries.length});
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
