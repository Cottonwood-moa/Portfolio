```js
import React, { useEffect } from "react";
import styles from "./folder.module.scss";

const Folder = ({ getGithubFile, setAboutCode, setforPackage, setforCode }) => {
  const getFile = async (reactBasicTemplate) => {
    const aboutCode = await getGithubFile.getAboutCode(reactBasicTemplate);
    const forPackage = await getGithubFile.getPackage(reactBasicTemplate);
    const forCode = await getGithubFile.getCode(reactBasicTemplate);
    // const aboutCode = await getGithubFile.getAboutCode(reactBasicTemplate);
    await setAboutCode(aboutCode);
    await setforPackage(forPackage);
    await setforCode(forCode);
    console.log("get 실행");
  };
  return (
    <div className={styles.folderContainer}>
      <div className={styles.category}>
        <div className={styles.article}>1</div>
        <div className={styles.article}>2</div>
        <div className={styles.article}>3</div>
        <div className={styles.article}>4</div>
        <div className={styles.article}>5</div>
      </div>
      <div className={styles.files}>
        <div className={styles.filesHeader}>Header</div>
        <div
          className={styles.article}
          onClick={() => {
            getFile("reactBasicTemplate");
          }}
        >
          1
        </div>
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

```
