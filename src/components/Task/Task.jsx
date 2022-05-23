import React, { useState } from "react";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = ({data,deleteit}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [check,setcheck] = useState(false)
 
  const handlecheck = () => {
     
     setcheck(!check);
     
  }
 
  return (
    <li data-cy="task" className={styles.task}>
      <input onClick={handlecheck} type="checkbox" data-cy="task-checkbox" />
      <div className={check==true ? styles.line : null} data-cy="task-text">
        {data}
      </div>
      <Counter/>
      <button onClick = {() => {
        
        return deleteit(data)}}data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
