import React, { useRef, useState } from "react";
import styles from "./gif.module.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
const Gif = ({ aboutCode }) => {
  const previewRef = useRef();
  const [forToggle, setForToggle] = useState(false);
  const toggle = () => {
    if (forToggle) {
      previewRef.current.style.transform = "translateX(0)";
      setForToggle(false);
    }
    if (!forToggle) {
      previewRef.current.style.transform = "translateX(49em)";
      setForToggle(true);
    }
  };
  return (
    <div className={styles.previewContainer} ref={previewRef}>
      <div className={styles.toggle} onClick={() => toggle()}></div>
      <div className={styles.gifContainer}>
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
      </div>
    </div>
  );
};

export default Gif;
