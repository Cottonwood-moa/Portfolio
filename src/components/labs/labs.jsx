import React, { useEffect, useRef, useState } from "react";
import styles from "./labs.module.scss";
import { Container } from "react-bootstrap";
import { throttle } from "lodash";
import Folder from "./folder/folder";
import Gif from "./gif/gif";
import Code from "./code/code";
const Labs = ({ loading, getGithubFile }) => {
  const [forCode, setforCode] = useState();
  const [forCodeLoading, setforCodeLoading] = useState(false);
  const testRef = useRef();
  // const getScrollTop = (e) => {
  //   const { scrollTop } = e.target;
  //   console.log("ScrollTop:", scrollTop);
  // };
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
                setforCode={setforCode}
                setforCodeLoading={setforCodeLoading}
              />
            </div>
            <Code forCode={forCode} forCodeLoading={forCodeLoading} />
          </div>
        </Container>
      )}
    </div>
  );
};
export default Labs;
