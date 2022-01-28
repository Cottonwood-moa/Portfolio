import React, { useRef } from "react";
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
  const testRef = useRef();
  const getScrollTop = (e) => {
    const { scrollTop } = e.target;
    console.log("ScrollTop:", scrollTop);
  };
  return (
    <div
      className={styles.test}
      ref={testRef}
      onScroll={throttle(getScrollTop, 300)}
    >
      {loading || (
        <Container>
          <div className={styles.labsContainer}>
            <div className={styles.folderContainer}>
              <Folder getGithubFile={getGithubFile} />
            </div>
            <div className={styles.infoContainer}>
              <Gif />
              <AboutCode />
              <Dependency />
            </div>
            <div className={styles.codeContainer}>
              <Links />
              <Code />
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};
export default Labs;
