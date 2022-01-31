import React, { useEffect, useRef, useState } from "react";
import styles from "./gif.module.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import Spinner from "../../common/spinner/spinner";
const Gif = ({ aboutCode, aboutCodeLoading }) => {
  const previewRef = useRef();
  const [forToggle, setForToggle] = useState(false);
  const [test, setTest] = useState(true);
  const toggle = () => {
    if (!forToggle) {
      previewRef.current.style.transform = "translateX(0)";
      setForToggle(true);
    }
    if (forToggle) {
      previewRef.current.style.transform = "translateX(47em)";
      setForToggle(false);
    }
  };
  // useEffect가 실행될때 상태를 한번만 받아오기 때문에 true, false값이 바뀌지 않는다.
  // 업데이트된 상태가 반영되지 않기 때문에.
  // https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval
  return (
    <div className={styles.previewContainer} ref={previewRef}>
      <div className={styles.toggle} onClick={() => toggle()}></div>
      <div className={styles.gifContainer}>
        {aboutCodeLoading && (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        )}
        {aboutCodeLoading || (
          <ReactMarkdown
            children={aboutCode}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Gif;
