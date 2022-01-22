import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./portfolio.module.scss";
import ToPage from "../toPage/toPage";
import ReturnPage from "../returnPage/returnPage";
import Card from "./card/card";
import { Container } from "react-bootstrap";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import Test from "./test/test";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Portfolio = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
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
      <ToPage
        pageName={"labs"}
        setProgress={setProgress}
        anotherPage={anotherPage}
        setArrow={setArrowRight}
      />
      <ReturnPage
        pageName={""}
        setProgress={setProgress}
        anotherPage={anotherPage}
        setArrow={setArrowLeft}
      />
      <Container>
        <div className={styles.container}>
          <Link to="test">child 1</Link>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
