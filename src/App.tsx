import { useEffect, useState } from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import Gamepad from "./components/Gamepad";
import { GamepadRef, useGamepads } from "react-ts-gamepads";
import classes from "./style.module.css";
import MobileMessage from "./components/messages/MobileMessage";
import EmptyMessage from "./components/messages/EmptyMessage";

const App = () => {
  const [gamepads, setGamepads] = useState<GamepadRef>();
  const isMobile = useIsMobile();

  useGamepads((_gamepads) => {
    setGamepads(_gamepads);
  });

  useEffect(() => {
    window.addEventListener("gamepaddisconnected", () => {
      setGamepads({});
    });
  }, []);

  return (
    <div className={classes.app}>
      {isMobile ? (
        <MobileMessage />
      ) : (
        <>
          {gamepads && Object.keys(gamepads).length > 0 ? (
            Object.keys(gamepads).map((id, index) => (
              <Gamepad gamepad={gamepads[Number(id)]} key={index} />
            ))
          ) : (
            <EmptyMessage />
          )}
        </>
      )}
    </div>
  );
};

export default App;
