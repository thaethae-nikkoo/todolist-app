import React from "react";
import { FaPencilAlt } from "react-icons/fa";

export default function Form() {
  return (
    <div>
      <label
        htmlFor="addtask"
        className="text-md font-bold flex justify-start items-center"
      >
        <FaPencilAlt />
        <span className="mx-3"> Add new task :</span>
      </label>
      <div className="flex justify-center items-center space-x-2">
        <input
          type="text"
          name="addTodo"
          id="addtask"
          placeholder="What do you need to do?"
          className="w-full p-3 rounded-lg border border-gray-300 my-3 shadow-lg bg-gray-100 text-md"
        />
        <button
          type="submit"
          className="border border-gray-200 bg-blue-800 p-3  rounded-lg text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}
