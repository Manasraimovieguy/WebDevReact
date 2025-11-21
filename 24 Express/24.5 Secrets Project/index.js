//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // added bodyParser
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); //implemented

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req,res) => { //my method was to use the post method, but Angela used a middleware to check for password match, set a global boolean variable, and based on t/f do the redirect
  if(req.body.password === "ILoveProgramming"){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.sendFile(__dirname + "/public/index.html"); // can also use res.redirect("/")
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});