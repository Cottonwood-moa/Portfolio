import React, { useState } from "react";
import styles from "./labs.module.scss";
import { Container } from "react-bootstrap";
const Labs = ({ loading }) => {
  return (
    <div className={styles.test}>
      {loading || (
        <Container>
          <div className={styles.labsContainer}>Labs</div>
        </Container>
      )}
    </div>
  );
};

export default Labs;
