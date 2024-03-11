const express=require("express");
const cors=require("cors");
const todoRouter=require("./routes/todos.routes");
const app=express();
const dotenv=require("dotenv")
require('dotenv').config();

const URL=process.env.FE_URL ;


const corsOptions = {
    origin: ["http://localhost:5173", `${URL}`],
    methods: ["GET", "POST", "PUT", "DELETE"] ,
    credentials: true
  };

app.use(express.json())

app.use("/api/v1",cors(corsOptions),todoRouter);

module.exports={app}
