import React from "react";
import TodoCard from "./TodoCard";

export default function Lists({ tasks }) {
  return (
    <>
      {tasks?.map((task) => (
        <TodoCard key={task.id} task={task} />
      ))}
    </>
  );
}
