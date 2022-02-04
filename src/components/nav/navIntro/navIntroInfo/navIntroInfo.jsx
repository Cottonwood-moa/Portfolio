import React, { useRef } from "react";
import styles from "./navIntroInfo.module.scss";
const NavIntroInfo = (props) => {
  const thumbRef = useRef();
  return (
    <div className={styles.navInfo}>
      <div className={styles.thumb} ref={thumbRef}></div>
      <div className={styles.info}>
        <h1>About me</h1>
      </div>
    </div>
  );
};

export default NavIntroInfo;
