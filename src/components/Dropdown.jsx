import PropTypes from "prop-types";
import styles from "../styles/Dropdown.module.css";

const Dropdown = ({ items }) => {
  return (
    <div className={styles.container}>
      <select className={styles.customSelect}>
        {items.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Dropdown;
