import React from "react";
import styles from "./navLabs.module.scss";
const NavLabs = ({ navigate, setLabsInfo }) => {
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
        data-aos="fade-down"
        data-aos-delay="100"
        onMouseOver={() => mouseOverEvent()}
        onMouseOut={() => mouseOutEvent()}
      >
        <div
          className={styles.navButton}
          onClick={() => {
            navigate("/labs");
          }}
        >
          <p className={styles.text}>Labs</p>
        </div>
      </div>
    </>
  );
};

export default NavLabs;
