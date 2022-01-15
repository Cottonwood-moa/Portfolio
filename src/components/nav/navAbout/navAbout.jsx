import React from "react";
import styles from "./navAbout.module.css";
const NavAbout = ({ navigate, setAboutInfo }) => {
  const mouseOverEvent = () => {
    setAboutInfo(true);
  };
  const mouseOutEvent = () => {
    setAboutInfo(false);
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
            navigate("/about");
          }}
        >
          <p className={styles.text}>About</p>
        </div>
      </div>
    </>
  );
};

export default NavAbout;
