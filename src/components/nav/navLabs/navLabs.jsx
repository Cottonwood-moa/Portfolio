import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./navLabs.module.scss";
const NavLabs = ({ navigate, setLabsInfo }) => {
  const mouseOverEvent = () => {
    setLabsInfo(true);
  };
  const mouseOutEvent = () => {
    setLabsInfo(false);
  };
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (location.pathname === "/labs") {
      setActive(true);
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
            navigate("/labs");
          }}
        >
          <p className={`${styles.text} ${active && styles.active}`}>Labs</p>
        </div>
      </div>
    </>
  );
};

export default NavLabs;
