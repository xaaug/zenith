import styles from "../styles/Project.module.css";
import PropTypes from "prop-types";

import Chip from "./Chip";

const ProjectItem = ({ title, stack, handleSingleProjectView , id}) => {
  return (
    <>
      <div className={styles.project} onClick={() => handleSingleProjectView(id)}>
        <h3>{title}</h3>
        <div className={styles.chipsContainer}>
          {stack.map((tech, i) => (
            <Chip title={tech} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  stack: PropTypes.array,
};

export default ProjectItem;
