import React, { useEffect, useRef } from "react";
import styles from "./navIntroInfo.module.scss";
const NavIntroInfo = (props) => {
  const titleRef = useRef();
  const thumbRef = useRef();
  useEffect(() => {
    titleRef.current.style.transform = "translateY(-20rem)";
  }, []);
  return (
    <div className={styles.navInfo}>
      <h1 className={styles.title} ref={titleRef}>
        Welcome!
      </h1>
      <div className={styles.thumb} ref={thumbRef}></div>
      <div className={styles.info}>
        <div>Hi, there!</div>
        <div>It shows who I am , what I study</div>
        <div>and what skill stack I have.</div>
      </div>
    </div>
  );
};

export default NavIntroInfo;
