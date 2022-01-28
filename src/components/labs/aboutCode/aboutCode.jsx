import React from "react";

import styles from "./aboutCode.module.scss";
import Spinner from "../../common/spinner/spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const AboutCode = ({ aboutCode, aboutCodeLoading }) => {
  return (
    <div className={styles.aboutCodeContainer}>
      {aboutCodeLoading && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      <ReactMarkdown
        children={aboutCode}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </div>
  );
};
export default AboutCode;
