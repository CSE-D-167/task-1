const express=require("express");

const cors=require("cors");

const db=require("./db");

const app=express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

res.send("Portfolio API Running");

});

app.get("/projects",(req,res)=>{

db.query("SELECT * FROM projects",(err,result)=>{

if(err) throw err;

res.json(result);

});

});

app.listen(3000,()=>{

console.log("Server Running on Port 3000");

});
