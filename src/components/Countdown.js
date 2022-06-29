import { useState, useEffect } from "react";
import FlipCard from "./FlipCard";

const today = new Date();
const endDate = new Date(today);
endDate.setDate(today.getDate() + 14);

const Countdown = () => {
  const getTimeLeft = () => {
    let timeLeft = {};
    const difference = endDate - new Date();

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
  });

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="text-white"
        onClick={() => {
          setIsFlipping(true);
        }}>
        Flip
      </button>
      <FlipCard num={timeLeft.days} unit="days" isFlipping={isFlipping} />
      <FlipCard num={timeLeft.hours} unit="hours" isFlipping={isFlipping} />
      <FlipCard num={timeLeft.minutes} unit="minutes" isFlipping={isFlipping} />
      <FlipCard num={timeLeft.seconds} unit="seconds" isFlipping={isFlipping} />
    </div>
  );
};

export default Countdown;
