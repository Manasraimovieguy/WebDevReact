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

app.post("/submit", (req,res) => { //tested following api call on postman and localhost
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
