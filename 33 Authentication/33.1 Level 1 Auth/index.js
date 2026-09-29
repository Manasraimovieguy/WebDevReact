import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Daigo@Dojima#0",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  // before doing the following, you can also perform a query to check if the email already exists in db
  // I know how to do but I am lazy, I have done an implementation like it in the post method for login, so I feel confident in implementing again when need be

  try{
    await db.query("insert into users (email, password) values ($1, $2)", [email, password]);
  }
  catch(err){
    console.log(err)
  }
  res.redirect("/");
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  let result = await db.query("select * from users where email = $1", [email]);
  // console.log(result);
  if(result.rows[0].email === email && result.rows[0].password === password){
    res.render("secrets.ejs");
  }
  else{
    res.send("Incorrect username or password");
    // console.log("ayoooooo wrong as usual");
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
