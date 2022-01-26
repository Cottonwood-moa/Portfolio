import React from "react";
import styles from "./toTop.module.scss";
const ToTop = (props) => {
  const scrollToTop = () => {
    console.log("toTop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.toTop} onClick={scrollToTop}>
      ToTop
    </div>
  );
};

export default ToTop;
