import React from "react";
import styles from "./navLabs.module.scss";
const NavLabs = ({ navigate, setLabsInfo, navRef, infoRef, setOpen }) => {
  const mouseOverEvent = () => {
    setLabsInfo(true);
  };
  const mouseOutEvent = () => {
    setLabsInfo(false);
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
            navigate("/labs");
          }}
        >
          <p className={`${styles.text}`}>Labs</p>
        </div>
      </div>
    </>
  );
};

export default NavLabs;
