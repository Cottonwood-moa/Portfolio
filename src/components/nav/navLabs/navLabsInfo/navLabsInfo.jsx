import React, { useEffect, useRef } from "react";
import styles from "./navLabsInfo.module.scss";
const NavLabsInfo = ({ labsInfo }) => {
  const imageRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    if (labsInfo) {
      imageRef.current.style.transform = "translateY(0)";
      imageRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
      titleRef.current.style.opacity = "1";
    }
  });
  return (
    <div className={styles.navInfo}>
      <div className={styles.image} ref={imageRef}></div>
      <h1 className={styles.title} ref={titleRef}>
        code laboratory
      </h1>
    </div>
  );
};

export default NavLabsInfo;
