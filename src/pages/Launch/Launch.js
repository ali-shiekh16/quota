import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CRY from "../../assets/CRY.png";
import crytical from "../../assets/crytical.png";
import AppContext from '../../context/app/AppContext';
import styles from './Launch.module.scss';




const Launch = () => {
  const navigate = useNavigate();

  const appContext = useContext(AppContext)

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.Launch}>
      <div className={styles.Launch__head} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.Launch__body}>
        <div className={styles.Launch__body__top}>
          <div className={styles.Launch__body__top__cry}>
            <div className={styles.Launch__body__top__cry__img}>
              <img src={CRY} alt="123" />
            </div>
            <span>
              Dashboard
            </span>
          </div>
        </div>
        <div className={styles.Launch__body__mid}>
          <div className={styles.Launch__body__mid__img}>
            <img src={crytical} alt="crytical" />
          </div>
          <div className={styles.Launch__body__mid__container}>
            <span>
              COMING SOON
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

Launch.propTypes = {};

Launch.defaultProps = {};

export default Launch;
