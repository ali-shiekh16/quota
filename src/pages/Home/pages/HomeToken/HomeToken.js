import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import piech from "../../../../assets/piech.png";
import AppContext from '../../../../context/app/AppContext';
import styles from './HomeToken.module.scss';

const HomeToken = () => {

  const navigate = useNavigate();
  const appContext = useContext(AppContext)
  const { t } = useTranslation()


  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.HomeToken}>
      <div className={styles.HomeToken__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.HomeToken__head}>
        <span>
          {t('token')}

        </span>
      </div>
      <div className={styles.HomeToken__body}>
        <div className={styles.HomeToken__body__card}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col lg={8} sm={24}>
              <Trans i18nKey={'token-infra'} />
            </Col>
            <Col lg={6} sm={24}>
              <Trans i18nKey={'token-pro'} />

            </Col>
            <Col lg={3} sm={24}>
              <Trans i18nKey={'token-tick'} />

            </Col>
            <Col lg={7} sm={24}>
              <Trans i18nKey={'token-start'} />

            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={styles.HomeToken__body__imgcont}>
            <Col lg={12} sm={24}>
              <Row>
                <Col sm={24}>
                  <span>
                    {t('token-ini')}
                  </span>
                </Col >
                <Col sm={24}>
                  <div className={styles.HomeToken__body__card__img}>
                    <img src={piech} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={24}>
              <div className={styles.HomeToken__body__datacard}>
                <ol>
                  <li>
                    {t('token-50')}

                  </li>
                  <ul>
                    <li>
                      {t('token-dis')}

                    </li>
                    <li>
                      {t('token-the')}

                    </li>
                  </ul>
                  <li>
                    {t('token-20')}

                  </li>
                  <li>
                    {t('token-5')}

                  </li>
                  <li>
                    {t('token-15')}

                  </li>
                  <li>
                    {t('token-dev')}

                  </li>
                  <li>
                    {t('token-dao')}

                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  )
};

HomeToken.propTypes = {};

HomeToken.defaultProps = {};

export default HomeToken;
