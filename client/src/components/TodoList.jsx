import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { MdEdit,MdDelete  } from "react-icons/md";
import axios from "axios"
import Popup from "./Popup";

const TodoList = ({ todos, setUpdateUI }) => {
  const [showPopup, setShowpopup] = useState(false);
  const [oldTitle, setOldTitle] = useState("");
  const [oldDescription, setOldDescription] = useState("");
  const [updateId, setUpdateId] = useState(0);

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/v1/delete/${id}`);
      setUpdateUI((prevState) => !prevState);
    } catch (error) {
      console.log("Delete failed!!!", error);
    }
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div className="flex justify-center">
        {showPopup && (
          <Popup
            setShowpopup={setShowpopup}
            setUpdateUI={setUpdateUI}
            oldTitle={oldTitle}
            oldDescription={oldDescription}
            updateId={updateId}
          />
        )}
      </div>
      {todos.map((data) => {
        return (
          <Layout key={data._id}>
            <div className="flex gap-x-4 align-middle overflow-visible font-mono sticky">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-left">{data.title}</h2>
                <span className="text-left">{data.description}</span>
              </div>
              <div className="ml-auto">
                <button
                  onClick={() => {
                    setOldTitle(data.title);
                    setOldDescription(data.description);
                    setUpdateId(data._id);
                    setShowpopup((prevState) => !prevState);
                  }}
                >
                  <MdEdit className="size-7" />
                </button>
                <button
                  onClick={() => {
                    deleteTodo(data._id);
                  }}
                >
                  <MdDelete className="size-7 ml-2 text-red-500 hover:text-red-900" />
                </button>
              </div>
            </div>
          </Layout>
        );
      })}
    </div>
  );
};


export default TodoList