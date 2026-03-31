const fs = require("fs")
console.log(fs)

console.log("Starting")
fs.writeFileSync("ayush.txt", "Ayush is a good boy")
console.log("Ending")

console.log("starting2")
fs.writeFile("ayush2.txt", "Ayush is a bad boy2", ()=>{
    console.log("done")
    fs.readFile("ayush2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
}) //writeFile() is preffered over writefile Sync

fs.appendFile("ayush.txt", "ayushchauhan", (e, d)=>{
    console.log(d)
})
console.log("Ending2")

