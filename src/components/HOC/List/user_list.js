import React, {} from "react";
import HOC from "../HOC";

const Userlist = ({data}) => {

  const filterUser=data.map(user=><li key={user.id}>
      <span >{user.name}</span>
    </li>
  )
  return (
    <div>
      <ul>
    <li> {filterUser}</li>
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
