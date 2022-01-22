import React, { useEffect, useState } from "react";
// CSS
import styles from "./test.module.scss";
import { Container } from "react-bootstrap";
// MARK DOWN
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

function Test({ readMd }) {
  // useState
  const [mdFile, setMdFile] = useState(``);
  // get file.md -> use github api
  const mdRead = async () => {
    const res = await readMd.readGithubMd();
    await setMdFile(res);
  };
  // useEffect
  useEffect(() => {
    mdRead();
  }, []);

  return (
    <div className={styles.test}>
      <Container>
        <div className={styles.labsContainer}>
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
  );
}

export default Test;
