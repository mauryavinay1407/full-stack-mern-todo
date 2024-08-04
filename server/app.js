const express=require("express");
const cors=require('cors');
const todoRouter=require("./routes/todos.routes");
const app=express();

const corsOptions = {
    origin: 'https://full-stack-mern-todo-client.vercel.app',
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions)); 

app.use(express.json())

app.use("/api/v1",todoRouter);

module.exports={app}
