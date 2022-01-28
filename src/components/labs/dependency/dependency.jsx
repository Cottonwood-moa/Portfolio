import React from "react";
import styles from "./dependency.module.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import Spinner from "../../common/spinner/spinner";
const Dependency = ({ forPackage, forPackageLoading }) => {
  return (
    <div className={styles.dependencyContainer}>
      {forPackageLoading && (
        <div className={styles.spinnerContainer}>
          <Spinner />
        </div>
      )}
      <ReactMarkdown
        children={forPackage}
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
  );
};

export default Dependency;
