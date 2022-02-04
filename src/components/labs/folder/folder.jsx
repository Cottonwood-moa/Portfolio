import React, { useEffect, useRef, useState } from "react";
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
  const chosenRef = useRef([]);
  const [lastRef, setLastRef] = useState();
  const getFile = async (reactBasicTemplate, num) => {
    if (lastRef) {
      lastRef.style.background = "#2a2a2a";
    }
    chosenRef.current[num].style.background = "#494949";
    setLastRef(chosenRef.current[num]);

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
    getFile("htmlHoverRotate", 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              ref={(r) => (chosenRef.current[0] = r)}
              onClick={() => {
                getFile("htmlHoverRotate", 0);
              }}
            >
              <FaAngleRight />
              flip over
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[1] = r)}
              onClick={() => {
                getFile("htmlInsertVideo", 1);
              }}
            >
              <FaAngleRight />
              inserting video
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[2] = r)}
              onClick={() => {
                getFile("htmlMIxin", 2);
              }}
            >
              <FaAngleRight />
              focus
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[3] = r)}
              onClick={() => {
                getFile("cssPriority", 3);
              }}
            >
              <FaAngleRight />
              cssPriority
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[4] = r)}
              onClick={() => {
                getFile("htmlMiddle", 4);
              }}
            >
              <FaAngleRight />
              alignCenter
            </div>
          </>
        )}
        {forJs && (
          <>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[5] = r)}
              onClick={() => {
                getFile("promise", 5);
              }}
            >
              <FaAngleRight />
              Promise
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[6] = r)}
              onClick={() => {
                getFile("localstorage", 6);
              }}
            >
              <FaAngleRight />
              localstorage
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[7] = r)}
              onClick={() => {
                getFile("AJAX", 7);
              }}
            >
              <FaAngleRight />
              AJAX
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[8] = r)}
              onClick={() => {
                getFile("hoisting", 8);
              }}
            >
              <FaAngleRight />
              hoisting
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[9] = r)}
              onClick={() => {
                getFile("copy", 9);
              }}
            >
              <FaAngleRight />
              copy
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[10] = r)}
              onClick={() => {
                getFile("class", 10);
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
              ref={(r) => (chosenRef.current[11] = r)}
              onClick={() => {
                getFile("lifecycle", 11);
              }}
            >
              <FaAngleRight />
              LifeCycle
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[12] = r)}
              onClick={() => {
                getFile("provide", 12);
              }}
            >
              <FaAngleRight />
              Provide/Inject
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[13] = r)}
              onClick={() => {
                getFile("composition", 13);
              }}
            >
              <FaAngleRight />
              compositionAPI
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[14] = r)}
              onClick={() => {
                getFile("router", 14);
              }}
            >
              <FaAngleRight />
              Router
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[15] = r)}
              onClick={() => {
                getFile("form", 15);
              }}
            >
              <FaAngleRight />
              Form binding
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[16] = r)}
              onClick={() => {
                getFile("vuex", 16);
              }}
            >
              <FaAngleRight />
              vuex
            </div>
          </>
        )}
        {forReact && (
          <>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[17] = r)}
              onClick={() => {
                getFile("reactBasicTemplate", 17);
              }}
            >
              <FaAngleRight />
              react-markdown
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[18] = r)}
              onClick={() => {
                getFile("react-progressbar", 18);
              }}
            >
              <FaAngleRight />
              react-progressbar
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[19] = r)}
              onClick={() => {
                getFile("react-transition", 19);
              }}
            >
              <FaAngleRight />
              react-transition-group
            </div>
            <div
              className={styles.article}
              ref={(r) => (chosenRef.current[20] = r)}
              onClick={() => {
                getFile("react-scss", 20);
              }}
            >
              <FaAngleRight />
              react-scss
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Folder;
