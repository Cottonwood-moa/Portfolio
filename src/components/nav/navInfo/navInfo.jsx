import React from "react";
import styles from "./navInfo.module.scss";

const NavInfo = ({ isOpen }) => {
  return (
    <div className={styles.navInfo}>
      <div className={styles.spinningEarth}></div>
      {isOpen && <div className={styles.typing}>Hello, World!</div>}
    </div>
  );
};

export default NavInfo;
