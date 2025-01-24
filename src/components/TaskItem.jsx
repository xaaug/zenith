import Chip from "./Chip";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/TaskItem.module.css";
import Modal from './Modal'
import { useState } from "react";

const TaskItem = ({ task, toggleState, deleteTask }) => {
  const btnBg = {
    background: task.completed ? "#00993B" : "#030639",
  };

  const completeState = {
    opacity: task.completed ? ".7" : "1",
  };


  return (
    <>
    <div className={styles.container} style={completeState}>
      <div className={styles.editTask}>
        <h3>
          {task.task.length > 35
            ? `${task.task.substring(0, 35)}...`
            : task.task}
        </h3>
        <button onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} style={{ color: "#fb7272" }} />
        </button>
      </div>

      <p>{task.description}</p>
      <div className={styles.chipsContainer}>
        {task.techStack.map((techno, i) => (
          <Chip title={techno} key={i} />
        ))}
      </div>

      <div className={styles.estimatedTime}>EST: {task.time} min</div>

      <button style={btnBg} onClick={() => toggleState(task.id)}>
        {task.completed ? "Completed" : "Mark Complete"}
      </button>
    </div>
    </>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  toggleState: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TaskItem;
