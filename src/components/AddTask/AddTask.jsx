import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getdata}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [addit,setadd] = useState("");


  return (
    <div className={styles.todoForm}>
      <input  onChange={(e) => setadd(e.target.value)} data-cy="add-task-input" type="text" />
      <button disabled={!addit} onClick={() => getdata(addit)} data-cy="add-task-button">Add</button>
    </div>
  );
};

export default AddTask;
