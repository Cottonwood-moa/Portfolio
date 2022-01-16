import React, { useEffect, useState } from "react";
import styles from "./portfolio.module.scss";
import Nav from "../nav/nav";
import Loading from "../loading/loading";
import { Container } from "react-bootstrap";
const Portfolio = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />

      {loading || <Nav />}
      {loading || (
        <Container>
          <div className={styles.portfolioContainer}>Portfolio</div>
        </Container>
      )}
    </>
  );
};

export default Portfolio;
