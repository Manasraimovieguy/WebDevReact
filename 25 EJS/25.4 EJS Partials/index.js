import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

app.use(express.static("public")); // this is what I needed to look up, basically for the CSS files to render, I need to use express middleware to point the ejs file to the static files location, which here is in the publick folder

app.get("/", (req, res) =>{
  res.render("index.ejs");

})

app.get("/contact", (req, res) =>{
  res.render("contact.ejs");
})

app.get("/about", (req, res) =>{
  res.render("about.ejs");
})

app

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
