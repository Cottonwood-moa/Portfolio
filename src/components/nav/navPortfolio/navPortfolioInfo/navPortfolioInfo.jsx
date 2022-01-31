import React from "react";
import styles from "./navPortfolioInfo.module.scss";
const NavPortfolioInfo = (props) => {
  return (
    <div className={styles.navInfo}>
      <div className={styles.infoGif}></div>
      <div className={styles.info}>
        <div>
          Check out my latest web software development portfolio projects.
        </div>
      </div>
    </div>
  );
};

export default NavPortfolioInfo;
