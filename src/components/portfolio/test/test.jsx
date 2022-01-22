import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "./test.module.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
function Test({ readMd }) {
  const testRef = useRef();
  const [mdFile, setMdFile] = useState(``);
  const test = "# hello world";
  const mdRead = async () => {
    const res = readMd.readGithubMd();
    console.log(res);
  };
  useEffect(() => {
    mdRead();
  }, []);
  return (
    <div className={styles.test}>
      <Container>
        <div className={styles.labsContainer}>
          <ReactMarkdown
            children={mdFile}
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
  );
}

export default Test;
