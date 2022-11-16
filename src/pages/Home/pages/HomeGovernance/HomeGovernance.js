import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../../context/app/AppContext';
import styles from './HomeGovernance.module.scss';

const HomeGovernance = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext)
  const { t } = useTranslation()

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.HomeGovernance}>
      <div className={styles.HomeGovernance__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.HomeGovernance__head}>
        <span>
          {t('governance')}
        </span>
      </div>
      <div className={styles.HomeGovernance__body}>
        <Row style={{ width: "100%" }} gutter={[16, 30]}>
          <Col lg={12}>
            <div className={styles.HomeGovernance__body__card}>
              <span>
                <Trans i18nKey={'gov-quota'} />
              </span>
              <ul>
                <li>{t('gov-prop')}</li>
                <li>{t('gov-vot')}</li>
                <li>{t('gov-count')}</li>
              </ul>
            </div>
          </Col>
          <Col lg={12}>
            <Row style={{ width: "100%" }} gutter={[16, 30]}>
              <Col lg={24}>
                <div className={styles.HomeGovernance__body__card}>
                  <span>
                    <Trans i18nKey={'gov-calc'} />
                  </span>
                </div>
              </Col>
              <Col lg={24} >
                <div className={styles.HomeGovernance__body__card}>
                  <span>
                    <Trans i18nKey={'gov-fully'} />

                  </span>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    </div>
  )
};

HomeGovernance.propTypes = {};

HomeGovernance.defaultProps = {};

export default HomeGovernance;