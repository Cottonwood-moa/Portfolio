import React from "react";
import styles from "./navContact.module.scss";
const NavContact = ({ navigate, setContactInfo, navRef, infoRef, setOpen }) => {
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
        onMouseOver={() => mouseOverEvent()}
        onMouseOut={() => mouseOutEvent()}
      >
        <div
          className={styles.navButton}
          onClick={() => {
            navRef.current.style.transform = "translateX(-100vw)";
            infoRef.current.style.transform = "translateX(100vw)";
            setOpen(false);
            navigate("/contact");
          }}
        >
          <p className={`${styles.text} `}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default NavContact;
