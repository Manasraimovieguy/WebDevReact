import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

//my method
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({extended: true})); //implemented

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   res.send("<h1>Your brand name is </h1><br><h3>" + req.body.street +" " + req.body.pet + "✌️</h3>");
// })

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

//expected method

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

app.use(bodyParser.urlencoded({extended: true})); //implemented

function bandNameGenerator(req, res, next){ //using custom middleware
  console.log(req.body); // just for lulz
  bandName = req.body.street + req.body.pet; // or you can write req.body["street"]
  next();
}

app.use(bandNameGenerator); // calling custom function

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your brand name is </h1><br><h2>${bandName}✌️</h2>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});