import React, { useRef, useState, useEffect } from "react";
import Timer from "./timer";
import ToolCard from "../UI/card";

export default function Pomodoro() {
  const [POMODORO, SHORTBREAK, LONGBREAK] = [25, 5, 10];

  const [ticking, setTicking] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [poromodo, setPomodo] = useState(POMODORO);
  const [shortBreak, setShortBreak] = useState(SHORTBREAK);
  const [longBreak, setLongBreak] = useState(LONGBREAK);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(0);
  const [consumedSecond, setConsumedSecond] = useState(0);



  const getTickingTime = () => {
    const timeStage = {
      0: poromodo,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };

  const updateMinute = () => {
    const updateStage = {
      0: setPomodo,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };

  const switchStage = (index) => {
    const isYes =
      consumedSecond && stage !== index
        ? confirm("Are you sure you want to switch?")
        : false;
    if (isYes) {
      reset();
      setStage(index);
    } else if (!consumedSecond) {
      setStage(index);
      setIsTimeUp(false);
    }
  };

  const reset = () => {
    setConsumedSecond(0);
    setTicking(false);
    setPomodo(POMODORO);
    setShortBreak(SHORTBREAK);
    setLongBreak(LONGBREAK);
    setSeconds(0);
  };

  const timeUp = () => {
    reset();
    setIsTimeUp(true);

    if (Notification.permission === "granted") {
      new Notification("Le pomodoro est terminé !");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("Le pomodoro est terminé !");
        }
      });
    }
  };
  const clockTicking = () => {
    const minutes = getTickingTime();
    const setMinutes = updateMinute();
    if (minutes === 0 && seconds === 0) {
      timeUp();
    } else if (seconds === 0) {
      setMinutes((minute) => minute - 1);
      setSeconds(59);
    } else {
      setSeconds((second) => second - 1);
    }
  };
  const startTimer = () => {
    setIsTimeUp(false);
    setTicking((ticking) => !ticking);
  };

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "Show warning" : null;
    };

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1);
        clockTicking();
      }
    }, 1000);
    if (isTimeUp) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [poromodo, shortBreak, longBreak, ticking, seconds]);

  return (
    <ToolCard>
      <div className="  bg-white ">
        <div className="  flex ">
          <div className="mt-10">
            <Timer
              switchStage={switchStage}
              getTickingTime={getTickingTime}
              stage={stage}
              ticking={ticking}
              startTimer={startTimer}
              seconds={seconds}
              isTimeUp={isTimeUp}
              reset={reset}
            />
          </div>
        </div>
      </div>
    </ToolCard>
  );
}
