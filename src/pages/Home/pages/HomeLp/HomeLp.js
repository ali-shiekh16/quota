import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../../context/app/AppContext';
import styles from './HomeLp.module.scss';

const HomeLp = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext)
  const {t}=useTranslation()


  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.HomeLp}>
      <div className={styles.HomeLp__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.HomeLp__head}>
        <span>
        {t('lp-token')}
        </span>
      </div>
      <div className={styles.HomeLp__body}>
        <Row style={{ width: "100%" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={24}>
            <div className={styles.HomeLp__body__card}>
              <span>

<Trans i18nKey={'lp-1'} />             </span>
              <span>
              <Trans i18nKey={'lp-2'} />
              </span>
              <span>
              <Trans i18nKey={'lp-3'} />
              </span>
              <span>
              <Trans i18nKey={'lp-4'} />

              </span>
              <span>
              <Trans i18nKey={'lp-5'} />

              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
};

HomeLp.propTypes = {};

HomeLp.defaultProps = {};

export default HomeLp;
