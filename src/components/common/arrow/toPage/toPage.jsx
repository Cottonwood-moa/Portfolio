import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styles from "./toPage.module.scss";
import { useWindowSize } from "@react-hook/window-size/";

const ToPage = ({ nextLocation, location, setNextLocation }) => {
  // eslint-disable-next-line no-unused-vars
  const [widthD, heightD] = useWindowSize();
  const navigate = useNavigate();
  const nextRef = useRef();
  const [newLoaction, setNewLocation] = useState();
  const [toPage, setToPage] = useState(true);
  const [forTooltip, setForTooltip] = useState();
  useEffect(() => {
    if (widthD < 924) {
      setToPage(false);
    }
    if (widthD >= 924) {
      setToPage(true);
    }
  }, [location, setToPage, widthD, nextLocation]);

  useEffect(() => {
    if (widthD >= 924) {
      nextRef.current.style.transform = "translateX(200px)";
      setTimeout(() => {
        nextRef.current.style.transform = "translateX(0)";
      }, 1600);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (nextLocation === "about") {
      setNewLocation("");
    } else {
      setNewLocation(nextLocation);
    }
  }, [nextLocation]);
  useEffect(() => {
    if (nextLocation) {
      getLocation(nextLocation);
    }
  }, [nextLocation]);
  const getLocation = (nextLocation) => {
    if (nextLocation.includes("portfolio/")) {
      setForTooltip(nextLocation.replace("portfolio/", ""));
    } else {
      setForTooltip(nextLocation);
    }
  };
  return (
    <>
      {toPage && (
        <>
          <ReactTooltip id="goTo" place="left" type="error" effect="solid">
            Go to {forTooltip}
          </ReactTooltip>

          <div
            className={styles.area}
            ref={nextRef}
            data-tip
            data-for="goTo"
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

export default ToPage;
