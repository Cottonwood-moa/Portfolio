APP

```js
import React from "react";
import styles from "./App.module.css";
import LinkBtn from "./components/linkBtn/linkBtn";
function App() {
  return (
    <>
      <div className={styles.container}>
        <LinkBtn
          size={48}
          text={"button"}
          backgroundColor={"#444"}
          fontColor={"white"}
        />
      </div>
    </>
  );
}

export default App;
```

Btn

```js
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./linkBtn.module.css";
const LinkBtn = ({ size, text, backgroundColor, fontColor }) => {
  const linkRef = useRef();
  const [forDom, setForDom] = useState(false);
  useEffect(() => {
    if (forDom) {
      linkRef.current.style.fontSize = `${size}px`;
      linkRef.current.style.backgroundColor = `${backgroundColor}`;
      linkRef.current.style.color = `${fontColor}`;
    }
    setForDom(true);
  }, [backgroundColor, fontColor, forDom, size]);
  return (
    <>
      <div className={styles.link} ref={linkRef}>
        {text}
      </div>
    </>
  );
};

export default LinkBtn;
```

CSS

```css
.link {
  display: inline-block;
  color: white;
  background-color: rgb(92, 92, 92);
  padding: 1px 20px 1px 20px;
  font-size: 24px;
  position: relative;
  cursor: pointer;
}
.link::before {
  transform: scaleX(0);
  transform-origin: right;
}

.link:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.link::before {
  content: " ";
  width: 100%;
  height: 50%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  background: white;
  opacity: 0.1;
  transition: transform 0.4s cubic-bezier(0.85, 0, 0.15, 1);
  cursor: pointer;
}

.link::after {
  transform: scaleX(0);
  transform-origin: left;
  cursor: pointer;
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: right;
}

.link::after {
  content: " ";
  width: 100%;
  height: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: white;
  opacity: 0.1;
  transition: transform 0.4s cubic-bezier(0.85, 0, 0.15, 1);
  transition-delay: 0.1s;
}
```
