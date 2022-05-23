import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import data from "./data/tasks.json"
const Tasks = ({data,deleteit}) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
      {data.map((e) => (<Task deleteit={deleteit}  data={e.text}/>))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
