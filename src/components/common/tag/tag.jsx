import React, { useEffect, useRef, useState } from "react";
import styles from "./tag.module.scss";
const Tag = ({ tagText, tagDelay }) => {
  const tagTextRef = useRef();
  const [tagToggle, setTagToggle] = useState(false);
  useEffect(() => {
    if (tagToggle) {
      tagTextRef.current.style.animationDelay = tagDelay;
    }
    setTagToggle(true);
  }, [setTagToggle, tagToggle, tagTextRef, tagDelay]);
  return (
    <>
      {tagToggle && (
        <div className={styles.tagContainer} ref={tagTextRef}>
          <div className={styles.tagText} ref={tagTextRef}>
            {tagText}
          </div>
        </div>
      )}
    </>
  );
};

export default Tag;
