import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [Todos, setTodos] = useState([]);
  const [term,setTerm]=useState('')

  useEffect(() => {

    const usersFetch=async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/todos")
      const json=await res.json()
    
      setTodos(json)
    }
    usersFetch()   

}, []); // Empty dependency array to run the effect only once
let filterTodos=Todos.slice(0,10).filter(({title})=>title.includes(term))
.map(todo=>(
  <li key={todo.id}>
    <span>{todo.title}</span>
  </li>
))
  return (
    <div>
      <h2>User List</h2>
      <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>
      <ul>
      <li>{filterTodos}</li>
      </ul>

    </div>
  );
};

export default Todolist;



// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/Todos");
// xhr.onreadystatechange = function () {
//   if (this.readyState === XMLHttpRequest.DONE) {
//     if (this.status === 200) {
//       const jsonResponse = JSON.parse(xhr.responseText);
//       setTodos(jsonResponse);
//     } else {
//       console.error("Error fetching data:", xhr.statusText);
//     }
//   }
// };

// xhr.send();
