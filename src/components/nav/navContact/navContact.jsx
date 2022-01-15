import React from "react";
import styles from "./navContact.module.css";
const NavContact = ({ navigate, setContactInfo }) => {
  const mouseOverEvent = () => {
    setContactInfo(true);
  };
  const mouseOutEvent = () => {
    setContactInfo(false);
  };
  return (
    <>
      <div
        className={styles.navElement}
        data-aos="fade-down"
        data-aos-delay="300"
        onMouseOver={() => mouseOverEvent()}
        onMouseOut={() => mouseOutEvent()}
      >
        <div
          className={styles.navButton}
          onClick={() => {
            navigate("/contact");
          }}
        >
          <p className={styles.text}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default NavContact;
