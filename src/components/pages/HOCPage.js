import React from "react";
import Todolist from "../HOC/List/todo_list";
import SerarchingUsers from "../HOC/List/user_list";

 const HOCPage = () => {
  return (
    <div>
      <SerarchingUsers />
      <Todolist></Todolist>
    </div>
  );
};

export default HOCPage


