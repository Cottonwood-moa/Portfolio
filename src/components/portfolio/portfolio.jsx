import React, { useEffect, useRef, useState } from "react";
// REACT ROUTER
import { Link, useLocation } from "react-router-dom";
// CSS
import styles from "./portfolio.module.scss";
import { Container } from "react-bootstrap";
// PLUG IN
// COMPONENTS
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import Card from "./card/card";
// IMAGE
import cardMaker from "../common/images/cardmaker.png";
import movie from "../common/images/movie.png";
import beer from "../common/images/beer.png";
import foodREC from "../common/images/foodREC.png";
import moneygame from "../common/images/moneygame.png";
import loverface from "../common/images/loverface.png";
import charactertest from "../common/images/charactertest.png";
import starbucks from "../common/images/starbucks.png";
import lifemarker from "../common/images/lifemarker.png";
import portfolio from "../common/images/portfolio.png";

const Portfolio = ({ setNestLoading }) => {
  // useLocation
  const location = useLocation();
  // getYear
  const now = new Date();
  const year = now.getFullYear();
  // useState
  const [progress, setProgress] = useState(false);
  // useRef
  const pageMoveRef = useRef();
  const portfolioContainerRef = useRef();
  // useEffect
  useEffect(() => {
    if (!location.pathname.includes("portfolio")) {
      anotherPage();
    }
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // function
  const anotherPage = () => {
    window.scrollTo(0, 0);
    setProgress(true);
    pageMoveRef.current.style.transition = "0.4s 1.2s";
    pageMoveRef.current.style.opacity = "0";
    pageMoveRef.current.style.transform = "translateY(-20px)";
  };
  return (
    <>
      <div className={styles.portfolioContainer} ref={portfolioContainerRef}>
        {progress && <PageLoadBar />}
        <Container ref={pageMoveRef} className={styles.bootContainer}>
          <div className={styles.container}>
            <h1 className={styles.title}>web developer portfolio</h1>
            <span className={styles.subTitle}>
              From Web Components and UI/UX animations to React.JS, Redux,
              Vue.JS, and Node.JS. Check out my latest web software development
              portfolio projects.
            </span>
            <div className={styles.cardWrap}>
              <Link to="webPortfolio">
                <Card
                  title={"Web Portfolio"}
                  thumbnail={portfolio}
                  tags={["WebApp", "React.js", "React-Router", "SCSS"]}
                />
              </Link>

              <Link to="CardMaker">
                <Card
                  title={"CardMaker"}
                  thumbnail={cardMaker}
                  tags={[
                    "WebApp",
                    "React.js",
                    "React-Router",
                    "FireBase",
                    "PostCss",
                  ]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="imdbMovieApp">
                <Card
                  title={"imdbMovieApp"}
                  thumbnail={movie}
                  tags={[
                    "WebApp",
                    "Vue.js",
                    "VueX",
                    "Vue Router",
                    "Jest",
                    "VTU",
                    "Cypress",
                    "Scss",
                  ]}
                />
              </Link>
              <Link to="LifeMarker">
                <Card
                  title={"LifeMarker"}
                  thumbnail={lifemarker}
                  tags={["WebApp", "Vue.js", "Scss", "VueX", "Vue Router"]}
                />
              </Link>
              <Link to="BEERCRAFT">
                <Card
                  title={"Beercarft"}
                  thumbnail={beer}
                  tags={["WebApp", "JQuery", "Python", "Django"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="restaurant">
                <Card
                  title={"restaurant"}
                  thumbnail={foodREC}
                  tags={["WebApp", "Javascript", "Node.js", "Python"]}
                />
              </Link>
              <Link to="Starbucks">
                <Card
                  title={"Starbucks"}
                  thumbnail={starbucks}
                  tags={["Clone Web", "Javascript"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="moneygame">
                <Card
                  title={"moneygame"}
                  thumbnail={moneygame}
                  tags={["WebApp", "Javascript", "JQuery"]}
                />
              </Link>
              <Link to="loverface">
                <Card
                  title={"loverface"}
                  thumbnail={loverface}
                  tags={["WebApp", "Javascript", "JQuery"]}
                />
              </Link>
              <Link to="characterTest">
                <Card
                  title={"characterTest"}
                  thumbnail={charactertest}
                  tags={["WebApp", "Javascript", "JQuery"]}
                />
              </Link>
            </div>
          </div>
          <div className={styles.copyright}>
            Copyrightⓒ{year} by Cottonwood(Geonwoo Park).
          </div>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
