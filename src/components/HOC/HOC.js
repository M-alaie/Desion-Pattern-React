
import React, { useState, useEffect } from "react";

const HOC = (WrapperdComponent, entity) => {
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
    let filterData = data.slice(0,10).filter(item=>{

      if (entity === "users") {
        // Filter based on the 'name' property
        return item.name.includes(terms);
      } else if (entity === "todos") {
        // Filter based on the 'title' property
        const { title } = item;
        return title.includes(terms);
      }
    });
    return (
      <div>
        <h2>{entity} List</h2>
        <input
          type="text"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
        />
        <WrapperdComponent data={filterData} />
      </div>
    );
  };
};

export default HOC;
