import express from "express";

const app = express();
const port = 3000;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let advice = "";
let day = weekday[d.getDay()];
if(day === "Sunday" || day === "Saurday"){
    advice = "have fun";
}
else{
    advice = "work hard";
}

app.get("/", (req,res) => {
    res.render("index.ejs", // so it seems like we don't have to mention the path to index.ejs here, not sure why
        {
            wday: day,
            advicew: advice
        
        }
    );
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});