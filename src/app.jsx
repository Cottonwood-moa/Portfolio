import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Labs from "./components/labs/labs";
import Contact from "./components/contact/contact";
import SumbitEmail from "./service/email";
import Loading from "./components/loading/loading";
import Nav from "./components/nav/nav";
import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Test from "./components/test/test";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// ..
AOS.init();
const submitEmail = new SumbitEmail();
function App() {
  const location = useLocation();
  console.log("location", location);
  const [transitionName, setTransitionName] = useState("alert");
  const [loading, setLoading] = useState(true);
  return (
    <React.Fragment>
      <Loading loading={loading} setLoading={setLoading} />
      <Nav />
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={transitionName}
          timeout={1600}
        >
          <Routes location={location}>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/labs" element={<Labs />}></Route>
            <Route
              path="/contact"
              element={<Contact loading={loading} submitEmail={submitEmail} />}
            ></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
}

export default App;
