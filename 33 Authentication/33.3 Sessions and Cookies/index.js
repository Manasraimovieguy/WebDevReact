import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import session from "express-session";
import passport from "passport";
import bcrypt from "bcrypt";
import {Strategy} from "passport-local";

const app = express();
const port = 3000;
const saltrounds = 10;

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

app.use(session({
  secret: "BIGSECRET",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 //(1 day length cookie) setting max age of cookie here
  }

}));

app.use(passport.initialize());
app.use(passport.session()) //should always appear after you set up session

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", (req,res) => {
  console.log(req.user);
  if(req.isAuthenticated()){ // isAuthenticated is a passport lib func
    res.render("secrets.ejs");
  }
  else{
    res.redirect("/login");
  }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        if(err){
          console.log("Error hashing password: ", err);
        }
        else{
          const result = await db.query("INSERT INTO users (email, password) VALUES ($1, $2)",[email, hash]);
          console.log(result);
          res.render("secrets.ejs");
        }

      })
      
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", passport.authenticate("local", {  // use local strategy
  successRedirect: "/secrets",
  failureRedirect: "/login"
})); 

passport.use(new Strategy(async function verify(username, password, cb) { //cb in passport refers to callback function
  try { //copy login method
    const result = await db.query("SELECT * FROM users WHERE email = $1", [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      bcrypt.compare(password, storedPassword, (err, result) => {
        if(err){
          return cb(err);
        }  
        else{
          if (result) {
            // res.render("secrets.ejs");
            return cb(null, user);

          } else {
            // res.send("Incorrect Password");
            return cb(null, false); // this will return isAuthenticated as false
          }
        }
      })
    } else {
      return cb("User not found");
    }
  } catch (err) {
    console.log(err);
  }
}))

passport.serializeUser((user, cb) => { // save user details in local storage when logged in (serailizing?)
  cb(null, user);
});

passport.deserializeUser((user, cb) => { // save user details in local storage when logged in (deserializing?)
  cb(null, user);
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
