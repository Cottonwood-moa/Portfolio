import React from "react";
import styles from "./folder.module.scss";

const Folder = ({ getGithubFile }) => {
  const getFile = () => {
    console.log(getGithubFile.getFile());
  };
  return (
    <div className={styles.folderContainer}>
      <div className={styles.category}>
        <div className={styles.article} onClick={() => getFile()}>
          1
        </div>
        <div className={styles.article}>2</div>
        <div className={styles.article}>3</div>
        <div className={styles.article}>4</div>
        <div className={styles.article}>5</div>
      </div>
      <div className={styles.files}>
        <div className={styles.filesHeader}>Header</div>
        <div className={styles.article}>1</div>
        <div className={styles.article}>2</div>
        <div className={styles.article}>3</div>
        <div className={styles.article}>4</div>
        <div className={styles.article}>5</div>
        <div className={styles.article}>6</div>
      </div>
    </div>
  );
};

export default Folder;
