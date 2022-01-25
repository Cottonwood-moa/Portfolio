import React, { useState, useRef } from "react";
import styles from "./card.module.scss";
import Tag from "../../common/tag/tag";
const Card = ({ title, tags, thumbnail }) => {
  const [tagHover, setTagHover] = useState(false);
  const backgroundRef = useRef();
  return (
    <>
      <div
        className={styles.card}
        ref={backgroundRef}
        onMouseEnter={() => setTagHover(true)}
        onMouseLeave={() => setTagHover(false)}
      >
        <div className={styles.header}>
          <img
            src="https://tistory2.daumcdn.net/tistory/4706624/skin/images/2.png"
            alt="tree"
            className={styles.tree}
          />
          <span className={styles.title}>{title}</span>
        </div>
        <img src={thumbnail} alt="" className={styles.image} />
        <div className={styles.forHover}>
          <div className={styles.tags}>
            {tagHover &&
              tags.map((tag, index) => {
                const delay = `${(index + 1) / 10}s`;
                return <Tag tagText={tag} tagDelay={delay} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
