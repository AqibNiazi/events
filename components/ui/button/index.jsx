import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = ({ children, link }) => {
  return (
    <Link className={styles?.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
