import React, { useState } from "react";
import styles from "./labs.module.scss";
import Nav from "../nav/nav";
import Loading from "../loading/loading";
import { Container } from "react-bootstrap";
const Labs = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />

      {loading || <Nav />}
      {loading || (
        <Container>
          <div className={styles.labsContainer}>Labs</div>
        </Container>
      )}
    </>
  );
};

export default Labs;
