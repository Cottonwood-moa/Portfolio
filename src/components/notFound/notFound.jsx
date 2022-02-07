import React, { useEffect, useRef, useState } from "react";
import styles from "./notFound.module.scss";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  const [progress, setProgress] = useState(false);
  const [render, setRender] = useState(false);
  const pageMoveRefs = useRef([]);
  const location = useLocation();
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
    if (render) {
      anotherPage();
    }
    setRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <div
        className={styles.container}
        ref={(e) => (pageMoveRefs.current[0] = e)}
      >
        <h1>404 Not Found</h1>
      </div>
      {progress && <PageLoadBar />}
    </>
  );
};

export default NotFound;
