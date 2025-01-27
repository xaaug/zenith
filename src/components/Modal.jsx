import PropTypes from "prop-types";
import styles from "../styles/Modal.module.css";

import Chip from "./Chip";
import Pomodoro from "./Pomodoro";
import TodoItem from "./TodoItem";

const Modal = ({ isOpen, onClose, content, toggleState, btnStyle }) => {
  if (!isOpen) return null;

  const resources = content.resources.map((res) => res.split(":"));
  console.log(resources);
  console.log(content.resources);

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
                  <h3>{content.task}</h3>
                  <p>{content.description}</p>

                  <div className={styles.chipContainer}>
                    {content.techStack.map((stack, i) => (
                      <Chip title={stack} key={i} />
                    ))}
                  </div>
                </div>

                <div className={styles.todoItemsContainer}>
                  <h4>Checklist</h4>
                    {content.subTasks.map((task, i) => <TodoItem todo={task} key={i}/>)}
                </div>

                <div className={styles.resources}>
                  <h4>Resources</h4>
                  {resources.map((res, i) => (
                    <p key={i}>
                      <a href={res.splice(1).join(":")} target="blank">
                        {res[0]}
                      </a>
                    </p>
                  ))}
                </div>

                <Pomodoro />
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
