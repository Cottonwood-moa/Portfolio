import React from "react";

import styles from "./aboutCode.module.scss";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const AboutCode = ({ aboutCode }) => {
  return (
    <div className={styles.aboutCodeContainer}>
      <ReactMarkdown
        children={aboutCode}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </div>
  );
};
export default AboutCode;
