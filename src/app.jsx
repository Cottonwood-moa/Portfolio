import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

import styles from "./app.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
