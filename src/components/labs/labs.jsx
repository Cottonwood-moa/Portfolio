import React, { useRef } from "react";
import styles from "./labs.module.scss";
import { Container } from "react-bootstrap";
import { throttle } from "lodash";
const Labs = ({ loading }) => {
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
            <span className={styles.preparing}>Preparing</span>;
          </div>
        </Container>
      )}
    </div>
  );
};
export default Labs;
