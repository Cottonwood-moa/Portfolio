import React, { useRef, useState } from "react";
import styles from "./contact.module.scss";
import { FaUser, FaEnvelopeSquare, FaCommentDots } from "react-icons/fa";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Contact = ({ submitEmail, loading }) => {
  const emailRef = useRef();
  const nameRef = useRef();
  const labelRef = useRef();
  const contactRef = useRef();
  const [sendLoading, setSendLoading] = useState(false);
  const [onName, setOnName] = useState(true);
  const [onEmail, setOnEmail] = useState(false);
  const [onMessage, setOnMessage] = useState(false);
  const [email, setEmail] = useState({
    name: null,
    message: null,
    email: null,
  });
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
      console.log("?");
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
  // navigate animation
  const navigate = new useNavigate();
  return (
    <>
      {sendLoading && <div className={styles.sending}></div>}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
      {loading || (
        <Container>
          <div className={styles.contactContainer} ref={contactRef}>
            <div className={`${styles.contactDes} mb-3`}>
              <h1>Get in touch</h1>
              <div>
                If you wanna get in touch, talk to me about a project
                collaboration or just say hi,
              </div>
              <div>
                fill up the awesome form below or send an email to
                geon0529@gmail.com and ~let's talk.
              </div>
            </div>
            <div className={styles.userInfo}>
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
                      autoComplete="off"
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
      )}
    </>
  );
};

export default Contact;
