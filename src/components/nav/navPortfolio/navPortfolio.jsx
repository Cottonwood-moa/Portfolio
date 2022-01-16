import React from "react";
import styles from "./navPortfolio.module.scss";
const NavPortfolio = ({ navigate, setPortfolioInfo }) => {
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
        data-aos="fade-down"
        data-aos-delay="200"
        onMouseOver={() => mouseOverEvent()}
        onMouseOut={() => mouseOutEvent()}
      >
        <div
          className={styles.navButton}
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          <p className={styles.text}>Portfolio</p>
        </div>
      </div>
    </>
  );
};

export default NavPortfolio;
