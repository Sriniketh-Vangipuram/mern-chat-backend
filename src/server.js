require("dotenv").config();

const http=require("http");
const {Server}=require("socket.io");

const app=require("./app");
const intializeSocket=require("./socket/socket");

const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:
        [   
            "http://localhost:5173",
            "https://mern-chat-frontend-2rpshnu1b-sriniketh-vangipurams-projects.vercel.app",
        ],
        methods:["GET","POST"],
        credentials:true,
    },
});

intializeSocket(io);

const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})