import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";

const today = new Date();
today.setSeconds(today.getSeconds() + 1);
const endDate = new Date(today);
endDate.setDate(today.getDate() + 14);

const Countdown = () => {
  const getTimeLeft = () => {
    let timeLeft = {};
    const difference = endDate - new Date();

    if (difference > 0) {
      const currDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      const currHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const currMins = Math.floor((difference / 1000 / 60) % 60);
      const currSeconds = Math.floor((difference / 1000) % 60);

      const nextDays = currDays > 0 ? currDays - 1 : 0;
      const nextHours = currHours > 0 ? currHours - 1 : 23;
      const nextMins = currMins > 0 ? currMins - 1 : 59;
      const nextSeconds = currSeconds > 0 ? currSeconds - 1 : 59;

      timeLeft = {
        days: [currDays, nextDays],
        hours: [currHours, nextHours],
        minutes: [currMins, nextMins],
        seconds: [currSeconds, nextSeconds],
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center">
      <FlipCard currNum={timeLeft.days[0]} nextNum={timeLeft.days[1]} unit="days" />
      <FlipCard currNum={timeLeft.hours[0]} nextNum={timeLeft.hours[1]} unit="hours" />
      <FlipCard currNum={timeLeft.minutes[0]} nextNum={timeLeft.minutes[1]} unit="minutes" />
      <FlipCard currNum={timeLeft.seconds[0]} nextNum={timeLeft.seconds[1]} unit="seconds" />
    </div>
  );
};

export default Countdown;
