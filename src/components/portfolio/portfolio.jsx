import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./portfolio.module.scss";
import ToPage from "../toPage/toPage";
import ReturnPage from "../returnPage/returnPage";
import Card from "./card/card";
import { Container } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
const Portfolio = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [progress, setProgress] = useState(false);
  const [arrowRight, setArrowRight] = useState();
  const [arrowLeft, setArrowLeft] = useState();
  const pageMoveRefs = useRef([]);
  const anotherPage = (pageName) => {
    setProgress(true);
    arrowRight.current.style.transform = "translateX(200px)";
    arrowLeft.current.style.transform = "translateX(-200px)";
    pageMoveRefs.current.map((item) => {
      item.style.transform = "translateY(-10vh)";
      item.style.opacity = "0";
    });
  };
  useEffect(() => {
    if (location.pathname !== "/portfolio") {
      anotherPage();
    }
  }, [location.pathname]);
  return (
    <div className={styles.portfolioContainer}>
      {progress && <PageLoadBar />}
      <Container>
        <ToPage
          pageName={"labs"}
          setProgress={setProgress}
          anotherPage={anotherPage}
          setArrow={setArrowRight}
        />
        <ReturnPage
          pageName={"/"}
          setProgress={setProgress}
          anotherPage={anotherPage}
          setArrow={setArrowLeft}
        />
        <div className={styles.test}>
          <div className={styles.test2}></div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
