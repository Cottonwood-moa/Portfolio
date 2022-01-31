import React, { useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./app.scss";
// COMPONENTS
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Service logic
const submitEmail = new SumbitEmail();
const readMd = new ReadMd();
const getGithubFile = new GetGithubFile();
function App() {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [transitionName, setTransitionName] = useState("alert");
  const [loading, setLoading] = useState(true);
  const [forNav, setforNav] = useState(true);
  const [nestLoading, setNestLoading] = useState(false);
  const navRefs = useRef([]);

  const getNavRefs = (profileRef, hamburgerRef) => {
    navRefs.current[0] = profileRef;
    navRefs.current[1] = hamburgerRef;
  };
  useEffect(() => {
    // console.log("profile:", navRefs.current[0].current);
    // console.log("hamburger:", navRefs.current[1].current);
    // console.log(["location.pathname", location.pathname]);
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
  useEffect(() => {}, [forNav]);
  return (
    <React.Fragment>
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
            <Route path="*" element={<Test />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Arrow location={location.pathname} />
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
