"use server" // likte this we can create multiple server actions for our web apps
import fs from "fs/promises"

const submitAction = async (e) => {
  console.log(e.get("name"), e.get("address"))
  let a = await fs.writeFile("ayush.txt", `Name is: ${e.get("name")}, Address is: ${e.get("address")}`)
}

export default submitAction
