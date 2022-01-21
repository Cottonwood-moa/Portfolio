import React, { useEffect, useRef, useState } from "react";
import styles from "./test.module.scss";

function Test() {
  const testRef = useRef();
  return <div className={styles.test} ref={testRef}></div>;
}

export default Test;
