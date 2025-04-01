import { useEffect } from "react";

const TimerComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Message logged every second");
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Timer cleared on unmount");
    };
  }, []);

  return <div>Check the console for messages.</div>;
};

export default TimerComponent;
