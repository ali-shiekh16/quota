import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CRY from "../../assets/CRY.png";
import AppContext from "../../context/app/AppContext";
import styles from "./Governance.module.scss";

import Countdown from "react-countdown";

const deadline = new Date("12/11/2022"); // Moment is also OK

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  // if (completed) {
  //   // Render a completed state
  //   return <Completionist />;
  // } else {
  //   // Render a countdown
  return (
    <>
      <span className={styles.Governance__body__counter}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </span>
      <span className={styles.Governance__body__counterlabel}>
        <span>days</span>
        <span>hours</span>
        <span>minutes</span>
        <span>seconds</span>
      </span>
    </>
  );
  // }
};
const Governance = () => {
  const navigate = useNavigate();

  const appContext = useContext(AppContext);

  const { setNavbarValue } = appContext;

  const { t } = useTranslation();
  useEffect(() => {
    setNavbarValue(false);
  }, []);

  const onFinish = () => {
    console.log("finished!");
  };

  const onChange = (val) => {
    if (68.5 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };

  return (
    <div className={styles.Governance}>
      <div
        className={styles.Governance__head}
        onClick={() => navigate("/home")}
      >
        <ArrowLeftOutlined />
        <span>Back</span>
      </div>
      <div className={styles.Governance__body}>
        <div className={styles.Governance__body__top}>
          <div className={styles.Governance__body__top__cry}>
            <div className={styles.Governance__body__top__cry__img}>
              <img src={CRY} alt="123" />
            </div>
            <span>{t("governance")}</span>
          </div>
          <div className={styles.Governance__body__top__count}>
            <span>COUNTDOWN</span>
          </div>
        </div>
        <div className={styles.Governance__body__mid}>
          <Row>
            <Col>
              <Countdown date={deadline} renderer={renderer} />
            </Col>
          </Row>
        </div>
        <div className={styles.Governance__body__bottom}>
          <span>COMING SOON</span>
          <h2>DEC, 11th 2022</h2>
        </div>
      </div>
    </div>
  );
};

Governance.propTypes = {};

Governance.defaultProps = {};

export default Governance;
