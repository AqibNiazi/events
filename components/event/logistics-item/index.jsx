import React from "react";
import classes from "./logistics-item.module.css";

function LogisticsItem({ icon, children }) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
