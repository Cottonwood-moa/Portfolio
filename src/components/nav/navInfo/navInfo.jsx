import React from "react";
import styles from "./navInfo.module.scss";
const NavInfo = (props) => {
  return (
    <div className={styles.navInfo} data-aos="fade-right" data-aos-delay="400">
      <div
        className={styles.spinningEarth}
        data-aos="zoom-in"
        data-aos-duration="800"
      ></div>
      <div className={styles.typing}>Hello, World!</div>
    </div>
  );
};

export default NavInfo;
