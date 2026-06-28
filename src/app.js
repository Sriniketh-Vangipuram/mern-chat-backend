const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST"],
}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Socket server connected and Running.");
});

module.exports=app;