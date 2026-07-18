"use client"
import Image from "next/image";

export default function Home() {

  const handleclick = async ()=> {
    let data = ()=>{
      Name: "Ayush"
      Role: "Web Developer"
    }
    let a = await fetch("./api/add", {
  method: "POST", headers:{"Content-Type": "application/json"},
  body: JSON.stringify(data),})
    let res = a.json()
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-xl font-bold">
        Next.js API routes demo 
      </h1>

      <button onClick={handleclick()}>Click Me</button>
    </div>
    
  );
}
