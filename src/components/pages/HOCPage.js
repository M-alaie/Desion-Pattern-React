import React from "react";
import SerarchingTodos from "../HOC/List/todo_list";
import SerarchingUsers from "../HOC/List/user_list";

 const HOCPage = () => {
  return (
    <div>
      <SerarchingUsers />
      <SerarchingTodos></SerarchingTodos>
    </div>
  );
};

export default HOCPage


