const formatTime = (time) => {
  const timer = Number(time);
  let hours;
  let minutes;

  if (timer > 60 && timer % 60 !== 0) {
    hours = Math.floor(timer / 60);
    minutes = timer % 60;
  } else if (timer > 60 && timer % 60 === 0) {
    hours = timer / 60;
    minutes = 0;
  } else if (timer < 60) {
    hours = 0;
    minutes = timer;
  }

  return [hours, minutes];
};

let intervalId;
let hours;
let minutes;

const startPomodoro = (time = 120) => {
  const formattedTime = formatTime(time);

  if (formattedTime[0] > 0 && formattedTime[1] === 0) {
    formattedTime[1] = 59;
    formattedTime[0]--;
  }

  console.log("Starting the Pomodoro");

  intervalId = setInterval(() => {
    if (formattedTime[1] > 0) {
      minutes = formattedTime[1] - 1;
      formattedTime[1] = minutes;
      hours = formattedTime[0];

      if (formattedTime[1] === 0 && formattedTime[0] > 0) {
        hours = formattedTime[0] - 1;
        formattedTime[1] = 59;
        formattedTime[0] = hours;
      }
      return formattedTime;
    } else {
      return 0;
    }
  }, 60);
};

const stopPomodoro = () => {
  clearInterval(intervalId);
};

export { startPomodoro, stopPomodoro, formatTime };
