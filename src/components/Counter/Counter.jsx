import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count,setcount] = useState(1)
  // NOTE: do not delete `data-cy` key value pair
  const handlecount = (value) => {
   
    setcount(count+value)
  }
  return (
    <div className={styles.counter}>
      <button onClick={() =>{
         if(count===0){
          return
        }
         handlecount(1)
      }} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={() => {
         if(count===1){
          return
        }
        handlecount(-1)}
        } data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
