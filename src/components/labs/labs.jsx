import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// CSS
import styles from "./labs.module.scss";
// BOOTSTRAP
import { Container } from "react-bootstrap";
// COMPONENTS
import Folder from "./folder/folder";
import Gif from "./gif/gif";
import Code from "./code/code";
import PageLoadBar from "../pageLoadBar/pageLoadBar";
const Labs = ({ loading, getGithubFile }) => {
  // useLocation
  const location = useLocation();
  // useState
  const [forCode, setforCode] = useState();
  const [forCodeLoading, setforCodeLoading] = useState(false);
  const [aboutCode, setAboutCode] = useState();
  const [aboutCodeLoading, setAboutCodeLoading] = useState(false);
  const [progress, setProgress] = useState(false);
  // useRef
  const testRef = useRef();
  // function
  const anotherPage = () => {
    testRef.current.style.transform = "translateY(-10vh)";
    testRef.current.style.opacity = "0";
    setProgress(true);
  };
  // useEffect
  useEffect(() => {
    if (location.pathname !== "/labs") {
      anotherPage();
    }
  }, [location.pathname]);
  // content
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
