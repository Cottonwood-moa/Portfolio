import React, { useRef } from "react";
import styles from "./navLabsInfo.module.scss";
const NavLabsInfo = ({ labsInfo }) => {
  const imageRef = useRef();
  const titleRef = useRef();
  return (
    <div className={styles.navInfo}>
      <div className={styles.image} ref={imageRef}></div>
      <h1 className={styles.title} ref={titleRef}>
        Code laboratory
      </h1>
    </div>
  );
};

export default NavLabsInfo;
