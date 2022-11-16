import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../../context/app/AppContext";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.scss";

import bubble1 from "../../assets/bubbles/1.png";
import bubble2 from "../../assets/bubbles/2.png";
import bubble3 from "../../assets/bubbles/3.png";
import bubble4 from "../../assets/bubbles/4.png";
import bubble5 from "../../assets/bubbles/5.png";
import bubble6 from "../../assets/bubbles/6.png";
import bubble7 from "../../assets/bubbles/7.png";

const Layout = (props) => {
  const appContext = useContext(AppContext);
  const loc = useLocation();

  const { isNavbar } = appContext;

  return (
    <>
      <div className={styles.Layout}>
        <div className={styles.Layout__bubbles}>
          {/* <img className={styles.Layout__bubbles__1} src={bubble1} alt='' />
          <img className={styles.Layout__bubbles__2} src={bubble2} alt='' />
          <img className={styles.Layout__bubbles__3} src={bubble3} alt='' />
          <img className={styles.Layout__bubbles__4} src={bubble4} alt='' />
          <img className={styles.Layout__bubbles__5} src={bubble5} alt='' />
          <img className={styles.Layout__bubbles__6} src={bubble6} alt='' /> */}
          {/* <img className={styles.Layout__bubbles__7} src={bubble7} alt='' /> */}
        </div>
        <div className={styles.Layout__bod}>
          {isNavbar && <Navbar />}
          <div className={styles.Layout__bod__mob}>
            {loc?.pathname !== "/home" && <Navbar />}
          </div>
          <div className={styles.Layout__body}>{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
