const fs= require("fs");
fs.writeFileSync("file.txt","My name is himanshu and welcome to my channel");
fs.appendFileSync(" file.txt","Hi Everyone how are you all");
const buf=fs.readFileSync("file.txt");
org_data=buf.toString();
console.log(org_data);
