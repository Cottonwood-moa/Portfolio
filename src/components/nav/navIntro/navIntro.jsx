import React, { useState } from "react";
import styles from "./navIntro.module.css";
const NavIntro = ({ navigate, setIntroInfo }) => {
  const mouseOverEvent = () => {
    setIntroInfo(true);
  };
  const mouseOutEvent = () => {
    setIntroInfo(false);
  };
  return (
    <>
      <div
        className={styles.navElement}
        data-aos="fade-down"
        onMouseOver={() => mouseOverEvent()}
        onMouseOut={() => mouseOutEvent()}
      >
        <div
          className={styles.navButton}
          onClick={() => {
            navigate("/");
          }}
        >
          <p className={styles.text}>Intro</p>
        </div>
      </div>
    </>
  );
};

export default NavIntro;
