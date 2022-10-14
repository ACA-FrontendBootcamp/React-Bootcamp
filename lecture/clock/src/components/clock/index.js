import React, { useReducer, useEffect } from "react";

const ACTION_TYPES = {
  SET_TIME: "SET_TIME",
};

let date = new Date();
const initialState = {
  hour: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_TIME: {
      return action.payload;
    }
    default:
      return state;
  }
};

function Clock() {
  const [time, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let { hour: h, minutes: m, seconds: s } = time;

    setInterval(() => {
      let dataInterval = new Date();
      let secondsInterval = dataInterval.getSeconds();
      s = secondsInterval + 1;
      m = dataInterval.getMinutes();
      h = dataInterval.getHours();
      dispatch({
        type: ACTION_TYPES.SET_TIME,
        payload: {
          hour: h,
          minutes: m,
          seconds: s,
        },
      });
    }, 1000);
  }, []);

  const fixTimeStyle = () => {
    let { hour: hour, minutes: minutes, seconds: seconds } = time;
    if (time.hour < 10) {
      hour = `0${time.hour}`;
    }
    if (time.minutes < 10) {
      minutes = `0${time.minutes}`;
    }
    if (time.seconds < 10) {
      seconds = `0${time.seconds}`;
    }
    return `${hour} : ${minutes} :${seconds}`;
  };

  return (
    <div>
      <h1>Time is {fixTimeStyle()}</h1>
    </div>
  );
}

export default Clock;
