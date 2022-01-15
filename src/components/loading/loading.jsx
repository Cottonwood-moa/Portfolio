import React from "react";
import styles from "./loading.module.css";
import ProgressBar from "react-customizable-progressbar";
const Loading = ({ percentage }) => {
  return (
    <>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingImage}></div>
        <div className={styles.progressBar}>
          <ProgressBar
            progress={percentage}
            radius={100}
            strokeWidth={12}
            strokeColor="#FF69B4"
            trackStrokeWidth={4}
            pointerRadius={8}
            pointerStrokeWidth={5}
            pointerStrokeColor="#FF69B4"
          ></ProgressBar>
        </div>
      </div>
    </>
  );
};

export default Loading;
