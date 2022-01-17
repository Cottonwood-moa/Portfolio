import React, { useEffect, useRef, useState } from "react";
import Nav from "../nav/nav";
import styles from "./intro.module.scss";
import Loading from "../loading/loading";
import Tag from "../common/tag/tag";
import { Container } from "react-bootstrap";

const Intro = (props) => {
  const now = new Date();
  const year = now.getFullYear();
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />
      {loading || <Nav />}
      {loading || (
        <div className={styles.introContainer}>
          <Container>
            <div className={styles.main}>
              <div className={styles.title}>
                <div className={styles.textElement1}>A</div>
                <div className={styles.textElement2}>B</div>
                <div className={styles.textElement3}>O</div>
                <div className={styles.textElement4}>U</div>
                <div className={styles.textElement5}>T&nbsp;</div>
                <div className={styles.textElement6}>M</div>
                <div className={styles.textElement7}>E</div>
              </div>
              <div className={styles.image}></div>
              <div className={styles.info}>
                <div>
                  <h1>Hello, my name is Geonwoo Park.</h1>
                  <div>
                    I am front-end web developer and UI/UX javascript
                    specialist.
                  </div>
                  <div>
                    Check out my articles, React and React Native UI components
                    at the <span className={styles.link}>code laboratory</span>.
                  </div>
                  <div>
                    Feel free to take a look at my latest projects on the web
                    <span className={styles.link}>portfolio page</span>.
                  </div>
                  <div>Copyrightⓒ{year} by Cottonwood(Geonwoo Park).</div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Intro;
