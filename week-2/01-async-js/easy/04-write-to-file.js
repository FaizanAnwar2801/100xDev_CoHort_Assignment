// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")

let data_to_be_written = " This is a new entry via fs.writeFile"

fs.appendFile("a.txt", data_to_be_written, (err) => { // appends the data in a.txt
    if (err) {
        throw (err);
    }
})

// if fs.writeFile is used it erases the previous data and only writes the new data provided
// hence fs.appendFile is used in the above code