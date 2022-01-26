import React from "react";
import styles from "./navPortfolioInfo.module.scss";
const NavPortfolioInfo = (props) => {
  return (
    <div className={styles.navInfo}>
      <div data-aos="fade-in" className={styles.infoGif}></div>
      <div className={styles.info}>
        <div data-aos="fade-in">
          Check out my latest web software development portfolio projects.
        </div>
      </div>
    </div>
  );
};

export default NavPortfolioInfo;
