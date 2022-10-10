import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [value, setValue] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isStarted) {
      timeoutId = setTimeout(() => {
        setTime(time - 1);
        if (time == 1) {
          setIsStarted(false);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [time, isStarted]);

  const handleStart = () => {
    if (time <= 0) {
      setTime(+value);
      setValue("");
      setIsStarted(true);
    }
  };
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
      <button onClick={handleStart} disabled={!value}>
        Start
      </button>
      <h1> Time : {time} </h1>
      {time > 0 && (
        <button onClick={() => setIsStarted(!isStarted)}>
          {" "}
          {isStarted ? "Pause" : "Continue"}{" "}
        </button>
      )}
    </div>
  );
}

export default Timer;
