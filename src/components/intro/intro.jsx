import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import styles from "./intro.module.scss";
import Loading from "../loading/loading";
import { Container } from "react-bootstrap";
const Intro = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />
      {loading || <Nav />}
      {loading || (
        <Container>
          <div className={styles.introContainer}>intro</div>
        </Container>
      )}
    </>
  );
};

export default Intro;
