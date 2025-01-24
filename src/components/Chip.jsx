import PropTypes from "prop-types";

const Chip = ({ title }) => {
  const colors = [
    "#58C4DC",
    "#D9D9D9",
    "#FDA4A4",
    "#FDDBA4",
    "#E2FDA4",
    "#B3FDA4",
    "#A4F7FD",
    "#A4BDFD",
    "#FDA4E9",
  ];

  const bgColor = colors[Math.floor(Math.random() * colors.length)];

  const styles = {
    background: bgColor,
    width: "fit-content",
    color: "#000",
    fontSize: ".8rem",
    padding: ".3rem .8rem",
    borderRadius: "100px",
  };

  return (
    <div style={styles}>
      <p>{title}</p>
    </div>
  );
};

Chip.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Chip;
