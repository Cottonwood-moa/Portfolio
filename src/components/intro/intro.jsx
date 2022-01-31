/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef, useState } from "react";
import styles from "./intro.module.scss";
import { Container } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import { useLocation } from "react-router-dom";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import { useWindowSize } from "@react-hook/window-size/";
// import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitChars } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Intro = ({ readMd }) => {
  // eslint-disable-next-line no-unused-vars
  const [widthD, heightD] = useWindowSize();
  // date
  const now = new Date();
  const year = now.getFullYear();
  // useState
  const [progress, setProgress] = useState(false);
  const [follow, setFollow] = useState(false);
  // use react-router-dom
  const location = useLocation();
  // useRef
  const pageMoveRefs = useRef([]);
  // variable
  const titleArray = ["A", "B", "O", "U", "T"];
  // function
  const anotherPage = (pageName) => {
    setProgress(true);
    // eslint-disable-next-line array-callback-return
    pageMoveRefs.current.map((item) => {
      item.style.transform = "translateY(-10vh)";
      item.style.opacity = "0";
    });
  };
  useEffect(() => {
    if (widthD < 924) {
      setFollow(false);
    }
    if (widthD >= 924) {
      setFollow(true);
    }
  }, [location, setFollow, widthD]);
  useEffect(() => {
    if (location.pathname !== "/") {
      anotherPage();
    }
  }, [location.pathname]);
  return (
    <div className={styles.forRouteTransition}>
      {/* <Nav getNavRefs={getNavRefs} /> */}
      {progress && <PageLoadBar />}
      <div className={styles.introContainer}>
        <Container>
          <div className={styles.firstSection}>
            <div
              className={styles.title}
              ref={(e) => (pageMoveRefs.current[0] = e)}
            >
              {titleArray.map((item, index) => {
                const el = "textElement" + index;
                return (
                  <div className={styles[el]} key={index}>
                    {item}
                  </div>
                );
              })}
            </div>

            <div
              className={styles.follows}
              ref={(e) => (pageMoveRefs.current[1] = e)}
            >
              {follow && (
                <>
                  <ReactTooltip id="codepenTip" type="error" effect="float">
                    Codepen
                  </ReactTooltip>
                  <a
                    href="https://codepen.io/Cottonwood"
                    data-tip
                    data-for="codepenTip"
                    className={`${styles.follow} ${styles.codepen}`}
                  ></a>
                  <ReactTooltip id="githubTip" type="error" effect="float">
                    Github
                  </ReactTooltip>
                  <a
                    href="https://github.com/Cottonwood-moa"
                    data-tip
                    data-for="githubTip"
                    className={`${styles.follow} ${styles.github}`}
                  ></a>
                </>
              )}
              <div className={styles.image}></div>
              {follow && (
                <>
                  <ReactTooltip id="blogTip" type="error" effect="float">
                    Blog
                  </ReactTooltip>
                  <a
                    href="https://cottonwood-moa.tistory.com/"
                    data-tip
                    data-for="blogTip"
                    className={`${styles.follow} ${styles.techBlog}`}
                  ></a>
                  <ReactTooltip id="phoneTip" type="error" effect="float">
                    +82-10-2831-6735
                  </ReactTooltip>
                  <div
                    data-tip
                    data-for="phoneTip"
                    className={`${styles.follow} ${styles.phone}`}
                  ></div>
                </>
              )}
            </div>
            <div
              className={styles.info}
              ref={(e) => (pageMoveRefs.current[2] = e)}
            >
              <h1>Hello, my name is Geonwoo Park.</h1>
              <div>
                I am front-end web developer and UI/UX javascript specialist.
              </div>
              <div>
                Check out my articles, React and React Native UI components at
                the
                <ReactTooltip id="labsTip" type="error" effect="float">
                  Go to Code laboratory
                </ReactTooltip>
                <span className={styles.link} data-tip data-for="labsTip">
                  code laboratory
                </span>
                .
              </div>
              <div>
                Feel free to take a look at my latest projects on the web
                <ReactTooltip id="portfolioTip" type="error" effect="float">
                  Go to Portfolio
                </ReactTooltip>
                <span className={styles.link} data-tip data-for="portfolioTip">
                  portfolio page
                </span>
                .
              </div>
              <div className={styles.copyright}>
                Copyrightⓒ{year} by Cottonwood(Geonwoo Park).
              </div>
            </div>
          </div>
          <div className={styles.secondSection}>
            <Tween
              to={{
                x: "400px",
                y: "400px",
                fontSize: 80,
                scrollTrigger: {
                  trigger: ".square",
                  start: "700px center",
                  end: "900px center",
                  scrub: 0.5,
                  markers: true,
                },
              }}
              stagger={0.2}
              ease="elastic.out(0.2, 0.1)"
            >
              <SplitChars
                wrapper={
                  <div style={{ display: "inline-block", fontSize: "40px" }} />
                }
              >
                This text gets splitted by chars.
              </SplitChars>
            </Tween>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
