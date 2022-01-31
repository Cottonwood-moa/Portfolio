import React from "react";
import styles from "./tuto.module.scss";
const Tuto = (props) => {
  return (
    <>
      <div className={styles.tutoContainer}>
        <div className={styles.tutoFolder}></div>
        <div className={styles.tutoCode}></div>
        <div className={styles.tutoPreview}></div>
      </div>
    </>
  );
};

export default Tuto;
