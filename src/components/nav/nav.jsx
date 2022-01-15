import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import { Twirl as Hamburger } from "hamburger-react";
import NavIntro from "./navIntro/navIntro";
import NavIntroInfo from "./navIntro/navIntroInfo/navIntroInfo";
import NavAbout from "./navAbout/navAbout";
import NavAboutInfo from "./navAbout/navAboutInfo/navAboutInfo";
import NavPortfolio from "./navPortfolio/navPortfolio";
import NavPortfolioInfo from "./navPortfolio/navPortfolioInfo/navPortfolioInfo";
import NavContact from "./navContact/navContact";
import NavContactInfo from "./navContact/navContactInfo/navContactInfo";
const Nav = (props) => {
  const navigate = new useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [introInfo, setIntroInfo] = useState(false);
  const [aboutInfo, setAboutInfo] = useState(false);
  const [portfolioInfo, setPortfolioInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} size={48} />
      </div>
      {isOpen && (
        <div className={styles.nav}>
          <NavIntro navigate={navigate} setIntroInfo={setIntroInfo} />
          <NavAbout navigate={navigate} setAboutInfo={setAboutInfo} />
          <NavPortfolio
            navigate={navigate}
            setPortfolioInfo={setPortfolioInfo}
          />
          <NavContact navigate={navigate} setContactInfo={setContactInfo} />
        </div>
      )}
      {isOpen && (
        <div
          className={styles.navInfo}
          data-aos="fade-right"
          data-aos-delay="400"
        ></div>
      )}
      {introInfo && isOpen && (
        <>
          <NavIntroInfo />
        </>
      )}
      {aboutInfo && isOpen && (
        <>
          <NavAboutInfo />
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
  );
};

export default Nav;
