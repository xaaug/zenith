import PropTypes from "prop-types";
import styles from "../styles/Form.module.css";

const Form = ({ generateTasks }) => {
  const getFormData = (formData) => {
    generateTasks(Object.fromEntries(formData));
  };

  return (
    <div className={styles.container}>
      <form action={getFormData}>
        <label>
          Project Description
          <input
            type="text"
            name="project"
            id="project"
            placeholder="Build a weather app"
            required
            defaultValue="Build a weather app"
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
            defaultValue="React, Firebase, Tailwind"
          />
          <span className="info">
            Input technologies separated by a comma
            <span className={styles.comma}>,</span>
          </span>
        </label>

        <label>
          Skill Level
          <div className={styles.selectContainer}>
            <select className={styles.customSelect} name="skill" required>
              <option value="">Select a skill</option>
              <option value="beginner">Beginner</option>
              <option value="advanced">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
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
