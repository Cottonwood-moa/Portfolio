import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./nav.module.scss";
import { Twirl as Hamburger } from "hamburger-react";
import { useWindowSize } from "@react-hook/window-size/";
import NavIntro from "./navIntro/navIntro";
import NavIntroInfo from "./navIntro/navIntroInfo/navIntroInfo";
import NavLabs from "./navLabs/navLabs";
import NavLabsInfo from "./navLabs/navLabsInfo/navLabsInfo";
import NavPortfolio from "./navPortfolio/navPortfolio";
import NavPortfolioInfo from "./navPortfolio/navPortfolioInfo/navPortfolioInfo";
import NavContact from "./navContact/navContact";
import NavContactInfo from "./navContact/navContactInfo/navContactInfo";
import NavInfo from "./navInfo/navInfo";
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
  const navRef = useRef();
  const infoRef = useRef();
  const profileRef = useRef();
  const hamburgerRef = useRef();
  // 페이지 이동시 메뉴가 열려있다면 닫기
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  // 햄버거, 프로필 ref 자식 컴포넌트에서 받아오기
  useEffect(() => {
    getNavRefs(profileRef, hamburgerRef);
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
        <div className={styles.forTransition} ref={profileRef}>
          <div
            className={styles.profile}
            onClick={() =>
              (window.location.href = "https://cottonwood-moa.tistory.com/")
            }
          ></div>
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
