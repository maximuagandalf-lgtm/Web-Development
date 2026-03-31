import fs from "fs/promises"

let a = await fs.readFile("ayush.txt")

let b = await fs.writeFile("ayush.txt", "\n\n\n\nVery Very Very")

let c = await fs.appendFile("ayush2.txt", "\n\n\nAyush is a very good boy")
console.log(a.toString(), b, c) 