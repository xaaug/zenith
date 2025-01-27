import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../styles/Pomodoro.module.css";
import { Button } from "@mui/material";

const Pomodoro = ({ time = 120 }) => {
  const [currentTime, setCurrentTime] = useState([]);
  const [timerRunning, setTimerRunning] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timer}>
          <h3>02<span>H</span> : 30<span>M</span></h3>
        </div>

        <div className={styles.btnContainer}>
          {!timerRunning ? (
            <button>Start</button>
          ) : (
            <>
              <button>Pause</button> <button>Stop</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

Pomodoro.propTypes = {
  time: PropTypes.number,
};

export default Pomodoro;
