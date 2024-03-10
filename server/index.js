const {app}=require("./app")
const {connectDB}=require("./db/connection")
const dotenv=require("dotenv");
dotenv.config({path:"./.env"})

const PORT=process.env.PORT||4000;

connectDB()
.then(()=>{
    app.listen(PORT,()=>console.log(`Server is started at http://localhost:${PORT}`))
})
.catch((error)=>{
    console.log("MONGO DB connection failed",error)
})





