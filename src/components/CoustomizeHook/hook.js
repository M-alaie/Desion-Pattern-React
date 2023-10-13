import React, { useEffect } from "react";
import Count from "./counter";
import WindowWidth from "./windowWith";
import { useState } from "react";




const useCount = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count+1);
  };

  const decrement = () => {
    setcount((c) => c - 1);
  };

  return { count, increment, decrement };
};

const useWidth=()=>{
    const [width,setwidth]=useState(0)
    useEffect(()=>{
        const handleResize=()=>{
            setwidth(window.innerWidth)
        }
        window.addEventListener("resize",handleResize);

        return ()=> window.removeEventListener('resize',handleResize)


    })

    return width

}

const Counter = () => {
  const { count, increment, decrement } = useCount();

  const width=useWidth()

  return (
    <div className="App">
      <Count count={count} increment={increment} decrement={decrement} />
      <hr />

      <WindowWidth width={width} />
    </div>
  );
};

export default Counter;
