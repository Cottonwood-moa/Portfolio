import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Labs from "./components/labs/labs";
import Contact from "./components/contact/contact";
import SumbitEmail from "./service/email";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const submitEmail = new SumbitEmail();
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route
          path="/contact"
          element={<Contact submitEmail={submitEmail} />}
        ></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
