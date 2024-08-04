import React from "react";
import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import axios from "axios";
import { toast } from "react-toastify";

const UserInput = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v1/todos`);
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [updateUI]);

  const addTodo = async () => {
    if (!(title && description)) {
      toast.error("Please enter both title and description");
      return;
    }
    try {
      console.log("add todo failed!!!");
     const response= await axios.post(
        `/api/v1/addtodo`,
        {
          title,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setUpdateUI((prevState) => !prevState);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log("Create Todo failed!!!", error);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-10 w-full md:w-1/2 lg:w-1/3 p-6 bg-gradient-to-r from-gray-900 to-gray-500 rounded-lg hover:border border-red-400 cursor-pointer">
          <div>
            <input
              value={title}
              type="text"
              placeholder="Enter title"
              className="w-full mb-2 p-2 outline-none rounded-md"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              value={description}
              type="text"
              placeholder="Enter description"
              className="w-full mb-5 p-2 outline-none rounded-md"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            className="w-full h-12 mb-10 p-1 outline-none rounded-md bg-black text-white hover:opacity-70"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <TodoList todos={todos} setUpdateUI={setUpdateUI} />
      </div>
    </>
  );
};


export default UserInput;
