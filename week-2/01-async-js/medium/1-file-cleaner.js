// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```
// After the program runs, the output should be
// ```
// hello world my name is raman
// ```

const { isUtf8 } = require("buffer")
const fs = require("fs")
let filePath = "data.txt"

fs.readFile(filePath, "utf-8", function (err1, data1) {
    if (err1) {
        console.log(`Failed to read file: ${err1}`);
    } else {
        console.log("File read successfully");
        console.log(`File contents: ${data1}`);

        // update spaces

        let updatedData = data1.replaceAll(/\s+/g, " ");
        console.log(`Updated data: ${updatedData}`);

        fs.writeFile(filePath, "utf-8", function (err2) {
            if (err2) {
                console.log(`Issue with writing data to file: ${err2}`)
            } else {
                console.log("Data written successfully");

                fs.readFile(filePath, "utf-8", function (data3, err3) {
                    if (err3) {
                        console.log(`Failed to read the file: ${err3}`);
                    } else {
                        console.log("File processed sucessfully");
                        console.log(`File content: ${data3}`);

                        if (data3 == updatedData) {
                            console.log("Extra spaces removed !!");
                        } else {
                            console.group("Process Failed !! ");
                        }
                    }
                })
            }
        })
    }
})