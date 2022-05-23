import React, { useState } from "react";
import { AddTask } from "./AddTask";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";
import data from "./Tasks/data/tasks.json"
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [real,setreal] = useState(data);
  console.log(real)
  const [done,setdone] = useState(0);

  const handledata = (value) => {
    const payload = {
      text:value,
      status:false
    }
    console.log(payload)
    setreal([...real,payload])
  }
  const deleteit= (value) => {
     var x = real.filter((real) => real.text != value)
     setreal(x)
    }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
     <TaskHeader done={done} alltask={real.length}/>
      <AddTask getdata={handledata}/>
      <Tasks deleteit={deleteit} data={real}/>
    </div>
  );
};

export default TaskApp;
