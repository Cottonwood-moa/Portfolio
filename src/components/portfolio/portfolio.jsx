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
            <h1 className={styles.title}>😀AIIP 인턴 중간점검</h1>
            <span className={styles.subTitle}>
              약 한 달이 조금 넘는 시간 동안 해결했던 이슈들과 작성한 코드를
              중점으로 진행하겠습니다. <br />
              코드 리뷰보단 이슈 해결을 하기 위해 문제에 어떻게 접근했는지
              위주로 작성했고 코드에 대한 리뷰는 작성한 스크립트가 리뷰가
              필요하다고 판단되는 경우 진행하겠습니다.
            </span>
            <div className={styles.cardWrap}>
              <Link to="SA-826">
                <Card
                  title={"SA-826"}
                  thumbnail={"공지 배너 표시 위치 수정"}
                  tags={["SA-826"]}
                />
              </Link>
              <Link to="SA-813">
                <Card
                  title={"SA-813"}
                  thumbnail={"접속정보관리 기능 개발"}
                  tags={["SA-813"]}
                />
              </Link>
              <Link to="SA-803">
                <Card
                  title={"SA-803"}
                  thumbnail={
                    "Wrangler - 값에 따른 필터링 - filters.filterOption이 변경되어도 적용 버튼이 비활성화되어 있는 문제"
                  }
                  tags={["SA-803"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-789">
                <Card
                  title={"SA-789"}
                  thumbnail={"랭글러 > 값에 따른 필터링 필수값 미체크"}
                  tags={["SA-789"]}
                />
              </Link>
              <Link to="SA-788">
                <Card
                  title={"SA-788"}
                  thumbnail={"랭글러 > limit 음수 입력 가능"}
                  tags={["SA-788"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-768">
                <Card
                  title={"SA-768"}
                  thumbnail={"노드 수정 관련"}
                  tags={["SA-768"]}
                />
              </Link>
              <Link to="SA-765">
                <Card
                  title={"SA-765"}
                  thumbnail={"스케줄러에서 hover하면 리스트 전체가 움직임"}
                  tags={["SA-765"]}
                />
              </Link>
              <Link to="SA-763">
                <Card
                  title={"SA-763"}
                  thumbnail={"데이터셋 미리보기화면 Correlation 탭 기능 수정"}
                  tags={["SA-763"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-750">
                <Card
                  title={"SA-750"}
                  thumbnail={"프로젝트 히스토리 리스트화면을 만들어 주세요"}
                  tags={["SA-750"]}
                />
              </Link>
              <Link to="SA-749">
                <Card
                  title={"SA-749"}
                  thumbnail={"워크플로우 무한로딩 오류"}
                  tags={["SA-749"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-736">
                <Card
                  title={"SA-736"}
                  thumbnail={"더 보기 버튼 감추기"}
                  tags={["SA-736"]}
                />
              </Link>
              <Link to="SA-735">
                <Card
                  title={"SA-735"}
                  thumbnail={"테이블 스타일이 변경되면 동일하게 펼쳐지게 수정"}
                  tags={["SA-735"]}
                />
              </Link>
              <Link to="SA-721">
                <Card
                  title={"SA-721"}
                  thumbnail={
                    "데이터셋 추가 > 애셋 선택 화면에서 미선택 후 팝업 종료시 애셋 선택화면을 다시 호출할 방법이 없음"
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
                    "AutoML 화면에서 새로고침시 워크플로우 명칭 사라짐"
                  }
                  tags={["SA-706"]}
                />
              </Link>
              <Link to="SA-653">
                <Card
                  title={"SA-653"}
                  thumbnail={"api 키 관리 select box 목록 잘림 현상"}
                  tags={["SA-653"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-608">
                <Card
                  title={"SA-608"}
                  thumbnail={"공개 범위 설정 추가 이슈 진행"}
                  tags={["SA-608"]}
                />
              </Link>
              <Link to="SA-603">
                <Card
                  title={"SA-603"}
                  thumbnail={"워크플로우 백엔드 선택 퍼블리싱 화면 추가 작업"}
                  tags={["SA-603"]}
                />
              </Link>
              <Link to="SA-595">
                <Card
                  title={"SA-595"}
                  thumbnail={"manualItem plot수정 팝업 변경하기"}
                  tags={["SA-595"]}
                />
              </Link>
            </div>
            <div className={styles.cardWrap}>
              <Link to="SA-594">
                <Card
                  title={"SA-594"}
                  thumbnail={"구성원 등록 버튼 비활성화"}
                  tags={["SA-594"]}
                />
              </Link>
              <Link to="SA-574">
                <Card
                  title={"SA-574"}
                  thumbnail={
                    "프로젝트 선택 팝업에 워크플로우 백엔드 선택 내용 추가 퍼블리싱"
                  }
                  tags={["SA-574"]}
                />
              </Link>
            </div>
          </div>
          <div className={styles.copyright}>
            Copyrightⓒ{year} by Cottonwood(Geonwoo Park).
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
//             Copyrightⓒ{year} by Cottonwood(Geonwoo Park).
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
