Loding component

```js
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
```

부모 컴포넌트

```js
import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import styles from "./intro.module.scss";
import Loading from "../loading/loading";
import { Container } from "react-bootstrap";
const Intro = (props) => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [loadingRef, setLoadingRef] = useState({});

  useEffect(() => {
    if (loading) {
      let interval = setInterval(() => {
        setPercentage((prev) => {
          if (percentage < 90) {
            return prev + Math.floor(Math.random() * 10);
          }
          if (percentage >= 90) {
            return prev + 1;
          }
        });
      }, 50);
      if (percentage >= 100) {
        clearInterval(interval);
        setLoading(false);
      }
      return () => clearInterval(interval);
    }
  }, [percentage, loading, loadingRef]);

  return (
    <>
      {loading && (
        <Loading percentage={percentage} setLoadingRef={setLoadingRef} />
      )}
      {loading || <Nav />}
      {loading || (
        <Container>
          <div className={styles.introContainer}>intro</div>
        </Container>
      )}
    </>
  );
};

export default Intro;
```
