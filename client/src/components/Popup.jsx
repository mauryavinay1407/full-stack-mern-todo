import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import axios from "axios";


const Popup = ({ setShowpopup, setUpdateUI, oldTitle, oldDescription, updateId }) => {
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  const updateTodo = async () => {
    if (!(title && description)) {
      toast.error("Enter both the field");
      return;
    }
    try {
      await axios.put(
        `/api/v1/update/${updateId}`,
        {
          title,
          description,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      setUpdateUI((prevState) => !prevState);
      setShowpopup((prevState) => !prevState);
    } catch (error) {
      console.log("Update failed", error);
    }
  };

  return (
    <>
      <div className="mt-10 w-full md:w-1/2 lg:w-1/3 p-6 bg-black rounded-lg fixed z-50 hover:border border-red-400 cursor-pointer">
        <div className="flex justify-end text-gray-200 mb-2 text-2xl">
          <RxCross1
            onClick={() => {
              setShowpopup((prevState) => !prevState);
            }}
          />
        </div>
        <div>
          <input
            value={title}
            type="text"
            placeholder="Update title"
            className="w-full mb-2 p-2 outline-none rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            value={description}
            type="text"
            placeholder="Update description"
            className="w-full mb-5 p-2 outline-none rounded-md"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="w-full h-12 mb-10 p-1 outline-none rounded-md bg-gray-800 text-white hover:bg-gray-600"
          onClick={updateTodo}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default Popup