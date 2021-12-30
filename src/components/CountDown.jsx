import React, { useEffect, useRef, useState } from "react";

export default function CountDown({ label, countDownFrom, countDownTo }) {
  const timer = useRef(null);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleCount = () => {
    if (countDownFrom) {
      timer.current = setInterval(() => {
        let start = new Date(countDownFrom).getTime();
        let finish = countDownTo
          ? new Date(countDownTo).getTime()
          : new Date().getTime();
        let distance = start - finish;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }, 1000);
    }
  };

  useEffect(() => {
    handleCount();
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="countdown-wrapper">
      <h2 className="title">{label}</h2>
      <div className="countdown">
        <span className="item">{days}</span>
        <span className="item">{hours}</span>
        <span className="item">{minutes}</span>
        <span className="item">{seconds}</span>
      </div>
    </div>
  );
}
