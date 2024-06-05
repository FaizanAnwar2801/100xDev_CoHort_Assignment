// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs")

let a = 0;

fs.readFile("a.txt", "utf8", function read(err, data) {
    console.log(data) // the code reads data from the text file a.txt
})

for (let i = 0; i < 1000000; i++) {
    a++
}

console.log("This propmt is after running of an expensive operation")
// still this line runs before the file content is read.
// this proves that fs.readFile is an async function.