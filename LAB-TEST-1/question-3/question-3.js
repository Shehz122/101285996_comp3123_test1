// Shehzad Contractor - 101285996
let fs = require('fs')

let path = "./Logs"

// create 10 log files and writing some text into the file
if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
    process.chdir(path)
    console.log("Question 3 Completed")
    console.log("....................")
    for (let i = 0; i < 10; i++) {
        var fName = `log${i}.txt`
        fs.writeFileSync(fName, fName)
        // outputing the files names to console
        console.log(fName)
    }
    console.log("....................")

    //  Removes all the files from the Logs directory, if exist
} else if(fs.existsSync(path)){
    const file = fs.readdirSync(path)
    console.log("Question 3 Completed")
    console.log("....................")
    for (fName of file) {
        fs.unlinkSync(`${path}/${fName}`)
        //  outputing the file names to delete
        console.log("delete files...", fName)
    }
    fs.rmdirSync(path)
   
}