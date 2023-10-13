import React, {} from "react";
import HOC from "../HOC";

const Userlist = ({data}) => {

  return (
    <div>
      <h2>UserList</h2>

      <ul>
     {data}
      </ul>

    </div>
  );
};

const SerarchingUsers=HOC(Userlist,"users")

export default SerarchingUsers;



// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.onreadystatechange = function () {
//   if (this.readyState === XMLHttpRequest.DONE) {
//     if (this.status === 200) {
//       const jsonResponse = JSON.parse(xhr.responseText);
//       setUsers(jsonResponse);
//     } else {
//       console.error("Error fetching data:", xhr.statusText);
//     }
//   }
// };

// xhr.send();
