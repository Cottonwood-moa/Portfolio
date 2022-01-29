import React, { useEffect, useState } from "react";
import styles from "./folder.module.scss";
import { FaAngleRight } from "react-icons/fa";
const Folder = ({
  getGithubFile,
  setAboutCode,
  setforCode,
  setAboutCodeLoading,
  setforCodeLoading,
}) => {
  const [forHtml, setForHtml] = useState(true);
  const [forJs, setForJs] = useState(false);
  const [forVue, setForVue] = useState(false);
  const [forReact, setForReact] = useState(false);
  const [header, setHeader] = useState();
  const getFile = async (reactBasicTemplate) => {
    setforCodeLoading(true);
    setAboutCodeLoading(true);
    const forCode = await getGithubFile.getCode(reactBasicTemplate);
    await setforCode(forCode);
    await setforCodeLoading(false);
    const aboutCode = await getGithubFile.getAboutCode(reactBasicTemplate);
    await setAboutCode(aboutCode);
    await setAboutCodeLoading(false);
  };
  useEffect(() => {
    if (forHtml) {
      setHeader("HTML+CSS");
    }
    if (forJs) {
      setHeader("Javascript");
    }
    if (forVue) {
      setHeader("Vue.js");
    }
    if (forReact) {
      setHeader("React.js");
    }
  }, [setHeader, forHtml, forJs, forVue, forReact]);
  return (
    <div className={styles.folderContainer}>
      <div className={styles.category}>
        <div
          className={styles.article}
          onClick={() => {
            setForHtml(true);
            setForJs(false);
            setForVue(false);
            setForReact(false);
          }}
        >
          HTML+CSS
        </div>
        <div
          className={styles.article}
          onClick={() => {
            setForHtml(false);
            setForJs(true);
            setForVue(false);
            setForReact(false);
          }}
        >
          JS
        </div>
        <div
          className={styles.article}
          onClick={() => {
            setForHtml(false);
            setForJs(false);
            setForVue(true);
            setForReact(false);
          }}
        >
          Vue.js
        </div>
        <div
          className={styles.article}
          onClick={() => {
            setForHtml(false);
            setForJs(false);
            setForVue(false);
            setForReact(true);
          }}
        >
          React.js
        </div>
      </div>
      <div className={styles.files}>
        <div className={styles.filesHeader}>
          <div>{header}</div>
        </div>
        {forHtml && (
          <>
            <div
              className={styles.article}
              onClick={() => {
                getFile("htmlHoverRotate");
              }}
            >
              <FaAngleRight />
              flip over
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("htmlInsertVideo");
              }}
            >
              <FaAngleRight />
              inserting video
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("htmlMIxin");
              }}
            >
              <FaAngleRight />
              focus
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("cssPriority");
              }}
            >
              <FaAngleRight />
              cssPriority
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("htmlMiddle");
              }}
            >
              <FaAngleRight />
              alignCenter
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              HTML 6
            </div>
          </>
        )}
        {forJs && (
          <>
            <div
              className={styles.article}
              onClick={() => {
                getFile("promise");
              }}
            >
              <FaAngleRight />
              Promise
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("localstorage");
              }}
            >
              <FaAngleRight />
              localstorage
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("AJAX");
              }}
            >
              <FaAngleRight />
              AJAX
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("hoisting");
              }}
            >
              <FaAngleRight />
              hoisting
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("copy");
              }}
            >
              <FaAngleRight />
              copy
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("class");
              }}
            >
              <FaAngleRight />
              class
            </div>
          </>
        )}
        {forVue && (
          <>
            <div
              className={styles.article}
              onClick={() => {
                getFile("lifecycle");
              }}
            >
              <FaAngleRight />
              LifeCycle
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("provide");
              }}
            >
              <FaAngleRight />
              Provide/Inject
            </div>
            <div
              className={styles.article}
              onClick={() => {
                getFile("composition");
              }}
            >
              <FaAngleRight />
              compositionAPI
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              Vue 4
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              Vue 5
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              Vue 6
            </div>
          </>
        )}
        {forReact && (
          <>
            <div
              className={styles.article}
              onClick={() => {
                getFile("reactBasicTemplate");
              }}
            >
              <FaAngleRight />
              React Basic Template
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              React 2
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              React 3
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              React 4
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              React 5
            </div>
            <div className={styles.article}>
              <FaAngleRight />
              React 6
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Folder;
