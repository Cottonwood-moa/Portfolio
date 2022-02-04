import React from "react";
import styles from "./navPortfolioInfo.module.scss";
const NavPortfolioInfo = (props) => {
  return (
    <div className={styles.navInfo}>
      <div className={styles.infoGif}></div>
      <div className={styles.info}>
        <h1>Web portfolio</h1>
      </div>
    </div>
  );
};

export default NavPortfolioInfo;
