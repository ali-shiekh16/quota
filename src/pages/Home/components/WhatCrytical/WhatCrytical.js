import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import crytical from "../../../../assets/crytical.png";
import styles from './WhatCrytical.module.scss';

const WhatCrytical = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.WhatCrytical}>
      <div className={styles.WhatCrytical__img}>
        <img src={crytical} alt="logo" />
      </div>
      <div className={styles.WhatCrytical__text}>
        <span className={styles.WhatCrytical__text__head}>
        <Trans i18nKey="what"/>
        </span>
        <span className={styles.WhatCrytical__text__body}>
        <Trans i18nKey="what-content"/>
        </span>
      </div>
    </div>
  )
};

WhatCrytical.propTypes = {};

WhatCrytical.defaultProps = {};

export default WhatCrytical;