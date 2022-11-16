import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useContext, useEffect } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../../context/app/AppContext';
import styles from './HomePhil.module.scss';

const HomePhil = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext)
  const { t } = useTranslation()


  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false)
  }, [])

  return (
    <div className={styles.HomePhil}>
      <div className={styles.HomePhil__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>
          Back
        </span>
      </div>
      <div className={styles.HomePhil__head}>
        <span>
          {t('philospher')}
        </span>
      </div>
      <div className={styles.HomePhil__body}>
        <Row style={{ width: "100%" }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col lg={24}>
            <div className={styles.HomePhil__body__card}>
              <span>
                <strong>
                  <i>
                    {t('phil-all')}
                  </i>
                </strong>
              </span>
              <span>
                {<Trans i18nKey={'phil-18'}/>}


              </span>
              <span>
                {t('phil-theperp')}


              </span>
              <ul>
                <li>

                  <Trans i18nKey={'phil-perp'} />
                </li>
                <li>
                  <Trans i18nKey={'phil-dis'} />


                </li>
                <li>
                  <Trans i18nKey={'phil-every'} />

                </li>
                <li>
                  <Trans i18nKey={'phil-func'} />



                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
};

HomePhil.propTypes = {};

HomePhil.defaultProps = {};

export default HomePhil;
