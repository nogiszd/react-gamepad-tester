import classes from "../../style.module.css";

const EmptyMessage = () => {
  return (
    <div className={classes.message}>
      <h2>No gamepads detected 🔎🎮</h2>
      <p>Try clicking on buttons to wake up your controller</p>
    </div>
  );
};

export default EmptyMessage;
