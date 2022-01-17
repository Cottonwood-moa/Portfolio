import React, { useState } from "react";
import styles from "./contact.module.scss";
import Nav from "../nav/nav";
import Loading from "../loading/loading";
import { Container } from "react-bootstrap";
const Contact = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loading loading={loading} setLoading={setLoading} />

      {loading || <Nav />}
      {loading || (
        <Container>
          <div className={styles.contactContainer}>contact</div>
        </Container>
      )}
    </>
  );
};

export default Contact;
