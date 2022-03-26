import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.scss";
import { FaUser, FaEnvelopeSquare, FaCommentDots } from "react-icons/fa";
import { Container, Form } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import { useLocation, useNavigate } from "react-router-dom";
import PageLoadBar from "../pageLoadBar/pageLoadBar";

const Contact = ({ submitEmail, loading }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const labelRef = useRef();
  const contactRef = useRef();
  const location = useLocation();
  const [sendLoading, setSendLoading] = useState(false);
  const [onName, setOnName] = useState(true);
  const [onEmail, setOnEmail] = useState(false);
  const [onMessage, setOnMessage] = useState(false);
  const [progress, setProgress] = useState(false);
  const [email, setEmail] = useState({
    name: null,
    message: null,
    email: null,
  });
  const pageMoveRefs = useRef([]);
  const labelUp = () => {
    labelRef.current.style.width = "0";
  };
  const labelDown = (e) => {
    if (!e.currentTarget.value) {
      labelRef.current.style.width = "20ch";
    }
  };
  const update = (e) => {
    setEmail({ ...email, [e.currentTarget.name]: e.currentTarget.value });
  };
  // Service 폴더 -> email 제출 함수
  const submit = () => {
    submitEmail.submit(email);
    setSendLoading(true);
    setOnName(true);
    setOnEmail(false);
    setOnMessage(false);
    setEmail({
      name: null,
      message: null,
      email: null,
    });
    setTimeout(() => {
      setSendLoading(false);
    }, 2500);
  };
  // 이름 유효성 검사
  const nameValidation = () => {
    if (!email.name) {
      nameRef.current.style.borderBottom = "1px solid hotpink";
      setTimeout(() => {
        nameRef.current.style.borderBottom = "1px solid white";
      }, 800);
    } else {
      setOnName(false);
      setOnEmail(true);
    }
  };
  // 이메일 유효성 검사
  const emailValidation = () => {
    const exptext =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (exptext.test(email.email) === false) {
      emailRef.current.style.borderBottom = "1px solid hotpink";
      setTimeout(() => {
        emailRef.current.style.borderBottom = "1px solid white";
      }, 800);
      return false;
    } else {
      setOnEmail(false);
      setOnMessage(true);
    }
  };
  // 다음 버튼
  const next = () => {
    if (onName) {
      nameValidation();
    }
    if (onEmail) {
      emailValidation();
    }
  };

  const anotherPage = (pageName) => {
    setProgress(true);
    // eslint-disable-next-line array-callback-return
    pageMoveRefs.current.map((item) => {
      item.style.transform = "translateY(-10vh)";
      item.style.opacity = "0";
    });
  };
  useEffect(() => {
    if (location.pathname !== "/contact") {
      anotherPage();
    }
  }, [location.pathname]);
  return (
    <div className={styles.forRouteTransition}>
      {progress && <PageLoadBar />}
      {sendLoading && <div className={styles.sending}></div>}
      <Container>
        <div className={styles.contactContainer} ref={contactRef}>
          <div
            className={`${styles.contactDes} mb-3`}
            ref={(e) => (pageMoveRefs.current[0] = e)}
          >
            <div className={styles.title}>Get in touch</div>
            <div className={styles.des}>
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi,
            </div>
            <div className={styles.des}>
              fill up the awesome form below or send an email to
              geon0529@gmail.com and ~let's talk.
            </div>
          </div>
          <div
            className={styles.userInfo}
            ref={(e) => (pageMoveRefs.current[1] = e)}
          >
            <span></span>
            <span className={styles.user}>
              <FaUser className={styles.icon} />
              &nbsp;
              {email.name ? email.name : "name"}
            </span>
            <span className={styles.user}>
              <FaEnvelopeSquare className={styles.icon} />
              &nbsp;
              {email.email ? email.email : "email"}
            </span>
          </div>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={styles.formContent}
            ref={(e) => (pageMoveRefs.current[2] = e)}
          >
            {onName && (
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.label} ref={labelRef}>
                  Fill with your name
                </Form.Label>
                <div className={styles.formIcon}>
                  <FaUser className={styles.icon} />
                  <Form.Control
                    type="text"
                    className={styles.email}
                    ref={nameRef}
                    autoComplet
                    e="off"
                    name="name"
                    maxLength="20"
                    onFocus={labelUp}
                    onBlur={labelDown}
                    onChange={update}
                  />
                </div>
                <Form.Text className={`${styles.formText} text-muted`}>
                  We'll never share your email with anyone else.
                </Form.Text>
                <div className={styles.nextButton} onClick={next}>
                  next
                </div>
              </Form.Group>
            )}
            {onEmail && (
              <Form.Group className={` mb-3`} controlId="formBasicEmail">
                <Form.Label className={styles.label} ref={labelRef}>
                  Email address
                </Form.Label>
                <div className={styles.formIcon}>
                  <FaEnvelopeSquare className={styles.icon} />
                  <Form.Control
                    type="email"
                    className={styles.email}
                    autoComplete="off"
                    ref={emailRef}
                    name="email"
                    maxLength="20"
                    onFocus={labelUp}
                    onBlur={labelDown}
                    onChange={update}
                  />
                </div>
                <Form.Text className={`${styles.formText} text-muted`}>
                  We'll never share your email with anyone else.
                </Form.Text>
                <div className={styles.nextButton} onClick={next}>
                  next
                </div>
              </Form.Group>
            )}
            {onMessage && (
              <Form.Group className="mb-3">
                <Form.Label className={styles.label} ref={labelRef}>
                  Message
                </Form.Label>
                <div className={styles.formIcon}>
                  <FaCommentDots className={styles.icon} />
                  <Form.Control
                    type="text"
                    className={styles.email}
                    autoComplete="off"
                    ref={emailRef}
                    name="message"
                    onFocus={labelUp}
                    onBlur={labelDown}
                    onChange={update}
                  />
                </div>
                <Form.Text className={`${styles.formText} text-muted`}>
                  We'll never share your email with anyone else.
                </Form.Text>
                <div className={styles.nextButton} onClick={submit}>
                  send
                </div>
              </Form.Group>
            )}
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
