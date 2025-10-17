/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from 'fs';
// const fs = require("fs");
const fsWrite = fs;
var qrImage = qr;

const questions = [
  {
    type: 'input',
    name: 'url',
    message: 'What URL do u want to generate a QR code for? Moron',
    default: 'www.google.com',
  },
];

inquirer.prompt(questions).then((answers) => {
    console.log('\nQR Code Generated for url:');
    var qr_svg = qrImage.image(`${answers["url"]}`, { type: 'png' });
    qr_svg.pipe(fsWrite.createWriteStream('qr_img.png'));
    //   console.log(JSON.stringify(answers, null, '  '));
    fsWrite.writeFile("URL.txt", `${answers["url"]}`, (err) => {
        if (err) throw err;
        console.log("Great scott!!! The file has been saved");
    })

});