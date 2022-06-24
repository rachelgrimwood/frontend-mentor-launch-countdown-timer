import { useState, useEffect } from "react";

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

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
  });

  return (
    <div className="text-white">
      <p>{timeLeft.days || 0}</p>
      <p>{timeLeft.hours || 0}</p>
      <p>{timeLeft.minutes || 0}</p>
      <p>{timeLeft.seconds || 0}</p>
    </div>
  );
};

export default Countdown;
