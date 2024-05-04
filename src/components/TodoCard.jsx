import React from "react";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function TodoCard({ task }) {
  return (
    <>
      <div className="my-3 flex justify-between items-center border-b border-gray-400 py-3">
        <div>
          <input type="checkbox" name="" id="" />
        </div>
        <div>
          <span className={task.complete ? "line-through" : ""}>
            {task.name}
          </span>
        </div>
        <div className="flex space-x-2 text-lg text-gray-500">
          <MdDelete />

          <FaEdit />
        </div>
      </div>
    </>
  );
}
