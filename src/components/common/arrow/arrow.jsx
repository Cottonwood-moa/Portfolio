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
    "/portfolio/SA-826": {
      next: "portfolio/SA-813",
      back: "portfolio/SA-574",
    },
    "/portfolio/SA-813": {
      next: "portfolio/SA-803",
      back: "portfolio/SA-826",
    },
    "/portfolio/SA-803": {
      next: "portfolio/SA-789",
      back: "portfolio/SA-813",
    },
    "/portfolio/SA-789": {
      next: "portfolio/SA-788",
      back: "portfolio/SA-803",
    },
    "/portfolio/SA-788": {
      next: "portfolio/SA-768",
      back: "portfolio/SA-789",
    },
    "/portfolio/SA-768": {
      next: "portfolio/SA-765",
      back: "portfolio/SA-788",
    },
    "/portfolio/SA-765": {
      next: "portfolio/SA-763",
      back: "portfolio/SA-768",
    },
    "/portfolio/SA-763": {
      next: "portfolio/SA-750",
      back: "portfolio/SA-765",
    },
    "/portfolio/SA-750": {
      next: "portfolio/SA-749",
      back: "portfolio/SA-763",
    },
    "/portfolio/SA-749": {
      next: "portfolio/SA-736",
      back: "portfolio/SA-750",
    },
    "/portfolio/SA-736": {
      next: "portfolio/SA-735",
      back: "portfolio/SA-749",
    },
    "/portfolio/SA-735": {
      next: "portfolio/SA-721",
      back: "portfolio/SA-736",
    },
    "/portfolio/SA-721": {
      next: "portfolio/SA-706",
      back: "portfolio/SA-735",
    },
    "/portfolio/SA-706": {
      next: "portfolio/SA-653",
      back: "portfolio/SA-721",
    },
    "/portfolio/SA-653": {
      next: "portfolio/SA-608",
      back: "portfolio/SA-706",
    },
    "/portfolio/SA-608": {
      next: "portfolio/SA-603",
      back: "portfolio/SA-653",
    },
    "/portfolio/SA-603": {
      next: "portfolio/SA-595",
      back: "portfolio/SA-608",
    },
    "/portfolio/SA-595": {
      next: "portfolio/SA-594",
      back: "portfolio/SA-603",
    },
    "/portfolio/SA-594": {
      next: "portfolio/SA-574",
      back: "portfolio/SA-595",
    },
    "/portfolio/SA-574": {
      next: "portfolio/SA-826",
      back: "portfolio/SA-594",
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

// import React, { useEffect, useState } from "react";
// import ToPage from "./toPage/toPage";
// import ReturnPage from "./returnPage/returnPage";
// const Arrow = ({ location }) => {
//   const [nextLocation, setNextLocation] = useState();
//   const [backLocation, setBackLocation] = useState();
//   // eslint-disable-next-line no-unused-vars
//   const [locations, setLocations] = useState({
//     "/": {
//       next: "portfolio",
//       back: "contact",
//     },
//     "/portfolio": {
//       next: "labs",
//       back: "about",
//     },
//     "/labs": {
//       next: "contact",
//       back: "portfolio",
//     },
//     "/contact": {
//       next: "about",
//       back: "labs",
//     },
//     "/portfolio/modu": {
//       next: "portfolio/market",
//       back: "portfolio/characterTest",
//     },
//     "/portfolio/market": {
//       next: "portfolio/framerMotion",
//       back: "portfolio/modu",
//     },
//     "/portfolio/framerMotion": {
//       next: "portfolio/coinpaprika",
//       back: "portfolio/characterTest",
//     },
//     "/portfolio/coinpaprika": {
//       next: "portfolio/nasa",
//       back: "portfolio/framerMotion",
//     },
//     "/portfolio/nasa": {
//       next: "portfolio/webPortfolio",
//       back: "portfolio/coinpaprika",
//     },
//     "/portfolio/webPortfolio": {
//       next: "portfolio/CardMaker",
//       back: "portfolio/nasa",
//     },
//     "/portfolio/CardMaker": {
//       next: "portfolio/imdbMovieApp",
//       back: "portfolio/webPortfolio",
//     },
//     "/portfolio/imdbMovieApp": {
//       next: "portfolio/LifeMarker",
//       back: "portfolio/CardMaker",
//     },
//     "/portfolio/LifeMarker": {
//       next: "portfolio/BEERCRAFT",
//       back: "portfolio/imdbMovieApp",
//     },
//     "/portfolio/BEERCRAFT": {
//       next: "portfolio/restaurant",
//       back: "portfolio/LifeMarker",
//     },
//     "/portfolio/restaurant": {
//       next: "portfolio/Starbucks",
//       back: "portfolio/BEERCRAFT",
//     },
//     "/portfolio/Starbucks": {
//       next: "portfolio/moneygame",
//       back: "portfolio/restaurant",
//     },
//     "/portfolio/moneygame": {
//       next: "portfolio/loverface",
//       back: "portfolio/Starbucks",
//     },
//     "/portfolio/loverface": {
//       next: "portfolio/characterTest",
//       back: "portfolio/moneygame",
//     },
//     "/portfolio/characterTest": {
//       next: "portfolio/modu",
//       back: "portfolio/loverface",
//     },
//   });
//   // location name에 따라 전달해줄 go to "name" <- 여기 쓰일 이름 로직 필요
//   const prepare = () => {
//     setNextLocation(locations[location].next);
//     setBackLocation(locations[location].back);
//   };
//   useEffect(() => {
//     prepare();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location]);
//   return (
//     <div>
//       <ToPage
//         location={location}
//         nextLocation={nextLocation}
//         setNextLocation={setNextLocation}
//       />
//       <ReturnPage
//         location={location}
//         backLocation={backLocation}
//         setBackLocation={setBackLocation}
//       />
//     </div>
//   );
// };

// export default Arrow;
