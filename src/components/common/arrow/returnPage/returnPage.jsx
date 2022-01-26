import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styles from "./returnPage.module.scss";
import { useWindowSize } from "@react-hook/window-size/";
const ReturnPage = ({ backLocation, location, setBackLocation }) => {
  const navigate = useNavigate();
  const returnRef = useRef();
  const [newLoaction, setNewLocation] = useState();
  // eslint-disable-next-line no-unused-vars
  const [widthD, heightD] = useWindowSize();
  const [returnPage, setReturnPage] = useState(true);
  const [forTooltip, setForTooltip] = useState();
  useEffect(() => {
    if (widthD < 924) {
      setReturnPage(false);
    }
    if (widthD >= 924) {
      setReturnPage(true);
    }
  }, [location, setReturnPage, widthD]);

  useEffect(() => {
    if (widthD >= 924) {
      returnRef.current.style.transform = "translateX(-200px)";
      setTimeout(() => {
        returnRef.current.style.transform = "translateX(0)";
      }, 1600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  useEffect(() => {
    if (backLocation === "about") {
      setNewLocation("");
    } else {
      setNewLocation(backLocation);
    }
  }, [backLocation]);
  useEffect(() => {
    if (backLocation) {
      getLocation(backLocation);
    }
  }, [backLocation]);
  const getLocation = (backLocation) => {
    if (backLocation.includes("portfolio/")) {
      setForTooltip(backLocation.replace("portfolio/", ""));
    } else {
      setForTooltip(backLocation);
    }
  };
  return (
    <>
      {returnPage && (
        <>
          <ReactTooltip id="returnTo" place="right" type="error" effect="solid">
            Go to {forTooltip}
          </ReactTooltip>
          <div
            className={styles.area}
            ref={returnRef}
            data-tip
            data-for="returnTo"
            onClick={() => navigate(`/${newLoaction}`)}
          >
            <div className={styles.test}>
              <div className={styles.next}></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ReturnPage;
