const express=require("express");
const cors=require("cors");
const todoRouter=require("./routes/todos.routes");
const app=express();


const corsOptions = {
    origin: ["http://localhost:5173", "https://full-mern-todo.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"] ,
    credentials: true
  };

app.use(express.json())

app.use("/api/v1",cors(corsOptions),todoRouter);

module.exports={app}
