// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function readTheFile(callBack) {
  fs.readFile("abc.txt", "utf-8", function (err, data) {
    callBack(data);
  });
}

function readFile(fileName) {
  return new Promise(readTheFile);
}

function callBack(contents) {
  console.log(contents);
}

const p = readFile("./abc.txt");

p.then(callBack);