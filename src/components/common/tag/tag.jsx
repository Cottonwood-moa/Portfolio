import React, { useEffect, useRef } from "react";
import styles from "./tag.module.scss";
const Tag = ({ tagText, tagDelay }) => {
  const tagTextRef = useRef();
  useEffect(() => {
    tagTextRef.current.style.transform = "rotate(0)";
    if (tagDelay) {
      tagTextRef.current.style.transitionDelay = tagDelay;
    }
  });
  return (
    <div className={styles.tagContainer}>
      <div className={styles.tagText} ref={tagTextRef}>
        {tagText}
      </div>
    </div>
  );
};

export default Tag;
