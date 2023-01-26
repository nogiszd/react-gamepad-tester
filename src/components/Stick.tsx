import classes from "../style.module.css";

type Props = {
  axes: number[];
};

const Stick = (props: Props) => {
  const { axes } = props;

  return (
    <div className={classes.axis}>
      <svg
        style={{
          display: "block",
          width: `100%`,
          height: `100%`,
          position: "absolute",
          left: `50%`,
          top: `50%`,
          transform: `translateX(-85px) translateY(-85px)`,
        }}
      >
        <g transform="translate(78.5 78.5) scale(0.95, 0.95)">
          <circle
            cx="0"
            cy="0"
            r="78.5"
            fill="none"
            stroke="hsla(210, 50%, 20%, 0.2)"
            strokeWidth="1"
          ></circle>
          <line
            x1="0"
            y1="-78.5"
            x2="0"
            y2="78.5"
            stroke="hsla(210, 50%, 20%, 0.2)"
            strokeWidth="1"
          ></line>
          <line
            x1="-78.5"
            y1="0"
            x2="78.5"
            y2="0"
            stroke="hsla(210, 50%, 20%, 0.2)"
            strokeWidth="1"
          ></line>
          <line
            x1="0"
            y1="0"
            x2={axes[0] * 78.5}
            y2={axes[1] * 78.5}
            stroke="#19334D"
            strokeWidth="1"
          ></line>
          <circle
            cx={axes[0] * 78.5}
            cy={axes[1] * 78.5}
            r="4"
            fill="#19334D"
          ></circle>
        </g>
      </svg>
    </div>
  );
};

export default Stick;
