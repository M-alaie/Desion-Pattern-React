import React, { useState, useEffect } from "react";
const HOC = (wrapperdComponent, entity) => {
  return function Serarching(props) {
    const [data, setData] = useState([]);
    const [terms, setTerms] = useState("");

    useEffect(() => {
      const dataFetch = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        setData(json);
      };
      dataFetch();
    }, []); // Empty dependency array to run the effect only once

    let filterData = data.splice(0, 10).filter((data) => {
      if (entity === "users") {
        data.name.includes(terms).map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ));
      }
      if (entity === "todos") {
        const { title } = data;
        title.includes(terms).map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
          </li>
        ));
      }
    });
    return (
      <>
        <h2>{entity}</h2>
        <input
          type="text"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
        />
        <wrapperdComponent data={filterData} />
      </>
    );
  };
};

export default HOC;
