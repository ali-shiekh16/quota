import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import aasdata from "../../../../assets/AAS_Chart.png";
import f2 from "../../../../assets/f2.png";
import ll from "../../../../assets/ll.png";
import neg from "../../../../assets/neg.png";
import pos from "../../../../assets/pos.png";
import rr from "../../../../assets/rr.png";
import f1 from "../../../../assets/f1.png";
import AppContext from "../../../../context/app/AppContext";
import styles from "./HomeAAS.module.scss";
import { Trans } from "react-i18next";
import { t } from "i18next";

const HomeAAS = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false);
  }, []);

  return (
    <div className={styles.HomeAAS}>
      <div className={styles.HomeAAS__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>Back</span>
      </div>
      <div className={styles.HomeAAS__head}>
        <span>
          <span>{t("aas-heading")}</span>
        </span>
      </div>
      <div className={styles.HomeAAS__body}>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col lg={12} sm={24}>
              <div className={styles.HomeAAS__body__card__img}>
                <img src={aasdata} />
              </div>{" "}
            </Col>
            <Col lg={12} sm={24}>
              <div className={styles.HomeAAS__body__aasdata}>
                <h6> {t("aas-what")}</h6>
                <span>
                  <Trans i18nKey={"aas-content"} />
                </span>
              </div>
            </Col>
          </Row>
          <div className={styles.HomeAAS__aassubheading}>
            <h6 className={styles.HomeAAS__body__h}>{t("aas-procedure")}</h6>
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col lg={12} sm={24}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col sm={24}>
                  <p>
                    <b>{t("aas-var")}</b>
                  </p>
                  <p>
                    <i>
                      R <sub>Index </sub>: {t("aas-snpindex")}
                    </i>
                  </p>
                  <p>
                    <i>
                      R<sub>4.0</sub> : {t("aas-price")}
                    </i>
                  </p>
                </Col>
                <Col sm={24}>
                  <div className={styles.HomeAAS__body__headfor}>
                    <h6 className={styles.HomeAAS__body__h}>
                      {t("aas-pos-algo")}
                    </h6>
                    <div className={styles.HomeAAS__body__card__imgform}>
                      <img src={pos} />
                    </div>
                  </div>
                </Col>
                <Col sm={24}>
                  <div className={styles.HomeAAS__body__datacard}>
                    <div className={styles.HomeAAS__body__datacard__data}>
                      <div
                        className={styles.HomeAAS__body__datacard__data__first}
                      >
                        <span>
                          R <sub>Index</sub>
                        </span>
                        <span>=</span>
                        <span>
                          <Trans i18nKey={"aas-pos-ri"} />
                        </span>
                      </div>
                      <div
                        className={styles.HomeAAS__body__datacard__data__first}
                      >
                        <span>
                          R <sub>4.0</sub>
                        </span>
                        <span>=</span>
                        <span>
                          <Trans i18nKey={"aas-pos-r4"} />
                        </span>
                      </div>
                      <div
                        className={styles.HomeAAS__body__datacard__data__second}
                      >
                        <ul>
                          <li>
                            <ul
                              className={
                                styles.HomeAAS__body__datacard__data__second__head
                              }
                            >
                              <Trans i18nKey="aas-pos-det" />
                              <img
                                className={
                                  styles.HomeAAS__body__datacard__data__second__head__img
                                }
                                src={ll}
                              ></img>
                              {/* <li>
                                Y = X x 0.1 &nbsp;&nbsp;&nbsp;0.1 is the AAS {t('Coefficient')}.
                              </li>
                              <li>
                                Y = 0.1 X 0.8 = 0.08
                              </li> */}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <br />
                    <div>
                      <span style={{ height: "40px" }}>
                        <Trans i18nKey={"aas-pos-res"} />
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={24}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col sm={24}>
                  <p>
                    <b>{t("aas-mal")}</b>
                  </p>
                  <p>
                    {t("positive")} AAS : 7% {t("max")}
                  </p>
                  <p>
                    {t("negative")} AAS : -3.5% {t("max")}
                  </p>
                </Col>
                <Col sm={24}>
                  <div className={styles.HomeAAS__body__headfor}>
                    <h6 className={styles.HomeAAS__body__h}>
                      {t("aas-neg-algo")}
                    </h6>
                    <div className={styles.HomeAAS__body__card__imgform}>
                      <img src={neg} />
                    </div>
                  </div>
                </Col>
                <Col sm={24}>
                  <div className={styles.HomeAAS__body__datacard}>
                    <div className={styles.HomeAAS__body__datacard__data}>
                      <div
                        className={styles.HomeAAS__body__datacard__data__first}
                      >
                        <span>
                          R <sub>Index</sub>
                        </span>
                        <span>=</span>
                        <span>
                          <Trans i18nKey={"aas-neg-ri"} />{" "}
                        </span>
                      </div>
                      <div
                        className={styles.HomeAAS__body__datacard__data__first}
                      >
                        <span>
                          R <sub>4.0</sub>
                        </span>
                        <span>=</span>
                        <span>
                          <Trans i18nKey={"aas-neg-r4"} />
                        </span>
                      </div>
                      <div
                        className={styles.HomeAAS__body__datacard__data__second}
                      >
                        <ul>
                          <li>
                            <ul
                              className={
                                styles.HomeAAS__body__datacard__data__second__head
                              }
                            >
                              <Trans i18nKey={"aas-pos-det"} />
                              <img
                                className={
                                  styles.HomeAAS__body__datacard__data__second__head__img
                                }
                                src={rr}
                              ></img>
                              {/* <li>
                                Y = X x 0.1 &nbsp;&nbsp;&nbsp;0.1 is the AAS {t('Coefficient')}.
                              </li>
                              <li>
                                Y = 0.1 X 0.6 = 0.06
                              </li> */}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <span style={{ height: "40px" }}>
                        <Trans i18nKey={"aas-neg-res"} />{" "}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className={styles.HomeAAS__body__card}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <div className={styles.HomeAAS__body__card1}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col>
                    <p>
                      <Trans i18nKey={"aas-geo"} />
                    </p>
                    <div className={styles.HomeAAS__body__card__imgtext}>
                      <img src={f1} />
                    </div>
                    <Trans i18nKey={"aas-eq"} />
                    <p></p>
                    <p>
                      <Trans i18nKey={"aas-protocol"} />{" "}
                    </p>
                    <p>{t("aas-arith")}</p>
                    <div className={styles.HomeAAS__body__card__imgtext}>
                      <img src={f2} />
                    </div>
                    <p>{t("aas-exp")}</p>
                  </Col>
                </Row>
              </div>
              <h4>{t("price-action")}</h4>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeAAS.propTypes = {};

HomeAAS.defaultProps = {};

export default HomeAAS;
