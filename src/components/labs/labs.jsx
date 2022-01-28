import React, { useEffect, useRef, useState } from "react";
import styles from "./labs.module.scss";
import { Container } from "react-bootstrap";
import { throttle } from "lodash";
import Folder from "./folder/folder";
import Gif from "./gif/gif";
import Code from "./code/code";
import Dependency from "./dependency/dependency";
import Links from "./links/links";
import AboutCode from "./aboutCode/aboutCode";
const Labs = ({ loading, getGithubFile }) => {
  const [aboutCode, setAboutCode] = useState();
  const [forPackage, setforPackage] = useState();
  const [forCode, setforCode] = useState();
  const [aboutCodeLoading, setAboutCodeLoading] = useState(false);
  const [forPackageLoading, setforPackageLoading] = useState(false);
  const [forCodeLoading, setforCodeLoading] = useState(false);
  const testRef = useRef();
  // const getScrollTop = (e) => {
  //   const { scrollTop } = e.target;
  //   console.log("ScrollTop:", scrollTop);
  // };
  useEffect(() => {
    console.log(aboutCode);
  }, [aboutCode]);
  return (
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
                setAboutCode={setAboutCode}
                setforPackage={setforPackage}
                setforCode={setforCode}
                setAboutCodeLoading={setAboutCodeLoading}
                setforPackageLoading={setforPackageLoading}
                setforCodeLoading={setforCodeLoading}
              />
            </div>
            <div className={styles.infoContainer}>
              <Gif />
              <AboutCode
                aboutCode={aboutCode}
                aboutCodeLoading={aboutCodeLoading}
              />
              <Dependency
                forPackage={forPackage}
                forPackageLoading={forPackageLoading}
              />
            </div>
            <div className={styles.codeContainer}>
              <Links />
              <Code forCode={forCode} forCodeLoading={forCodeLoading} />
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};
export default Labs;
