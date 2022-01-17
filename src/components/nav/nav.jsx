import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./nav.module.scss";
import { Twirl as Hamburger } from "hamburger-react";
import NavIntro from "./navIntro/navIntro";
import NavIntroInfo from "./navIntro/navIntroInfo/navIntroInfo";
import NavLabs from "./navLabs/navLabs";
import NavLabsInfo from "./navLabs/navLabsInfo/navLabsInfo";
import NavPortfolio from "./navPortfolio/navPortfolio";
import NavPortfolioInfo from "./navPortfolio/navPortfolioInfo/navPortfolioInfo";
import NavContact from "./navContact/navContact";
import NavContactInfo from "./navContact/navContactInfo/navContactInfo";
import NavInfo from "./navInfo/navInfo";
const Nav = (props) => {
  const navigate = new useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [introInfo, setIntroInfo] = useState(false);
  const [labsInfo, setLabsInfo] = useState(false);
  const [portfolioInfo, setPortfolioInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const navRef = useRef();
  const infoRef = useRef();
  useEffect(() => {
    if (isOpen) {
      navRef.current.style.transform = "translateX(0)";
      infoRef.current.style.transform = "translateX(0)";
    }
    if (!isOpen) {
      navRef.current.style.transform = "translateX(-50vw)";
      infoRef.current.style.transform = "translateX(50vw)";
    }
  }, [isOpen]);
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={48} />
      </div>

      <div className={styles.nav} ref={navRef}>
        <NavIntro navigate={navigate} setIntroInfo={setIntroInfo} />
        <NavLabs navigate={navigate} setLabsInfo={setLabsInfo} />
        <NavPortfolio navigate={navigate} setPortfolioInfo={setPortfolioInfo} />
        <NavContact navigate={navigate} setContactInfo={setContactInfo} />
      </div>

      <div className={styles.navInfo} ref={infoRef}>
        <NavInfo isOpen={isOpen} />
        {introInfo && isOpen && (
          <>
            <NavIntroInfo />
          </>
        )}
        {labsInfo && isOpen && (
          <>
            <NavLabsInfo labsInfo={labsInfo} />
          </>
        )}
        {portfolioInfo && isOpen && (
          <>
            <NavPortfolioInfo />
          </>
        )}
        {contactInfo && isOpen && (
          <>
            <NavContactInfo />
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
