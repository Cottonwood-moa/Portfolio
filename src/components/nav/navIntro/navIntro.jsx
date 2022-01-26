import React from "react";
import styles from "./navIntro.module.scss";
const NavIntro = ({ navigate, setIntroInfo, navRef, infoRef, setOpen }) => {
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
        onMouseOver={() => mouseOverEvent()}
        onMouseOut={() => mouseOutEvent()}
      >
        <div
          className={styles.navButton}
          onClick={() => {
            navRef.current.style.transform = "translateX(-100vw)";
            infoRef.current.style.transform = "translateX(100vw)";
            setOpen(false);
            navigate("/");
          }}
        >
          <p className={`${styles.text}`}>Intro</p>
        </div>
      </div>
    </>
  );
};

export default NavIntro;
