import PropTypes from "prop-types";
import { useRef, useState } from "react";
import styles from "../styles/Pomodoro.module.css";

import { formatTime } from "../js/pomodoro";

const Pomodoro = ({ time }) => {
  const [currentTime, setCurrentTime] = useState(formatTime(time));
  const [timerRunning, setTimerRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setTimerRunning(true);

    let hours;
    let minutes;
    if (currentTime[0] > 0 && currentTime[1] === 0) {
      currentTime[1] = 59;
      currentTime[0]--;
    }

    intervalRef.current = setInterval(() => {
      if (currentTime[1] > 0) {
        minutes = currentTime[1] - 1;
        currentTime[1] = minutes;
        hours = currentTime[0];

        if (currentTime[1] === 0 && currentTime[0] > 0) {
          hours = currentTime[0] - 1;
          currentTime[1] = 59;
          currentTime[0] = hours;
        }
        setCurrentTime([hours, minutes]);
      } else {
        return 0;
      }
    }, 60000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setCurrentTime(formatTime(time));
    setTimerRunning(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timer}>
          <h3>
            {String(currentTime[0]).padStart(2, "0")}
            <span>H</span> : {String(currentTime[1]).padStart(2, "0")}
            <span>M</span>
          </h3>
        </div>

        <div className={styles.btnContainer}>
          {!timerRunning ? (
            <button onClick={startTimer}>Start</button>
          ) : (
            <>
              {" "}
              <button onClick={stopTimer}>Stop</button>
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
