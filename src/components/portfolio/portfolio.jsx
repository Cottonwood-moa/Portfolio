import React, { useEffect, useRef, useState } from "react";
// REACT ROUTER
import { Link, useLocation } from "react-router-dom";
// CSS
import styles from "./portfolio.module.scss";
import { Container } from "react-bootstrap";
// PLUG IN
// COMPONENTS
import PageLoadBar from "../pageLoadBar/pageLoadBar";
import Card from "./card/card";
// IMAGE
// import cardMaker from "../common/images/cardmaker.png";
// import movie from "../common/images/movie.png";
// import beer from "../common/images/beer.png";
// import foodREC from "../common/images/foodREC.png";
// import moneygame from "../common/images/moneygame.png";
// import loverface from "../common/images/loverface.png";
// import charactertest from "../common/images/charactertest.png";
// import starbucks from "../common/images/starbucks.png";
// import lifemarker from "../common/images/lifemarker.png";
// import portfolio from "../common/images/portfolio.png";
// import nasa from "../common/images/nasa.png";
// import coinpaprika from "../common/images/coinpaprika.png";
// import framerMotion from "../common/images/framerMotion.png";
// import modu from "../common/images/modu.png";
// import market from "../common/images/market.png";
const Portfolio = ({ setNestLoading }) => {
  // useLocation
  const location = useLocation();
  // getYear
  const now = new Date();
  const year = now.getFullYear();
  // useState
  const [progress, setProgress] = useState(false);
  // useRef
  const pageMoveRef = useRef();
  const portfolioContainerRef = useRef();
  // useEffect
  useEffect(() => {
    if (!location.pathname.includes("portfolio")) {
      anotherPage();
    }
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // function
  const anotherPage = () => {
    window.scrollTo(0, 0);
    setProgress(true);
    pageMoveRef.current.style.transition = "0.4s 1.2s";
    pageMoveRef.current.style.opacity = "0";
    pageMoveRef.current.style.transform = "translateY(-20px)";
  };
  return (
    <>
      <div className={styles.portfolioContainer} ref={portfolioContainerRef}>
        {progress && <PageLoadBar />}
        <Container ref={pageMoveRef} className={styles.bootContainer}>
          <div className={styles.container}>
            <h1 className={styles.title}>????AIIP ?????? ????????????</h1>
            <span className={styles.subTitle}>
              ??? ??? ?????? ?????? ?????? ?????? ?????? ???????????? ???????????? ????????? ?????????
              ???????????? ?????????????????????. <br />
              ?????? ???????????? ?????? ????????? ?????? ?????? ????????? ????????? ???????????????
              ????????? ???????????? ????????? ?????? ????????? ????????? ??????????????? ?????????
              ??????????????? ???????????? ?????? ?????????????????????.
            </span>
            <div className={styles.cardWrap}>
              <Link to="SA-826">
                <Card
                  title={"SA-826"}
                  thumbnail={"?????? ?????? ?????? ?????? ??????"}
                  tags={["SA-826"]}
                />
              </Link>
              <Link to="SA-813">
                <Card
                  title={"SA-813"}
                  thumbnail={"?????????????????? ?????? ??????"}
                  tags={["SA-813"]}
                />
              </Link>
              <Link to="SA-803">
                <Card
                  title={"SA-803"}
                  thumbnail={
                    "Wrangler - ?????? ?????? ????????? - filters.filterOption??? ??????????????? ?????? ????????? ?????????????????? ?????? ??????"
                  }
                  tags={["SA-803"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-789">
                <Card
                  title={"SA-789"}
                  thumbnail={"????????? > ?????? ?????? ????????? ????????? ?????????"}
                  tags={["SA-789"]}
                />
              </Link>
              <Link to="SA-788">
                <Card
                  title={"SA-788"}
                  thumbnail={"????????? > limit ?????? ?????? ??????"}
                  tags={["SA-788"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-768">
                <Card
                  title={"SA-768"}
                  thumbnail={"?????? ?????? ??????"}
                  tags={["SA-768"]}
                />
              </Link>
              <Link to="SA-765">
                <Card
                  title={"SA-765"}
                  thumbnail={"?????????????????? hover?????? ????????? ????????? ?????????"}
                  tags={["SA-765"]}
                />
              </Link>
              <Link to="SA-763">
                <Card
                  title={"SA-763"}
                  thumbnail={"???????????? ?????????????????? Correlation ??? ?????? ??????"}
                  tags={["SA-763"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-750">
                <Card
                  title={"SA-750"}
                  thumbnail={"???????????? ???????????? ?????????????????? ????????? ?????????"}
                  tags={["SA-750"]}
                />
              </Link>
              <Link to="SA-749">
                <Card
                  title={"SA-749"}
                  thumbnail={"??????????????? ???????????? ??????"}
                  tags={["SA-749"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-736">
                <Card
                  title={"SA-736"}
                  thumbnail={"??? ?????? ?????? ?????????"}
                  tags={["SA-736"]}
                />
              </Link>
              <Link to="SA-735">
                <Card
                  title={"SA-735"}
                  thumbnail={"????????? ???????????? ???????????? ???????????? ???????????? ??????"}
                  tags={["SA-735"]}
                />
              </Link>
              <Link to="SA-721">
                <Card
                  title={"SA-721"}
                  thumbnail={
                    "???????????? ?????? > ?????? ?????? ???????????? ????????? ??? ?????? ????????? ?????? ??????????????? ?????? ????????? ????????? ??????"
                  }
                  tags={["SA-721"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-706">
                <Card
                  title={"SA-706"}
                  thumbnail={
                    "AutoML ???????????? ??????????????? ??????????????? ?????? ?????????"
                  }
                  tags={["SA-706"]}
                />
              </Link>
              <Link to="SA-653">
                <Card
                  title={"SA-653"}
                  thumbnail={"api ??? ?????? select box ?????? ?????? ??????"}
                  tags={["SA-653"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-608">
                <Card
                  title={"SA-608"}
                  thumbnail={"?????? ?????? ?????? ?????? ?????? ??????"}
                  tags={["SA-608"]}
                />
              </Link>
              <Link to="SA-603">
                <Card
                  title={"SA-603"}
                  thumbnail={"??????????????? ????????? ?????? ???????????? ?????? ?????? ??????"}
                  tags={["SA-603"]}
                />
              </Link>
              <Link to="SA-595">
                <Card
                  title={"SA-595"}
                  thumbnail={"manualItem plot?????? ?????? ????????????"}
                  tags={["SA-595"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-594">
                <Card
                  title={"SA-594"}
                  thumbnail={"????????? ?????? ?????? ????????????"}
                  tags={["SA-594"]}
                />
              </Link>
              <Link to="SA-574">
                <Card
                  title={"SA-574"}
                  thumbnail={
                    "???????????? ?????? ????????? ??????????????? ????????? ?????? ?????? ?????? ????????????"
                  }
                  tags={["SA-574"]}
                />
              </Link>
            </div>
          </div>
          <div className={styles.copyright}>
            Copyright???{year} by Cottonwood(Geonwoo Park).
          </div>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;

// import React, { useEffect, useRef, useState } from "react";
// // REACT ROUTER
// import { Link, useLocation } from "react-router-dom";
// // CSS
// import styles from "./portfolio.module.scss";
// import { Container } from "react-bootstrap";
// // PLUG IN
// // COMPONENTS
// import PageLoadBar from "../pageLoadBar/pageLoadBar";
// import Card from "./card/card";
// // IMAGE
// import cardMaker from "../common/images/cardmaker.png";
// import movie from "../common/images/movie.png";
// import beer from "../common/images/beer.png";
// import foodREC from "../common/images/foodREC.png";
// import moneygame from "../common/images/moneygame.png";
// import loverface from "../common/images/loverface.png";
// import charactertest from "../common/images/charactertest.png";
// import starbucks from "../common/images/starbucks.png";
// import lifemarker from "../common/images/lifemarker.png";
// import portfolio from "../common/images/portfolio.png";
// import nasa from "../common/images/nasa.png";
// import coinpaprika from "../common/images/coinpaprika.png";
// import framerMotion from "../common/images/framerMotion.png";
// import modu from "../common/images/modu.png";
// import market from "../common/images/market.png";
// const Portfolio = ({ setNestLoading }) => {
//   // useLocation
//   const location = useLocation();
//   // getYear
//   const now = new Date();
//   const year = now.getFullYear();
//   // useState
//   const [progress, setProgress] = useState(false);
//   // useRef
//   const pageMoveRef = useRef();
//   const portfolioContainerRef = useRef();
//   // useEffect
//   useEffect(() => {
//     if (!location.pathname.includes("portfolio")) {
//       anotherPage();
//     }
//   }, [location.pathname]);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   // function
//   const anotherPage = () => {
//     window.scrollTo(0, 0);
//     setProgress(true);
//     pageMoveRef.current.style.transition = "0.4s 1.2s";
//     pageMoveRef.current.style.opacity = "0";
//     pageMoveRef.current.style.transform = "translateY(-20px)";
//   };
//   return (
//     <>
//       <div className={styles.portfolioContainer} ref={portfolioContainerRef}>
//         {progress && <PageLoadBar />}
//         <Container ref={pageMoveRef} className={styles.bootContainer}>
//           <div className={styles.container}>
//             <h1 className={styles.title}>web developer portfolio</h1>
//             <span className={styles.subTitle}>
//               From Web Components and UI/UX animations to Javascript, Vue.JS and
//               React.JS. Check out my latest web software development portfolio
//               projects.
//             </span>
//             <div className={styles.cardWrap}>
//               <Link to="modu">
//                 <Card
//                   title={"modu"}
//                   thumbnail={modu}
//                   tags={[
//                     "WebApp",
//                     "Next.js",
//                     "Typescript",
//                     "Framer-Motion",
//                     "Apex-Chart",
//                     "Toast UI editor",
//                     "prisma",
//                     "planetScale",
//                     "recoil",
//                     "tailwind CSS",
//                   ]}
//                 />
//               </Link>
//               <Link to="market">
//                 <Card
//                   title={"market"}
//                   thumbnail={market}
//                   tags={[
//                     "WebApp",
//                     "Next.js",
//                     "planet scale",
//                     "ApexChart",
//                     "Recoil",
//                     "prisma",
//                     "tailwind CSS",
//                   ]}
//                 />
//               </Link>
//             </div>
//             <div className={styles.cardWrap}>
//               <Link to="framerMotion">
//                 <Card
//                   title={"framerMotion"}
//                   thumbnail={framerMotion}
//                   tags={["WebApp", "React.js", "Typescript", "Framer-Motion"]}
//                 />
//               </Link>
//               <Link to="coinpaprika">
//                 <Card
//                   title={"coinpaprika"}
//                   thumbnail={coinpaprika}
//                   tags={[
//                     "WebApp",
//                     "React.js",
//                     "Typescript",
//                     "ApexChart",
//                     "Recoil",
//                   ]}
//                 />
//               </Link>
//               <Link to="nasa">
//                 <Card
//                   title={"NASA APP"}
//                   thumbnail={nasa}
//                   tags={["WebApp", "React.js", "Next.js", "SCSS"]}
//                 />
//               </Link>
//             </div>
//             <div className={styles.cardWrap}>
//               <Link to="webPortfolio">
//                 <Card
//                   title={"Web Portfolio"}
//                   thumbnail={portfolio}
//                   tags={["WebApp", "React.js", "React-Router", "SCSS"]}
//                 />
//               </Link>
//               <Link to="CardMaker">
//                 <Card
//                   title={"CardMaker"}
//                   thumbnail={cardMaker}
//                   tags={[
//                     "WebApp",
//                     "React.js",
//                     "React-Router",
//                     "FireBase",
//                     "PostCss",
//                   ]}
//                 />
//               </Link>
//             </div>
//             <div className={styles.cardWrap}>
//               <Link to="imdbMovieApp">
//                 <Card
//                   title={"imdbMovieApp"}
//                   thumbnail={movie}
//                   tags={[
//                     "WebApp",
//                     "Vue.js",
//                     "VueX",
//                     "Vue Router",
//                     "Jest",
//                     "VTU",
//                     "Cypress",
//                     "Scss",
//                   ]}
//                 />
//               </Link>
//               <Link to="LifeMarker">
//                 <Card
//                   title={"LifeMarker"}
//                   thumbnail={lifemarker}
//                   tags={["WebApp", "Vue.js", "Scss", "VueX", "Vue Router"]}
//                 />
//               </Link>
//               <Link to="BEERCRAFT">
//                 <Card
//                   title={"Beercarft"}
//                   thumbnail={beer}
//                   tags={["WebApp", "JQuery", "Python", "Django"]}
//                 />
//               </Link>
//             </div>
//             <div className={styles.cardWrap}>
//               <Link to="restaurant">
//                 <Card
//                   title={"restaurant"}
//                   thumbnail={foodREC}
//                   tags={["WebApp", "Javascript", "Node.js", "Python"]}
//                 />
//               </Link>
//               <Link to="Starbucks">
//                 <Card
//                   title={"Starbucks"}
//                   thumbnail={starbucks}
//                   tags={["Clone Web", "Javascript"]}
//                 />
//               </Link>
//             </div>
//             <div className={styles.cardWrap}>
//               <Link to="moneygame">
//                 <Card
//                   title={"moneygame"}
//                   thumbnail={moneygame}
//                   tags={["WebApp", "Javascript", "JQuery"]}
//                 />
//               </Link>
//               <Link to="loverface">
//                 <Card
//                   title={"loverface"}
//                   thumbnail={loverface}
//                   tags={["WebApp", "Javascript", "JQuery"]}
//                 />
//               </Link>
//               <Link to="characterTest">
//                 <Card
//                   title={"characterTest"}
//                   thumbnail={charactertest}
//                   tags={["WebApp", "Javascript", "JQuery"]}
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className={styles.copyright}>
//             Copyright???{year} by Cottonwood(Geonwoo Park).
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
