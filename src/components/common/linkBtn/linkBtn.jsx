import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./linkBtn.module.scss";
const LinkBtn = ({ size, text }) => {
  const linkRef = useRef();
  const [forDom, setForDom] = useState(false);
  useEffect(() => {
    if (forDom) {
      linkRef.current.style.fontSize = `${size}px`;
    }
    setForDom(true);
  }, [forDom, size]);
  return (
    <>
      <div className={styles.link} ref={linkRef}>
        {text}
      </div>
    </>
  );
};

export default LinkBtn;
