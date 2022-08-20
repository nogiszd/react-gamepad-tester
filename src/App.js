import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useGamepads } from "react-gamepads";
import Gamepad from "./components/Gamepad";
import "./style.css";

export default function App() {
  const [gamepads, setGamepads] = useState({});
  useGamepads((_gamepads) => {
    setGamepads(Object.values(_gamepads));
  });

  useEffect(() => {
    window.addEventListener("gamepaddisconnected", () => {
      setGamepads({});
    });
  }, []);

  if (isMobile) {
    return (
      <div className="Message">
        <h2>Can't run on mobile 😞</h2>
        <p>Unfortunately, this app can only run on desktop based devices.</p>
      </div>
    );
  }

  return (
    <div className="App">
      {!isMobile && gamepads.length
        ? gamepads.map((gp, index) => {
            return <Gamepad gamepad={gp} key={index} />;
          })
        : (() => {
            return (
              <div className="Message">
                <h2>No gamepads detected 🔎🕹️</h2>
                <p>Try clicking on button to wake up your controller.</p>
              </div>
            );
          })()}
    </div>
  );
}
