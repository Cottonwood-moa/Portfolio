import React, { useEffect, useRef, useState } from "react";
import styles from "./labs.module.scss";
import { Container } from "react-bootstrap";
import Folder from "./folder/folder";
import Gif from "./gif/gif";
import Code from "./code/code";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import { useLocation } from "react-router-dom";
const Labs = ({ loading, getGithubFile }) => {
  const location = useLocation();
  const [forCode, setforCode] = useState();
  const [forCodeLoading, setforCodeLoading] = useState(false);
  const [aboutCode, setAboutCode] = useState();
  const [aboutCodeLoading, setAboutCodeLoading] = useState(false);
  const [progress, setProgress] = useState(false);
  const testRef = useRef();

  const anotherPage = () => {
    testRef.current.style.transform = "translateY(-10vh)";
    testRef.current.style.opacity = "0";
    setProgress(true);
  };
  useEffect(() => {
    if (location.pathname !== "/labs") {
      anotherPage();
    }
  }, [location.pathname]);
  return (
    <>
      {progress && <PageLoadBar />}
      <div className={styles.forShow}>
        <div
          className={styles.test}
          ref={testRef}
          // onScroll={throttle(getScrollTop, 300)}
        >
          {loading || (
            <Container>
              <div className={styles.labsContainer}>
                <div className={styles.folderContainer}>
                  <Folder
                    getGithubFile={getGithubFile}
                    setforCode={setforCode}
                    setforCodeLoading={setforCodeLoading}
                    setAboutCode={setAboutCode}
                    setAboutCodeLoading={setAboutCodeLoading}
                  />
                </div>
                <Code forCode={forCode} forCodeLoading={forCodeLoading} />
                <Gif
                  aboutCode={aboutCode}
                  aboutCodeLoading={aboutCodeLoading}
                />
              </div>
            </Container>
          )}
        </div>
      </div>
    </>
  );
};
export default Labs;
