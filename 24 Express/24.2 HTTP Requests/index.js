import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders); // we use this to view details of the request sent to localhost
    res.send("Hello There Obi Wan, Star Wars sucks brr!!!!!!");
}); // Implementing a get request;

app.get("/about",(req,res) => {
    res.send("<h1>About Me</h1><br><p>Hey this is Manas Rai, and you're watching Disney Channel, bam ba parum</p>");
});

app.get("/contact", (req,res) =>{
    res.send("<h1>Contact Me</h1><br><p>You can contact me on +1 PLS DON'T CALL</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// in this lesson we installed 'nodemon' package to ensure that whenever we make changes to the file, we won't have to keep restarting the server in order to view the changes
// npm install -g (-g keyword stands for 'global', it means any package we install wil be installed not for all projects using node, and won't just be exclusive to our current project)
// HTTP return code cheatsheet on Angela's course is pretty funny, I have typed it below coz I want that in print

// 1** - Hold On
// 2** - Here You Go
// 3** - Go Away
// 4** - You f*cked up (You -> Client)
// 5** - I f*cked up (I -> Server)