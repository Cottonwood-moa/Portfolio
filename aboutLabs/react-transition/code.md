```js
import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "./test.scss";

function Test() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: "2rem" }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="lg">
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit // unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>Animated alert message</Alert.Heading>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <Button onClick={() => setShowMessage(false)}>Close</Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

export default Test;
```

```css
.alert {
  transition: 0.3s;
}
.alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
.alert-enter-active {
  opacity: 1;
  transform: scale(1);
}
.alert-exit {
}
.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
}
```
