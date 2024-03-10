const {Todos}=require("../models/todos.model")



const getTodos=async(req,res)=>{
    const todos=await Todos.find();
    res.json(todos);
}

const addTodo=async(req,res)=>{
    const {title,description}=req.body;
    if(!(title && description))
    res.status(401).json({
    msg:"Fill both the field"
})
      await Todos.create({
        title,
        description
      })
      res.json({msg:"awsedrfgh"});
}

const deleteTodo=async(req,res)=>{
  const todoId=req.params.id;
  await Todos.findOneAndDelete({_id:todoId});
  res.status(201).json({msg:"Todo is deleted"});
}

const updateTodo=async(req,res)=>{
  const todoId=req.params.id;
  const {title,description}=req.body;
   console.log(req.body);
  if(!(title && description))
  res.status(401).json({msg:"Fill both the field"})
   
  await Todos.findByIdAndUpdate({_id:todoId},{
    title,
    description
  })
    res.status(201).json({msg:"Todo is updated"})
}

module.exports={getTodos,addTodo,deleteTodo,updateTodo};