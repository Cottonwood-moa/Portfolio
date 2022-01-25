import React, { useEffect, useRef } from "react";
import Tag from "../../../common/tag/tag";
import styles from "./navLabsInfo.module.scss";
const NavLabsInfo = ({ labsInfo }) => {
  const imageRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  useEffect(() => {
    if (labsInfo) {
      imageRef.current.style.transform = "translateY(0)";
      imageRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
      titleRef.current.style.opacity = "1";
      // textRef.current.style.transform = "translateY(0)";
      // textRef.current.style.opacity = "1";
    }
  });
  return (
    <div className={styles.navInfo}>
      <div className={styles.image} ref={imageRef}></div>
      <h1 className={styles.title} ref={titleRef}>
        code laboratory
      </h1>
      {/* <div className={styles.tags}>
        <Tag tagText="React.js" tagDelay="1.1s" />
        <Tag tagText="Javascript" tagDelay="0.8s" />
        <Tag tagText="Django" tagDelay="1.3s" />
        <Tag tagText="Vue.js" tagDelay="1.2s" />
        <Tag tagText="JQeury" tagDelay="1s" />
        <Tag tagText="Python" tagDelay="0.9s" />
        <Tag tagText="Node.js" tagDelay="1.3s" />
        <Tag tagText="Django" tagDelay="1.3s" />
      </div> */}
      {/* <div className={styles.text} ref={textRef}>
        ReactJS/Web Components, Brackets extensions and everything else
        accomplished on my spare software development time.
      </div> */}
    </div>
  );
};

export default NavLabsInfo;
