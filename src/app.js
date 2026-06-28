const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://mern-chat-frontend-2rpshnu1b-sriniketh-vangipurams-projects.vercel.app",
    ],
    methods:["GET","POST"],
    credentials:true,
}));

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Socket server connected and Running.");
});

module.exports=app;