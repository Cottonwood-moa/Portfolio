import React, { useEffect, useRef, useState } from "react";
// CSS
import styles from "./test.module.scss";
import { Container } from "react-bootstrap";
// MARK DOWN
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { Link, useLocation } from "react-router-dom";

function Test({ readMd, file }) {
  const location = useLocation();
  // useState
  const [mdFile, setMdFile] = useState(``);
  // useRef
  const mdRef = useRef();
  const mdRef2 = useRef();
  // get file.md -> use github api
  const mdRead = async () => {
    const res = await readMd.readGithubMd(file);
    await setMdFile(res);
  };
  // useEffect
  useEffect(() => {
    mdRead();
  }, []);
  useEffect(() => {
    if (!location.pathname.includes("/portfolio/")) {
      // 접고 떨어지는 애니메이션
      mdRef.current.style.transform = "rotate(10deg)";
      mdRef2.current.style.transform = "translateY(100vh)";
      // fade-out-top
    }
  }, [location.pathname]);
  return (
    <div className={styles.forPageTransition} ref={mdRef2}>
      <div className={styles.test} ref={mdRef}>
        <Container>
          <div className={styles.labsContainer}>
            <div className={styles.blank}></div>
            <ReactMarkdown
              children={mdFile}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={a11yDark}
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
        </Container>
      </div>
    </div>
  );
}

export default Test;
