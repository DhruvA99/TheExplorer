import classes from "./Slider.module.css";
import React, { useEffect, useState } from "react";

const Slider = (props) => {
  const [checked, setChecked] = useState(true);
  const [checkedMain, setCheckedMain] = useState(true);

  useEffect(() => {
    setTimeout(() => setChecked(!checked), 3000);
    setTimeout(() => setCheckedMain(!checkedMain), 3000);
  }, []);
  return (
    <div
      className={`${classes.main} ${!checkedMain ? classes.mainChecked : null}`}
    >
      <div className={classes.spinner}>
        <div className={classes.rect1}></div>
        <div className={classes.rect2}></div>
        <div className={classes.rect3}></div>
        <div className={classes.rect4}></div>
        <div className={classes.rect5}></div>
      </div>
      <div
        className={` ${classes.sliderPanel} ${
          checked ? classes.checkedLeft : classes.sliderPanelLeft
        }`}
      ></div>
      <div
        className={` ${classes.sliderPanel} ${
          checked ? classes.checkedRight : classes.sliderPanelRight
        }`}
      ></div>
    </div>
  );
};
export default Slider;
