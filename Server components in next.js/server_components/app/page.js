// "use client"
import fs from "fs/promises"

// we can import client components like NavBar and use them inside server components like this one and we won't face any error
import NavBar from "@/components/NavBar"

// import {useState, useEffect} from "react"

export default function Home() {

  //in this default function we write our js logic after the js logic is processed the code inside return() is then parsed as an HTML page to the browser. So we can use the saem file as both client and browser component easily.

  // const [count, setCount] = useState(0)

  //we will get this logged into server not in the browser if we remove "use client".
  console.log("Hey! I am Ayush.")

  let a = fs.readFile(".gitignore")
  a.then((e)=>{console.log(e.toString())})
  
  return (
   <div>
    <NavBar/>
    I am Ayush
    I am a component 
    {/* {count} */}
    {/* <button onClick={()=> setCount(count+1)}>Click Me</button> */}
   </div>
  );
}
