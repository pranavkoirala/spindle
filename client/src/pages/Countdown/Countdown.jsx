import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./countdown.css";

const Countdown = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const unlockDate = location.state?.unlockDate;

  const [timeRemaining, setTimeRemaining] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (!unlockDate) {
      navigate("/");
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const distance = new Date(unlockDate * 1000) - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: "0", hours: "0", minutes: "0", seconds: "0" });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setFadeClass("fade");
        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unlockDate, navigate]);

  useEffect(() => {
    if (fadeClass) {
      const timeout = setTimeout(() => setFadeClass(""), 300);
      return () => clearTimeout(timeout);
    }
  }, [timeRemaining, fadeClass]);

  return (
    <div className="countdown flex flex-col items-center justify-center h-screen">
      <h1 className="text-white font-bold text-6xl">Countdown</h1>
      <div className="mt-5 text-4xl">
        <span className={`mr-2 ${fadeClass}`}>{timeRemaining.days} days </span>
        <span className={`mr-2 ${fadeClass}`}>
          {timeRemaining.hours} hours{" "}
        </span>
        <span className={`mr-2 ${fadeClass}`}>
          {timeRemaining.minutes} minutes
        </span>
        <span className={fadeClass}> {timeRemaining.seconds} seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
