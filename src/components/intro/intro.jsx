/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import Nav from "../nav/nav";
import styles from "./intro.module.scss";
import Loading from "../loading/loading";
import { Container } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";

const Intro = (props) => {
  const now = new Date();
  const year = now.getFullYear();
  const navigate = useNavigate();
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

              <div className={styles.follows}>
                <ReactTooltip id="codepenTip" type="error" effect="float">
                  Codepen
                </ReactTooltip>
                <a
                  href="https://codepen.io/Cottonwood"
                  data-tip
                  data-for="codepenTip"
                  className={`${styles.follow} ${styles.codepen}`}
                ></a>
                <ReactTooltip id="githubTip" type="error" effect="float">
                  Github
                </ReactTooltip>
                <a
                  href="https://github.com/Cottonwood-moa"
                  data-tip
                  data-for="githubTip"
                  className={`${styles.follow} ${styles.github}`}
                ></a>
                <div className={styles.image}></div>
                <ReactTooltip id="blogTip" type="error" effect="float">
                  Blog
                </ReactTooltip>
                <a
                  href="https://cottonwood-moa.tistory.com/"
                  data-tip
                  data-for="blogTip"
                  className={`${styles.follow} ${styles.techBlog}`}
                ></a>
                <ReactTooltip id="phoneTip" type="error" effect="float">
                  +82-10-2831-6735
                </ReactTooltip>
                <div
                  data-tip
                  data-for="phoneTip"
                  className={`${styles.follow} ${styles.phone}`}
                ></div>
              </div>
              <div className={styles.info}>
                <h1>Hello, my name is Geonwoo Park.</h1>
                <div>
                  I am front-end web developer and UI/UX javascript specialist.
                </div>
                <div>
                  Check out my articles, React and React Native UI components at
                  the
                  <ReactTooltip id="labsTip" type="error" effect="float">
                    Go to Code laboratory
                  </ReactTooltip>
                  <span
                    className={styles.link}
                    data-tip
                    data-for="labsTip"
                    onClick={() => {
                      navigate("/labs");
                    }}
                  >
                    code laboratory
                  </span>
                  .
                </div>
                <div>
                  Feel free to take a look at my latest projects on the web
                  <ReactTooltip id="portfolioTip" type="error" effect="float">
                    Go to Portfolio
                  </ReactTooltip>
                  <span
                    className={styles.link}
                    data-tip
                    data-for="portfolioTip"
                    onClick={() => {
                      navigate("/portfolio");
                    }}
                  >
                    portfolio page
                  </span>
                  .
                </div>
                <div className={styles.copyright}>
                  Copyrightⓒ{year} by Cottonwood(Geonwoo Park).
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
