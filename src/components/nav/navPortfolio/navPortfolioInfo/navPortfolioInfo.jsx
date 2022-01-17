import React from "react";
import styles from "./navPortfolioInfo.module.scss";
const NavPortfolioInfo = (props) => {
  return (
    <div className={styles.navInfo}>
      <div className={styles.elementContainer}>
        <div
          className={styles.element}
          data-aos="flip-right"
          data-aos-delay=""
        ></div>
        <div
          className={styles.element}
          data-aos="flip-right"
          data-aos-delay="200"
        ></div>
        <div
          className={styles.element}
          data-aos="flip-right"
          data-aos-delay="200"
        ></div>
      </div>
      <div className={styles.elementContainer}>
        <div
          className={styles.element}
          data-aos="flip-right"
          data-aos-delay="400"
        ></div>
        <div
          className={styles.element}
          data-aos="flip-right"
          data-aos-delay="100"
        ></div>
        <div
          className={styles.element}
          data-aos="flip-right"
          data-aos-delay="300"
        ></div>
      </div>
      <div className={styles.info}>
        <div data-aos="zoom-in" data-aos-delay="300">
          Check out my latest web software development portfolio projects.
        </div>
      </div>
    </div>
  );
};

export default NavPortfolioInfo;
