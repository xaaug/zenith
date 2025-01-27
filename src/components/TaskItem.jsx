import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Chip from "./Chip";
import Modal from "./Modal";

import styles from "../styles/TaskItem.module.css";

const TaskItem = ({ task, toggleState, deleteTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const btnBg = {
    background: task.completed ? "#00993B" : "#030639",
  };

  const completeState = {
    opacity: task.completed && !isModalOpen ? ".7" : "1",
  };

  const updateCompleteBtn = (id) => {
    toggleState(id);
  };

  const formattedTaskText =
    task.task.charAt(0).toUpperCase() + task.task.split("").splice(1).join("");

  console.log(formattedTaskText);

  return (
    <>
      <div className={styles.container} style={completeState}>
        <div className={styles.editTask}>
          <h3 onClick={openModal} className={styles.title}>
            {task.task.length > 35
              ? `${task.task.substring(0, 35)}...`
              : task.task}
          </h3>
          <button
            onClick={() => deleteTask(task.id)}
            className={styles.deleteBtn}
          >
            <FontAwesomeIcon icon={faTrash} style={{ color: "#fb7272" }} />
          </button>
        </div>

        <p>{task.description}</p>
        <div className={styles.chipsContainer}>
          {task.techStack.map((tech, i) => (
            <Chip title={tech} key={i} />
          ))}
        </div>

        <div className={styles.estimatedTime}>ETA: {task.time} min</div>

        <button
          style={btnBg}
          className={styles.statusBtn}
          onClick={() => updateCompleteBtn(task.id)}
        >
          {task.completed ? "Completed" : "Mark Complete"}
        </button>
        {
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            content={task}
            toggleState={updateCompleteBtn}
            btnStyle={btnBg}
          />
        }
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
