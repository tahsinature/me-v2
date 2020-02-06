import React from "react";
import classes from "./AppLoader.module.scss";

const appLoader = () => {
  return (
    <div className={classes["loader-body"]}>
      <div className={classes.loader}>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__bar"]}></div>
        <div className={classes["loader__ball"]}></div>
      </div>
    </div>
  );
};

export default appLoader;
