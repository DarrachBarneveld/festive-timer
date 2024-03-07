"use client";

import { FunctionComponent, useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import styles from "./JingleMap.module.css";
import useDragger from "@/hooks/useDragger";
import { TiArrowMinimise } from "react-icons/ti";

const GLOBAL_COUNTDOWN = ["Europe", "London"];

interface GlobalCountDownProps {}

const GlobalCountDown: FunctionComponent<GlobalCountDownProps> = () => {
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isMinimised, setIsMinimised] = useState(false);

  const left = window.innerWidth / 2;

  useEffect(() => {
    const dragBox = document.getElementById("drag-box");
    if (dragBox) {
      const rect = dragBox.getBoundingClientRect();
      setStartPosition({ x: left, y: rect.top });
    }
  }, []);

  console.log(startPosition);

  useDragger("drag-box", startPosition);

  return (
    <div id="drag-box" className={styles["countdown-container"]}>
      <div className="d-flex justify-content-between align-content-center">
        <h1 className="my-1">Global New Year Countdown!</h1>
        <button
          className={styles.minimise}
          onClick={() => setIsMinimised((prev) => !prev)}
        >
          <TiArrowMinimise className="text-white h4" />
        </button>
      </div>
      <div className={`${isMinimised && "hidden"}`}>
        <CountdownTimer timeObj={GLOBAL_COUNTDOWN} />
      </div>
    </div>
  );
};

export default GlobalCountDown;
