import React, { useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./app.scss";
// COMPONENTS
import NotFound from "./components/notFound/notFound";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Labs from "./components/labs/labs";
import Contact from "./components/contact/contact";
import SumbitEmail from "./service/email";
import ReadMd from "./service/readMd";
import GetGithubFile from "./service/getGithubFile";
import Loading from "./components/loading/loading";
import Test from "./components/portfolio/test/test";
import Arrow from "./components/common/arrow/arrow";
import NestedLoading from "./components/common/nestedLoading/nestedLoading";
import Nav from "./components/nav/nav";
// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
gsap.registerPlugin(ScrollTrigger);
// Service logic
const submitEmail = new SumbitEmail();
const readMd = new ReadMd();
const getGithubFile = new GetGithubFile();
function App() {
  // useLocation
  const location = useLocation();
  // useState
  // eslint-disable-next-line no-unused-vars
  const [transitionName, setTransitionName] = useState("alert");
  const [loading, setLoading] = useState(true);
  const [forNav, setforNav] = useState(true);
  const [nestLoading, setNestLoading] = useState(false);
  // useRef
  const navRefs = useRef([]);
  // function
  const getNavRefs = (profileRef, hamburgerRef) => {
    navRefs.current[0] = profileRef;
    navRefs.current[1] = hamburgerRef;
  };
  // useEffect
  useEffect(() => {
    console.log("location.pathname", location);

    if (location.pathname.includes("/portfolio/")) {
      setNestLoading(true);
    }
    navRefs.current[0].current.style.transform = "translateX(-100px)";
    navRefs.current[1].current.style.transform = "translateX(100px)";
    setTimeout(() => {
      setforNav(false);
      setforNav(true);
    }, 1600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  // content
  return (
    <React.Fragment>
      <div className="wrapper">
        <Helmet>
          <html lang="ko" />
          <title>Frontend Developer Portfolio</title>
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Frontend Developer Portfolio"
          />
          <meta property="og:title" content="Frontend Developer Portfolio" />
          <meta
            property="og:description"
            content="박건우 웹 프론트엔드 개인 포트폴리오 입니다. 
          Park GeonWoo. Personal Web Developer Portfolio. 
          웹 포트폴리오에서 웹 프로젝트와 코드를 살펴보세요. 
          Check out my articles at this Web Portfolio."
          />
          <meta property="og:image" content="/images/react.png" />
          <meta
            name="naver-site-verification"
            content="350f0c43da62fb00e061102d3495c7dc7bb30900"
          />
        </Helmet>
      </div>
      <Loading loading={loading} setLoading={setLoading} />

      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={transitionName}
          timeout={1600}
        >
          <Routes location={location}>
            <Route path="/" element={<Intro readMd={readMd} />} />
            <Route path="/portfolio" element={<Outlet />}>
              <Route
                index
                element={<Portfolio setNestLoading={setNestLoading} />}
              ></Route>
              <Route
                path="coinpaprika"
                element={<Test readMd={readMd} file={"Coinpaprika"} />}
              ></Route>
              <Route
                path="nasa"
                element={<Test readMd={readMd} file={"nasa_app"} />}
              ></Route>
              <Route
                path="webPortfolio"
                element={<Test readMd={readMd} file={"Portfolio"} />}
              ></Route>
              <Route
                path="imdbMovieApp"
                element={<Test readMd={readMd} file={"imdbMovieApp"} />}
              ></Route>
              <Route
                path="CardMaker"
                element={<Test readMd={readMd} file={"CardMaker"} />}
              ></Route>
              <Route
                path="LifeMarker"
                element={<Test readMd={readMd} file={"LifeMarker"} />}
              ></Route>
              <Route
                path="BEERCRAFT"
                element={<Test readMd={readMd} file={"BEERCRAFT"} />}
              ></Route>
              <Route
                path="restaurant"
                element={<Test readMd={readMd} file={"text-analysis-busan-"} />}
              ></Route>
              <Route
                path="Starbucks"
                element={<Test readMd={readMd} file={"Starbucks"} />}
              ></Route>
              <Route
                path="moneygame"
                element={<Test readMd={readMd} file={"moneygame"} />}
              ></Route>
              <Route
                path="loverface"
                element={<Test readMd={readMd} file={"loverface"} />}
              ></Route>
              <Route
                path="characterTest"
                element={<Test readMd={readMd} file={"characterTest"} />}
              ></Route>
            </Route>
            <Route
              path="/labs"
              element={<Labs getGithubFile={getGithubFile} />}
            />
            <Route
              path="/contact"
              element={<Contact loading={loading} submitEmail={submitEmail} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {(location.pathname === "/" ||
        location.pathname === "/contact" ||
        location.pathname === "/labs" ||
        location.pathname.includes("/portfolio")) && (
        <Arrow location={location.pathname} />
      )}
      {forNav && <Nav getNavRefs={getNavRefs} />}
      {nestLoading && (
        <NestedLoading
          nestLoading={nestLoading}
          setNestLoading={setNestLoading}
          location={location.pathname}
        />
      )}
    </React.Fragment>
  );
}

export default App;
