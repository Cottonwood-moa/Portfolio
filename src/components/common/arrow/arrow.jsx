import React, { useEffect, useState } from "react";
import ToPage from "./toPage/toPage";
import ReturnPage from "./returnPage/returnPage";
const Arrow = ({ location }) => {
  const [nextLocation, setNextLocation] = useState();
  const [backLocation, setBackLocation] = useState();
  // eslint-disable-next-line no-unused-vars
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
    "/portfolio/framerMotion": {
      next: "portfolio/coinpaprika",
      back: "portfolio/characterTest",
    },
    "/portfolio/coinpaprika": {
      next: "portfolio/nasa",
      back: "portfolio/framerMotion",
    },
    "/portfolio/nasa": {
      next: "portfolio/webPortfolio",
      back: "portfolio/coinpaprika",
    },
    "/portfolio/webPortfolio": {
      next: "portfolio/CardMaker",
      back: "portfolio/nasa",
    },
    "/portfolio/CardMaker": {
      next: "portfolio/imdbMovieApp",
      back: "portfolio/webPortfolio",
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
      back: "portfolio/BEERCRAFT",
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
      next: "portfolio/framerMotion",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
