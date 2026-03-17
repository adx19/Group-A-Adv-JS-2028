const fs = require("fs");

console.log("start")

fs.readFile("f1.txt", (err, data) => {
  if(err){
    console.log(err);
    return;
  }

  console.log("data --> " + data);
})
fs.readFile("f2.txt", (err, data) => {
  if(err){
    console.log(err);
    return;
  }

  console.log("data --> " + data);
})
fs.readFile("f3.txt", (err, data) => {
  if(err){
    console.log(err);
    return;
  }

  console.log("data --> " + data);
})

console.log("end");