/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useRef, useState } from "react";
import styles from "./intro.module.scss";
import { Container } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import { useLocation } from "react-router-dom";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import { useWindowSize } from "@react-hook/window-size/";
import { FaAngleDoubleDown } from "react-icons/fa";
import MetaTags from "react-meta-tags";
// import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitChars } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
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
    window.scrollTo(0, 0);
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
    <>
      <div className="wrapper">
        <MetaTags>
          <title>About Me</title>
          <meta name="description" content="About Me Component" />
          <meta property="og:title" content="MyApp" />
        </MetaTags>
      </div>

      <div className={`${styles.forRouteTransition} introScroller`}>
        <Tween
          from={{
            x: "-100px",
            scrollTrigger: {
              trigger: ".secondSectionTrigger",
              start: "0px center",
              end: "200px center",
              scrub: 1,
            },
          }}
          stagger={0.2}
        >
          <div className={`${styles.leftThingFollow} leftThingFollowTrigger`}>
            <a
              href="https://github.com/Cottonwood-moa"
              className={styles.article1}
              data-tip
              data-for="githubTip"
            ></a>
            <a
              href="https://cottonwood-moa.tistory.com/"
              className={styles.article2}
              data-tip
              data-for="blogTip"
            ></a>
            <a
              href="https://codepen.io/Cottonwood"
              className={styles.article3}
              data-tip
              data-for="codepenTip"
            ></a>
            <div className={styles.article4} data-tip data-for="phoneTip"></div>
          </div>
        </Tween>
        {progress && <PageLoadBar />}
        <div
          className={styles.introContainer}
          ref={(e) => (pageMoveRefs.current[0] = e)}
        >
          <Container>
            <div className={styles.firstSection}>
              <div className={styles.title}>
                {titleArray.map((item, index) => {
                  const el = "textElement" + index;
                  return (
                    <div className={styles[el]} key={index}>
                      {item}
                    </div>
                  );
                })}
              </div>

              <div className={styles.follows}>
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
              <div className={styles.info}>
                <h1>Hello, my name is Geonwoo Park.</h1>
                <div>
                  I am front-end web developer and confident in UI/UX
                  javascript.
                </div>
                <div>
                  Check out my articles, HTML+CSS+JS and React Vue components at
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
                  <span
                    className={styles.link}
                    data-tip
                    data-for="portfolioTip"
                  >
                    portfolio page
                  </span>
                  .
                </div>
                <div>
                  <Timeline
                    repeat={-1}
                    target={
                      <div className={styles.bottomArrow}>
                        <FaAngleDoubleDown />
                      </div>
                    }
                  >
                    <Tween
                      to={{
                        y: "-10px",
                      }}
                      duration={2}
                    />
                    <Tween
                      to={{
                        y: "0px",
                      }}
                      duration={2}
                    />
                  </Timeline>
                </div>
              </div>
            </div>
            {/* ========================================================= */}
            <div className={`${styles.secondSection} secondSectionTrigger`}>
              <Tween
                from={{
                  x: "-1000px",
                  rotate: 360,
                  scrollTrigger: {
                    // scroller: ".introScroller",
                    trigger: ".doit",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                  },
                }}
                stagger={0.2}
                ease="elastic.out(0.2, 0.1)"
              >
                <SplitChars
                  wrapper={<div className={`${styles.splitText} doit`}></div>}
                >
                  Do It!
                </SplitChars>
              </Tween>
              <Tween
                from={{
                  x: "-100px",
                  y: "-100px",
                  fontSize: "0px",
                  scale: 0,
                  rotate: -180,
                  scrollTrigger: {
                    // scroller: ".introScroller",
                    trigger: ".boxTrigger",
                    start: "-200px center",
                    end: "1200px center",
                    scrub: 1,
                  },
                }}
                stagger={0.2}
                ease="elastic.out(0.2, 0.1)"
              >
                <div className={`${styles.box1} boxTrigger`}></div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>
                <div className={styles.box4}>
                  <div className={styles.man}></div>
                </div>
                <div className={styles.box5}></div>
                <div className={styles.box6}></div>
                <div className={styles.box7}></div>
                <div className={styles.box8}></div>
                <div className={styles.box9}></div>
                <div className={styles.box10}></div>
                <div className={styles.box9}></div>
                <div className={styles.box8}></div>
                <div className={styles.box7}>
                  <div className={styles.cat}></div>
                </div>
                <div className={styles.box6}></div>
                <div className={styles.box5}></div>
                <div className={styles.ground}></div>
              </Tween>
              <Tween
                from={{
                  scale: 0,
                  rotate: -180,
                  scrollTrigger: {
                    // scroller: ".introScroller",
                    trigger: ".doDesign",
                    start: "-200px center",
                    end: "300px center",
                    scrub: 0.5,
                  },
                }}
                stagger={0.2}
                ease="elastic.out(0.2, 0.1)"
              >
                <div className={`${styles.des1} doDesign`}>
                  I do graphic design & code.
                </div>
              </Tween>
              <Tween
                from={{
                  // fontSize: "0px",
                  scale: 0,
                  rotate: -180,
                  scrollTrigger: {
                    // scroller: ".introScroller",
                    trigger: ".uiux",
                    start: "-200px center",
                    end: "300pxpx center",
                    scrub: 0.5,
                  },
                }}
                stagger={0.2}
                ease="elastic.out(0.2, 0.1)"
              >
                <div className={`${styles.des2} uiux`}>
                  I do UI/UX, REST API
                </div>
              </Tween>
            </div>
            <div className={styles.thirdSectionFortransition}>
              <div
                className={`${styles.thirdSection} thirdSectionContainerTrigger`}
              >
                <Tween
                  to={{
                    text: "Here is my development loadmap!",
                    scrollTrigger: {
                      // scroller: ".introScroller",
                      trigger: ".textTrigger",
                      start: "400px center",
                      end: "1000px center",
                      scrub: 1,
                    },
                  }}
                >
                  <span className={`${styles.text} textTrigger`}>
                    What skills do you have ?
                  </span>
                </Tween>
                <Tween
                  to={{
                    x: "-150vw",
                    scrollTrigger: {
                      // scroller: ".introScroller",
                      start: "top top",
                      end: "+=500%",
                      trigger: ".thirdSectionContainerTrigger",
                      pin: ".thirdSectionContainerTrigger",
                      // pinType: "fixed",
                      scrub: 1,
                    },
                  }}
                >
                  <div className={styles.square}>
                    <Tween
                      to={{
                        x: "210vw",
                        opacity: 1,
                        scrollTrigger: {
                          // scroller: ".introScroller",
                          trigger: ".thirdSectionContainerTrigger",
                          start: "top top",
                          end: "+=500%",
                          scrub: 1,
                        },
                      }}
                    >
                      <div className={styles.fixed}></div>
                    </Tween>
                    <div className={styles.html}></div>
                    <div className={styles.js}></div>
                    <div className={styles.node}></div>
                    <div className={styles.python}></div>
                    <div className={styles.django}></div>
                    <div className={styles.vue}></div>
                    <div className={styles.react}></div>
                    <Tween
                      from={{
                        x: "-100px",
                        y: "-100px",
                        fontSize: "0px",
                        opacity: 0,
                        scale: 0,
                        // rotate: 90,
                        scrollTrigger: {
                          // scroller: ".introScroller",
                          trigger: ".groundTrigger",
                          start: "-200px center",
                          end: "4000px center",
                          scrub: 1,
                        },
                      }}
                      stagger={0.2}
                      ease="elastic.out(0.2, 0.1)"
                    >
                      <div className={`${styles.box} groundTrigger`}></div>
                      {Array.from(Array(20), (e, i) => {
                        return (
                          <div
                            key={i}
                            className={`${styles.box} ${styles.test + i}`}
                          ></div>
                        );
                      })}
                    </Tween>
                  </div>
                </Tween>
              </div>
            </div>
            <div className={`${styles.fourthSection} fourthSectionTrigger`}>
              <div>
                <Tween
                  from={{
                    x: "2000px",
                    y: "100px",
                    rotate: 360,
                    scale: 0,
                    fontSize: 0,
                    scrollTrigger: {
                      // scroller: ".introScroller",
                      trigger: ".fourthSectionTrigger",
                      start: "0px center",
                      end: "200px center",
                      scrub: 1,
                    },
                  }}
                  stagger={0.2}
                  ease="elastic.out(0.2, 0.1)"
                >
                  <SplitChars
                    wrapper={<div className={`${styles.text}`}></div>}
                  >
                    Check&nbsp;my&nbsp;Portfolio&nbsp;page&nbsp;and&nbsp;Code&nbsp;laboratory!
                  </SplitChars>
                </Tween>
              </div>
              <div className={styles.copyright}>
                Copyrightⓒ{year} by Cottonwood(Geonwoo Park).
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Intro;
