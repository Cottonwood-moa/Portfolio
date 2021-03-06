import React, { useEffect, useRef, useState } from "react";
import styles from "./loading.module.scss";
import ProgressBar from "react-customizable-progressbar";
const Loading = ({ loading, setLoading }) => {
  const loadingRef = useRef();
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (loading) {
      let interval = setInterval(() => {
        setPercentage((prev) => {
          if (percentage < 90) {
            return prev + Math.floor(Math.random() * 10 - 5 + 1) + 5;
          }
          if (percentage >= 90) {
            return prev + 1;
          }
        });
      }, 84);
      if (percentage >= 100) {
        loadingRef.current.style.transform = "translateY(100vh)";
        let timeout = setTimeout(() => {
          loadingRef.current.style.display = "none";
          setLoading(false);
          clearTimeout(timeout);
        }, 850);
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [percentage, loading, setLoading]);
  return (
    <>
      <div className={styles.loadingContainer} ref={loadingRef}>
        <div className={styles.loadingImage}></div>
        <div className={styles.progressBar}>
          <ProgressBar
            progress={percentage}
            radius={100}
            strokeWidth={20}
            strokeColor="pink"
            trackStrokeWidth={4}
            pointerRadius={8}
            pointerStrokeWidth={5}
            pointerStrokeColor="pink"
          ></ProgressBar>
        </div>
      </div>
    </>
  );
};

export default Loading;
