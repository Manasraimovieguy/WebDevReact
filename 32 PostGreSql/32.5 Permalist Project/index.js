import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "Daigo@Dojima#0",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const result = await db.query("Select * from items");
// console.log(result.rows);
let items = result.rows;

async function getLatestList(){
  const latestList = await db.query("Select * from items");
  return latestList.rows;
}

app.get("/", async (req, res) => {
  items = await getLatestList();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("insert into items (title) values ($1)", [item]);
  // items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  await db.query("Update items set title=($1) where id=($2)",[req.body.updatedItemTitle, req.body.updatedItemId]);
  res.redirect("/");

});

app.post("/delete", async (req, res) => {
  await db.query("Delete from items where id=($1)",[req.body.deleteItemId]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
