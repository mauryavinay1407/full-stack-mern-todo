const express=require("express");
const router=express.Router();
const {getTodos,addTodo,deleteTodo,updateTodo}=require("../controllers/todos.controller")

router.get("/todos",getTodos)
router.post("/addtodo",addTodo)
router.delete("/delete/:id",deleteTodo);
router.put("/update/:id",updateTodo)

module.exports=router;