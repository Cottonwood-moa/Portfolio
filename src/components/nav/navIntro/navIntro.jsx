import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./navIntro.module.scss";
const NavIntro = ({ navigate, setIntroInfo, navRef, infoRef, setOpen }) => {
  const mouseOverEvent = () => {
    setIntroInfo(true);
  };
  const mouseOutEvent = () => {
    setIntroInfo(false);
  };
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [active, location.pathname]);
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
            navRef.current.style.transform = "translateX(-50vw)";
            infoRef.current.style.transform = "translateX(50vw)";
            setOpen(false);
            navigate("/");
          }}
        >
          <p className={`${styles.text} ${active && styles.active}`}>Intro</p>
        </div>
      </div>
    </>
  );
};

export default NavIntro;
