import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { t } from "i18next";
import React, { useContext, useEffect } from 'react';
import { Trans } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../../context/app/AppContext';
import styles from './HomeTax.module.scss';

const HomeTax = () => {

  const navigate = useNavigate();
  const appContext = useContext(AppContext)

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.HomeTax}>
      <div className={styles.HomeTax__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.HomeTax__head}>
        <span>
          {t('tax-heading')}
        </span>
      </div>
      <div className={styles.HomeTax__body}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={24}>
            <div className={styles.HomeTax__body__card}>
              <span><Trans i18nKey={'tax-desc'} /></span>
              {t('tax-refer')}
            </div>

          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={24}>
            <div className={styles.HomeTax__body__container}>

              <table>
                <tr className={styles.HomeTax__body__container__tdhead}>
                  <td colspan="6" style={{ marginRight: "30px" }}>{t('tax-rewards')}</td>
                </tr>
                <tr>
                  <th>{t('Tiers')}</th>
                  <th>{t('nft-trans')}</th>
                  <th>1 {t('Tier')}</th>
                  <th>2 {t('Tiers-1')}</th>
                  <th>3 {t('Tiers-1')}</th>
                  <th>4 {t('Tiers-1')}</th>
                </tr>
                <tr>
                  <td>{t('Bronze')}</td>
                  <td>20%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                  <td>0.0%</td>
                </tr>
                <tr>
                  <td>{t('Silver')}</td>
                  <td>20%</td>
                  <td>4.5%</td>
                  <td>1.0%</td>
                  <td>0.20%</td>
                  <td>0.04%</td>
                </tr>
                <tr>
                  <td>{t('Gold')}</td>
                  <td>30%</td>
                  <td>7.0%</td>
                  <td>1.5%</td>
                  <td>0.30%</td>
                  <td>0.06%</td>
                </tr>
                <tr>
                  <td>{t('Diamond')}</td>
                  <td>40%</td>
                  <td>9.5%</td>
                  <td>2.0%</td>
                  <td>0.40%</td>
                  <td>0.08%</td>
                </tr>
                <tr>
                  <td>{t('Black')}</td>
                  <td>50%</td>
                  <td>12.0%</td>
                  <td>2.5%</td>
                  <td>0.50%</td>
                  <td>0.10%</td>
                </tr>
              </table>
              <div className={styles.HomeTax__body__container__unl}>
                <p>**{t('Unlimited')}</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.HomeTax__body__card}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col lg={24} sm={12}>
              <Trans i18nKey={'tax-stake'} />
            </Col>
            <Col lg={24} sm={12}>
              <div className={styles.HomeTax__body__tablecontainer}>
                <table>
                  <tr>
                    <th style={{ width: "15%" }}></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>{t('Tiers')}</td>
                    <td>
                      <div className={styles.HomeTax__body__tablecontainer__wrap}>
                        <div className={styles.HomeTax__body__tablecontainer__container}>
                          <table>
                            <tr className={styles.HomeTax__body__tablecontainer__container__tdhead}>
                              <th style={{ width: "30%" }}></th>
                              <th ><Trans i18nKey={'tax-fees'} /></th>
                            </tr>
                            <tr>
                              <td>{t('tax-staking')}</td>
                              <td>4.5%</td>
                            </tr>
                            <tr>
                              <td>{t('Dev Pool')}</td>
                              <td>2.5%</td>
                            </tr>
                            <tr>
                              <td>{t('Reward Pool Escrow')}</td>
                              <td>2.5%</td>
                            </tr>
                            <tr>
                              <td>{t('Ecosystem Maintainence')}</td>
                              <td>0.5%</td>
                            </tr>
                            <tr>
                              <td style={{ background: "#ebb2d2" }}>{t('Tier Reward distribution pool')}</td>
                              <td style={{ background: "#ebb2d2" }}>15%</td>
                            </tr>

                          </table>
                        </div>
                        <span>
                          <Trans i18nKey={'tax-15'} />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>{t('Silver')}</td>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>{t('Gold')}</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>{t('Diamond')}</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>{t('Black')}</td>
                    <td>40%</td>
                  </tr>
                </table>
              </div>
            </Col>
          </Row>
        </div>
        <Row style={{ width: "100%" }}>
          <Col sm={24} lg={12} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <div className={styles.HomeTax__body__card}>
              <Trans i18nKey={'tax-staking-reward'} />
            </div>
          </Col>
          <Col sm={24} lg={12} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <div className={styles.HomeTax__body__card}>
              <Trans i18nKey={'tax-mine'} />

            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
};

HomeTax.propTypes = {};

HomeTax.defaultProps = {};

export default HomeTax;
