import React, { useEffect, useState } from "react";
import styles from "./arrow.module.scss";
import ToPage from "./toPage/toPage";
import ReturnPage from "./returnPage/returnPage";
const Arrow = ({ location }) => {
  const [nextLocation, setNextLocation] = useState();
  const [backLocation, setBackLocation] = useState();
  const [locations, setLocations] = useState({
    "/": {
      next: "portfolio",
      back: "contact",
    },
    "/portfolio": {
      next: "labs",
      back: "about",
    },
    "/labs": {
      next: "contact",
      back: "portfolio",
    },
    "/contact": {
      next: "about",
      back: "labs",
    },
    "/portfolio/CardMaker": {
      next: "portfolio/LifeMarker",
      back: "portfolio/characterTest",
    },
    "/portfolio/imdbMovieApp": {
      next: "portfolio/LifeMarker",
      back: "portfolio/CardMaker",
    },
    "/portfolio/LifeMarker": {
      next: "portfolio/BEERCRAFT",
      back: "portfolio/imdbMovieApp",
    },
    "/portfolio/BEERCRAFT": {
      next: "portfolio/restaurant",
      back: "portfolio/LifeMarker",
    },
    "/portfolio/restaurant": {
      next: "portfolio/Starbucks",
      back: "portfolio/LifeMarker",
    },
    "/portfolio/Starbucks": {
      next: "portfolio/moneygame",
      back: "portfolio/restaurant",
    },
    "/portfolio/moneygame": {
      next: "portfolio/loverface",
      back: "portfolio/Starbucks",
    },
    "/portfolio/loverface": {
      next: "portfolio/characterTest",
      back: "portfolio/moneygame",
    },
    "/portfolio/characterTest": {
      next: "portfolio/CardMaker",
      back: "portfolio/loverface",
    },
  });
  // location name에 따라 전달해줄 go to "name" <- 여기 쓰일 이름 로직 필요
  const prepare = () => {
    setNextLocation(locations[location].next);
    setBackLocation(locations[location].back);
  };
  useEffect(() => {
    prepare();
  }, [location]);
  return (
    <div>
      <ToPage
        location={location}
        nextLocation={nextLocation}
        setNextLocation={setNextLocation}
      />
      <ReturnPage
        location={location}
        backLocation={backLocation}
        setBackLocation={setBackLocation}
      />
    </div>
  );
};

export default Arrow;
