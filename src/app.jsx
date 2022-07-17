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
                path="SA-826"
                element={<Test readMd={readMd} file={"SA-826"} />}
              ></Route>
              <Route
                path="SA-813"
                element={<Test readMd={readMd} file={"SA-813"} />}
              ></Route>
              <Route
                path="SA-803"
                element={<Test readMd={readMd} file={"SA-803"} />}
              ></Route>
              <Route
                path="SA-789"
                element={<Test readMd={readMd} file={"SA-789"} />}
              ></Route>
              <Route
                path="SA-788"
                element={<Test readMd={readMd} file={"SA-788"} />}
              ></Route>
              <Route
                path="SA-768"
                element={<Test readMd={readMd} file={"SA-768"} />}
              ></Route>
              <Route
                path="SA-765"
                element={<Test readMd={readMd} file={"SA-765"} />}
              ></Route>
              <Route
                path="SA-763"
                element={<Test readMd={readMd} file={"SA-763"} />}
              ></Route>
              <Route
                path="SA-750"
                element={<Test readMd={readMd} file={"SA-750"} />}
              ></Route>
              <Route
                path="SA-749"
                element={<Test readMd={readMd} file={"SA-749"} />}
              ></Route>
              <Route
                path="SA-736"
                element={<Test readMd={readMd} file={"SA-736"} />}
              ></Route>
              <Route
                path="SA-735"
                element={<Test readMd={readMd} file={"SA-735"} />}
              ></Route>
              <Route
                path="SA-721"
                element={<Test readMd={readMd} file={"SA-721"} />}
              ></Route>
              <Route
                path="SA-706"
                element={<Test readMd={readMd} file={"SA-706"} />}
              ></Route>
              <Route
                path="SA-653"
                element={<Test readMd={readMd} file={"SA-653"} />}
              ></Route>
              <Route
                path="SA-608"
                element={<Test readMd={readMd} file={"SA-608"} />}
              ></Route>
              <Route
                path="SA-603"
                element={<Test readMd={readMd} file={"SA-603"} />}
              ></Route>
              <Route
                path="SA-595"
                element={<Test readMd={readMd} file={"SA-595"} />}
              ></Route>
              <Route
                path="SA-594"
                element={<Test readMd={readMd} file={"SA-594"} />}
              ></Route>
              <Route
                path="SA-574"
                element={<Test readMd={readMd} file={"SA-574"} />}
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
