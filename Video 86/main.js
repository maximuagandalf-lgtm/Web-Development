// const { createServer } = require('node:http');
// const fs = require("fs")
// // import http from "http"
// // import fs from "fs"
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>This is my second server</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d). importing named export

// import default export
// import obj from "./mymodule.js"
// console.log(obj).  this is for module type

// for commonjs type
const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)// we get automatic require, exports, dirname, filename from node js