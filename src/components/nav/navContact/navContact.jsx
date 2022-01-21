import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./navContact.module.scss";
const NavContact = ({ navigate, setContactInfo, navRef, infoRef, setOpen }) => {
  const mouseOverEvent = () => {
    setContactInfo(true);
  };
  const mouseOutEvent = () => {
    setContactInfo(false);
  };
  const location = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (location.pathname === "/contact") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [active, location.pathname]);
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
            navRef.current.style.transform = "translateX(-50vw)";
            infoRef.current.style.transform = "translateX(50vw)";
            setOpen(false);
            navigate("/contact");
          }}
        >
          <p className={`${styles.text} ${active && styles.active}`}>Contact</p>
        </div>
      </div>
    </>
  );
};

export default NavContact;
