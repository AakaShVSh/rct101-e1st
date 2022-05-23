import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({done,alltask}) => {
  // sample values to be replaced
  let totalTask =alltask;
  let unCompletedTask = done;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">You have {unCompletedTask}</b>
      <b data-cy="header-total-task"> of {totalTask} tasks remaining</b>
    </div>
  );
};

export default TaskHeader;
