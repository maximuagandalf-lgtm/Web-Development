
- create route files as "./app/api/add/route.js". This conveys the Next.js that where to look for APIs.

- " import {NextRequest} from "next/server" ", NextRequest is used to send data from server.Refer tp route.js

- imp syntax for getting data from server-->

- let a = await fetch("./api/add", {
  method: "POST", headers:{"Content-Type": "application/json"},
  body: JSON.stringify(data),})
    let res = a.json()
    console.log(res)}