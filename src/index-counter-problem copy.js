import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setupAPIInterceptors } from "./api/interceptor";

const root = ReactDOM.createRoot(document.getElementById("root"));

setupAPIInterceptors();

const Counter = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState("black");
  const timer = useRef();

  const startCounter = () => {
    console.log("timer", timer);
    setToggle(true);
  };

  const pauseCounter = () => {
    setToggle(false);
    clearInterval(timer.current);
    timer.current = null;
    console.log("timer", timer);
  };

  const isPrimeNumber = (num) => {
    console.log("num", num);
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  useEffect(() => {
    if (toggle && !timer.current) {
      timer.current = setInterval(() => {
        console.log(count + 1);
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      console.log("timer", timer);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [toggle]);

  useEffect(() => {
    const isPrime = isPrimeNumber(count);
    console.log("isPrime", isPrime);
    isPrime ? setColor("green") : setColor("black");
  }, [count]);

  return (
    <div>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={startCounter}>start</button>
      <button onClick={pauseCounter}>pause</button>
      Counter Problem
    </div>
  );
};

root.render(<Counter />);
