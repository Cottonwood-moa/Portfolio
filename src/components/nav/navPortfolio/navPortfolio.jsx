import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./navPortfolio.module.scss";
const NavPortfolio = ({ navigate, setPortfolioInfo }) => {
  const mouseOverEvent = () => {
    setPortfolioInfo(true);
  };
  const mouseOutEvent = () => {
    setPortfolioInfo(false);
  };
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (location.pathname === "/portfolio") {
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
            navigate("/portfolio");
          }}
        >
          <p className={`${styles.text} ${active && styles.active}`}>
            Portfolio
          </p>
        </div>
      </div>
    </>
  );
};

export default NavPortfolio;
