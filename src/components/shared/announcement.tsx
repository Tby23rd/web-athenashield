"use client";
import { useState, useEffect } from 'react';

type TimeLeft = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export default function AnnouncementBanner() {

const calculateTimeLeft = (): TimeLeft => {
  const today = new Date('November 10, 2024');
  const targetDate = new Date(today);

  // Add 30 days to the current date
  targetDate.setDate(targetDate.getDate() + 30);

  const difference = +targetDate - +new Date();

  let timeLeft: TimeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    };
  }

  return timeLeft;
};

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval as keyof TimeLeft] !== undefined) {
      timerComponents.push(
        <span key={interval} className=" font-bold mx-1">
          {timeLeft[interval as keyof TimeLeft]} {interval}{" "}
        </span>
      );
    }
  });



  return (
    <div className="bg-blue-800 text-white p-2">
        <p className="font-semibold text-center text-base md:text-xl">
           The beta version of our core and individual app is launching in just{" "}
          {timerComponents.length ? timerComponents : <span>Our Beta is Live!</span>}
          .
        </p>

    </div>
  );
}
