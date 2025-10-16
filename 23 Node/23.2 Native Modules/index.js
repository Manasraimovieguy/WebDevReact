const fs = require("fs");
// fs.writeFile("message.txt","Woah!!!!!!! Just added this line again",(err)=>{
//     if(err) throw err;
//     console.log("Great scott!!! The file has been saved");
// }) // REMEMBER => This overwrites the file, it doesn't add to what is already there

fs.readFile("message.txt","utf-8",(err,data)=>{ // IMP: Order of parameters matter here, I put (data,err) and was getting an error thrown and didn't know why
    if (err) throw err;
    console.log(data);
}) // Making additional comment from new laptop, here is another one