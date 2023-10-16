import HOC from "../HOC";
const Todolist = ({ data }) => {
  const filterTodos = data.map(todo => {
    return (
      <li key={todo.id}>
        <p>{todo.title}</p>
      </li>
    );
  });
  return (
    <div>
      <ul>{filterTodos}</ul>
    </div>
  );
};

const SerarchingTodos = HOC(Todolist, "todos");

export default SerarchingTodos;

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
