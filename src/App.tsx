import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import Gamepad from "./components/Gamepad";
import { GamepadRef, useGamepads } from "react-ts-gamepads";
import classes from "./style.module.css";
import MobileMessage from "./components/MobileMessage";

export default function App() {
  const [gamepads, setGamepads] = useState<GamepadRef>();
  useGamepads((_gamepads) => {
    setGamepads(_gamepads);
  });

  useEffect(() => {
    window.addEventListener("gamepaddisconnected", () => {
      setGamepads({});
    });
  }, []);

  return <div className="App">{isMobile ? <MobileMessage /> : <></>}</div>;
}
