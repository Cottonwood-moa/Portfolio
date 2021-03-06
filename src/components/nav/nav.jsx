import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// CSS
import styles from "./nav.module.scss";
// PLUGIN
import { Twirl as Hamburger } from "hamburger-react";
import { useWindowSize } from "@react-hook/window-size/";
import ReactTooltip from "react-tooltip";
// COMPONENTS
import NavIntro from "./navIntro/navIntro";
import NavIntroInfo from "./navIntro/navIntroInfo/navIntroInfo";
import NavLabs from "./navLabs/navLabs";
import NavLabsInfo from "./navLabs/navLabsInfo/navLabsInfo";
import NavPortfolio from "./navPortfolio/navPortfolio";
import NavPortfolioInfo from "./navPortfolio/navPortfolioInfo/navPortfolioInfo";
import NavContact from "./navContact/navContact";
import NavContactInfo from "./navContact/navContactInfo/navContactInfo";
import NavInfo from "./navInfo/navInfo";
import Cube from "../common/cube/cube";
const Nav = ({ getNavRefs }) => {
  // 디바운스가 적용된 실시간 size hook (쓰로틀도 있음 -> npm 참조)
  // eslint-disable-next-line no-unused-vars
  const [widthD, heightD] = useWindowSize();
  const navigate = new useNavigate();
  const location = new useLocation();
  const [isOpen, setOpen] = useState(false);
  const [introInfo, setIntroInfo] = useState(false);
  const [labsInfo, setLabsInfo] = useState(false);
  const [portfolioInfo, setPortfolioInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState(false);
  const [screen, setScreen] = useState(true);
  const [cube, setcube] = useState(false);
  const navRef = useRef();
  const infoRef = useRef();
  const leftThingRef = useRef();
  const hamburgerRef = useRef();
  const cubeRef = useRef();
  const forCube = () => {
    if (location.pathname.includes("/portfolio/")) {
      setTimeout(() => {
        setcube(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setcube(false);
      }, 1600);
    }
  };
  useEffect(() => {
    forCube();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  // 페이지 이동시 메뉴가 열려있다면 닫기
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // to app.jsx
  useEffect(() => {
    getNavRefs(leftThingRef, hamburgerRef);
  }, [getNavRefs]);
  // screen width에 따라 nav 반응형
  useEffect(() => {
    if (widthD < 924) {
      setScreen(false);
      infoRef.current.style.transform = "translateX(2000px)";
      navRef.current.style.width = "100%";
    }
    if (widthD >= 924) {
      setScreen(true);
      infoRef.current.style.transform = "translateX(0)";
      navRef.current.style.width = "50%";
    }
  }, [setScreen, widthD]);
  // 메뉴 토글 애니메이션
  useEffect(() => {
    if (isOpen) {
      navRef.current.style.transform = "translateX(0)";
      if (!screen) {
        infoRef.current.style.transform = "translateX(200%)";
      } else {
        infoRef.current.style.transform = "translateX(0)";
      }
    }
    if (!isOpen) {
      if (!screen) {
        navRef.current.style.transform = "translateX(-200%)";
      } else {
        navRef.current.style.transform = "translateX(-200%)";
      }
      infoRef.current.style.transform = "translateX(200%)";
    }
  }, [isOpen, widthD, screen]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.forTransition} ref={leftThingRef}>
          {cube && (
            <>
              <ReactTooltip
                id="goBackToPortfolio"
                place="right"
                type="error"
                effect="solid"
              >
                Go back to Portfolio
              </ReactTooltip>
              <div
                className={styles.cubes}
                ref={cubeRef}
                data-tip
                data-for="goBackToPortfolio"
                onClick={() => navigate("/portfolio")}
              >
                <Cube />
              </div>
            </>
          )}
          {cube || (
            <div
              className={styles.profile}
              onClick={() =>
                (window.location.href = "https://cottonwood-moa.tistory.com/")
              }
            ></div>
          )}
        </div>
        <div className={styles.forTransition} ref={hamburgerRef}>
          <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={48} />
          </div>
        </div>
      </div>
      <div className={styles.nav} ref={navRef}>
        <NavIntro
          navigate={navigate}
          setIntroInfo={setIntroInfo}
          setOpen={setOpen}
          navRef={navRef}
          infoRef={infoRef}
        />
        <NavPortfolio
          navigate={navigate}
          setPortfolioInfo={setPortfolioInfo}
          setOpen={setOpen}
          navRef={navRef}
          infoRef={infoRef}
        />
        <NavLabs
          navigate={navigate}
          setLabsInfo={setLabsInfo}
          setOpen={setOpen}
          navRef={navRef}
          infoRef={infoRef}
        />
        <NavContact
          navigate={navigate}
          setContactInfo={setContactInfo}
          setOpen={setOpen}
          navRef={navRef}
          infoRef={infoRef}
        />
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
