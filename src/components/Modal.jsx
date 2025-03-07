import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Modal.module.css";

import Chip from "./Chip";
import Pomodoro from "./Pomodoro";
import TodoItem from "./TodoItem";

const Modal = ({ isOpen, onClose, content, toggleState, btnStyle }) => {
  if (!isOpen) return null;

  const resources =
    content.resources > 1
      ? content.resources.map((res) => res.split(":"))
      : content.resources;

      const subtasks = content.subTasks ? 'subTasks' : 'subtasks'

  return (
    <>
      {
        <div className={styles.modalOverlay} onClick={onClose}>
          <div
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {typeof content === "object" ? (
              <div className={styles.modalContent}>
                <div className={styles.intro}>
                  <h3 style={{fontSize: '1.6rem'}}>{content.task}</h3>
                  <p>{content.description}</p>

                  <div className={styles.chipContainer}>
                    {content.techStack.map((stack, i) => (
                      <Chip title={stack} key={i} />
                    ))}
                  </div>
                </div>

                {content[subtasks] && (
                  <div className={styles.todoItemsContainer}>
                    <h4 style={{fontSize: '1rem'}}>Checklist</h4>
                    {content[subtasks].map((task, i) => (
                      <TodoItem todo={task} key={i} />
                    ))}
                  </div>
                )}

               { content.resources ? <div className={styles.resources}>
                  <h4>Resources</h4>
                  {(resources.length > 1) ? (
                    resources.map((res, i) => (
                      <p key={i}>
                        {/* <a href={res.splice(1).join(":")} target="blank">
                        {res[0]}
                      </a> */}
                        <a href={res} target="blank">
                          {res.substring(0, 35)}...
                        </a>
                      </p>
                    ))
                  ) : (
                    <p>
                      <a href={resources[0]} target="blank">
                        {resources[0].substring(0, 35)}...
                      </a>
                    </p>
                  )}
                </div> : null}

                <Pomodoro time={content.time}/>
                <button
                  style={btnStyle}
                  className={styles.statusBtn}
                  onClick={() => toggleState(content.id)}
                >
                  {content.completed ? "Completed" : "Mark Complete"}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      }
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.obj,
  btnStyle: PropTypes.obj,
  toggleState: PropTypes.func,
};

export default Modal;
