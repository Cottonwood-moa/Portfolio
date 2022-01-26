import React from "react";
import styles from "./navPortfolio.module.scss";
const NavPortfolio = ({
  navigate,
  setPortfolioInfo,
  navRef,
  infoRef,
  setOpen,
}) => {
  const mouseOverEvent = () => {
    setPortfolioInfo(true);
  };
  const mouseOutEvent = () => {
    setPortfolioInfo(false);
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
            navigate("/portfolio");
          }}
        >
          <p className={`${styles.text} `}>Portfolio</p>
        </div>
      </div>
    </>
  );
};

export default NavPortfolio;
