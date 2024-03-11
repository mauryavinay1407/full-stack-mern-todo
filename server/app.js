const express=require("express");
const todoRouter=require("./routes/todos.routes");
const app=express();



app.use(express.json())

app.use("/api/v1",todoRouter);

module.exports={app}
