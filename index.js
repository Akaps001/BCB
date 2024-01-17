const express = require("express");
const server  = express();

server.get("/" ,(req,res) =>{
    res.send("Hello world !")
})
server.get("/Tunde" , (req, res) =>{
    res.send("welcome to back-end")
})
server.listen(4000, ()=>{
    console.log("server listening on port 4000")
})