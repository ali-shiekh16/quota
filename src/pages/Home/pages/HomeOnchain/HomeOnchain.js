import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../../context/app/AppContext';
import styles from './HomeOnchain.module.scss';

const HomeOnchain = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext)
  const { t } = useTranslation()

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.HomeOnchain}>
      <div className={styles.HomeOnchain__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.HomeOnchain__head}>
        <span>
          {t('onchain')}
        </span>
      </div>
      <div className={styles.HomeOnchain__body}>
        <Row style={{ width: "100%" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={24}>
            <div className={styles.HomeOnchain__body__card}>
              <span>
                <Trans i18nKey={'onchain_1'} />
              </span>
              <span>
              <Trans i18nKey={'onchain_2'} />

                </span>
              <span>
                <b>
                {t('onchain_key')}:
                </b>
              </span>
              <ol>
              <li>{t('onchain_li_1')}</li><br/>
                <li>{t('onchain_li_2')}</li><br/>
                <li>{t('onchain_li_3')}</li>
              </ol>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
};

HomeOnchain.propTypes = {};

HomeOnchain.defaultProps = {};

export default HomeOnchain;
