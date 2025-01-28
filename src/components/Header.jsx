import PropTypes from "prop-types";
import styles from "../styles/Header.module.css";

const Header = ({handleProjectsView}) => {
  return (
    <header className={styles}>
      <p>Zenith</p>
      <button onClick={handleProjectsView}>Projects</button>
    </header>
  );
};

Header.propTypes = {
  handleProjectsView : PropTypes.func
}

export default Header;
