```bash
$yarn add sass
```

```js
import React from "react";
import styles from "./test.module.scss";
const test = (props) => {
  return (
    <div className={styles.test}>
      <div className={styles.test2}></div>
    </div>
  );
};

export default test;
```

```scss
.test {
  width: 500px;
  height: 500px;
  background-color: orange;
  .test2 {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
}
```
