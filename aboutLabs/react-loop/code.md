```js
import React from "react";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div className={styles.container}>
        {Array.from(Array(5), (e, i) => {
          return (
            <div key={i} className={styles.box}>
              {i}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
```
