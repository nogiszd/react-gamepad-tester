import Stick from "./Stick";
import classes from "../style.module.css";
import { axes } from "src/constants/axes";

type Props = {
  axesList: readonly number[];
};

const Axes = (props: Props) => {
  const { axesList } = props;

  return (
    <div>
      <div>
        {axesList.length === 4 && (
          <div className={classes["axes__container"]}>
            <Stick axes={[axesList[0], axesList[1]]} />
            <Stick axes={[axesList[2], axesList[3]]} />
          </div>
        )}
      </div>
      <div className={classes.axes}>
        {axesList.map((stick, index) => {
          return (
            <div key={index}>
              <span>{axes[index]}:</span> {stick.toFixed(4)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Axes;
