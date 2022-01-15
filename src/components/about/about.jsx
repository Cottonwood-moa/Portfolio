import React, { useEffect, useState } from "react";
import styles from "./about.module.css";
import Nav from "../nav/nav";
import Loading from "../loading/loading";
const About = (props) => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  let interval = undefined;
  useEffect(() => {
    if (loading) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(() => {
        setPercentage((prev) => prev + Math.floor(Math.random() * 30));
      }, 180);
    } else {
      clearInterval(interval);
    }
  }, [loading]);
  useEffect(() => {
    if (percentage >= 100) {
      setLoading(false);
      clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);
  return (
    <>
      {loading && <Loading percentage={percentage} />}
      {loading || <Nav />}
      {loading || (
        <div className={styles.about}>
          <div className={`${styles.aboutContainer} container`}>About</div>
        </div>
      )}
    </>
  );
};

export default About;
