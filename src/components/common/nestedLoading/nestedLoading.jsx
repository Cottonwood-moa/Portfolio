import React, { useEffect, useRef } from "react";
import styles from "./nestedLoading.module.scss";
const NestedLoading = ({ nestLoading, setNestLoading, location }) => {
  const topRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    if (nestLoading) {
      setTimeout(() => {
        setNestLoading(false);
      }, 3200);
    }
  }, [nestLoading, setNestLoading]);
  return (
    <div className={styles.loading}>
      <div className={styles.top} ref={topRef}></div>
      <div className={styles.bottom} ref={bottomRef}></div>
      <div className={styles.info}>
        <div className={styles.article}>
          {location.replace("/portfolio/", "")}
        </div>
      </div>
    </div>
  );
};

export default NestedLoading;
