import React from "react";
import classes from "./AppLoader.module.scss";

const appLoader = () => {
  return (
    <div class={classes["loader-body"]}>
      <div class={classes.loader}>
        <div class={classes["loader__bar"]}></div>
        <div class={classes["loader__bar"]}></div>
        <div class={classes["loader__bar"]}></div>
        <div class={classes["loader__bar"]}></div>
        <div class={classes["loader__bar"]}></div>
        <div class={classes["loader__ball"]}></div>
      </div>
    </div>
  );
};

export default appLoader;
