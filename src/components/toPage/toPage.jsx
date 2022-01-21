import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styles from "./toPage.module.scss";
const ToPage = ({ pageName, anotherPage, setArrow }) => {
  const navigate = useNavigate();
  const nextRef = useRef();
  const goAnotherPage = () => {
    anotherPage(pageName);
  };
  useEffect(() => {
    setArrow(nextRef);
  });
  return (
    <>
      <ReactTooltip id="goTo" place="left" type="error" effect="solid">
        Go to {pageName}
      </ReactTooltip>
      <div
        className={styles.area}
        ref={nextRef}
        data-tip
        data-for="goTo"
        onClick={() => navigate(`/${pageName}`)}
      >
        <div className={styles.test}>
          <div className={styles.next}></div>
        </div>
      </div>
    </>
  );
};

export default ToPage;
