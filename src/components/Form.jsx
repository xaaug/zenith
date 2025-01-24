import PropTypes from "prop-types";
import styles from "../styles/Form.module.css";

const Form = ({ generateTasks }) => {
  const getFormData = (formData) => {
    generateTasks(Object.fromEntries(formData));
  };

  return (
    <div className={styles}>
      <form action={getFormData}>
        <label>
          Project Description
          <input
            type="text"
            name="project"
            id="project"
            placeholder="Build a weather app"
            required
            defaultValue='Build a weather app'
          />
        </label>

        <label>
          Tech Stack
          <input
            type="text"
            name="stack"
            id="stack"
            placeholder="React, Tailwind CSS, Firebase"
            required
            defaultValue='React, Firebase, Tailwind'
          />
          <span className="info">
            Separate the technologies using a comma{" "}
            <span className={styles.comma}>,</span>
          </span>
        </label>

        <button>Generate Tasks</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  generateTasks: PropTypes.func.isRequired,
};

export default Form;
