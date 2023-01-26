import classes from "../../style.module.css";

const MobileMessage = () => {
  return (
    <div className={classes.message}>
      <h2>Can't run on mobile 😞</h2>
      <p>Unfortunately, this app can only run on desktop based devices.</p>
    </div>
  );
};

export default MobileMessage;
