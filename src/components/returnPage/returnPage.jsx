import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styles from "./returnPage.module.scss";
const ReturnPage = ({ pageName, anotherPage, setArrow }) => {
  const navigate = useNavigate();
  const returnRef = useRef();
  const goAnotherPage = (pageName) => {
    anotherPage(pageName);
  };
  useEffect(() => {
    setArrow(returnRef);
  });
  return (
    <>
      <ReactTooltip id="returnTo" place="right" type="error" effect="solid">
        Go to {pageName === "/" ? "main" : { pageName }}
      </ReactTooltip>
      <div
        className={styles.area}
        ref={returnRef}
        data-tip
        data-for="returnTo"
        onClick={() => navigate(pageName)}
      >
        <div className={styles.test}>
          <div className={styles.next}></div>
        </div>
      </div>
    </>
  );
};

export default ReturnPage;
