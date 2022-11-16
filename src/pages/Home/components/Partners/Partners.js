import React from 'react';
import { useTranslation } from 'react-i18next';
import chain from "../../../../assets/chain.png";
import cp from "../../../../assets/cp.png";
import polygon from "../../../../assets/polygon.png";
import quick from "../../../../assets/quick.png";
import sushi from "../../../../assets/sushi.png";
import uni from "../../../../assets/uni.png";
import styles from './Partners.module.scss';

const partners = [
  {
    id: Math.random(),
    img: polygon,
  },
  {
    id: Math.random(),
    img: chain,
  },
  {
    id: Math.random(),
    img: cp,
  },
  {
    id: Math.random(),
    img: quick,
  },
  {
    id: Math.random(),
    img: uni,
  },
  {
    id: Math.random(),
    img: sushi,
  },

]

const Partners = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.Partners}>
      <div className={styles.Partners__text}>

        <div className={styles.Partners__text__line1}></div>
        <span>
          {t('partners')}
        </span>
        <div className={styles.Partners__text__line2}></div>

      </div>
      <div className={styles.Partners__container}>
        <div className={styles.Partners__container__first}>
          {partners.slice(0, 4).map((item) => {
            return (
              <div className={styles.Partners__container__first__img} key={item.id}>
                <img src={item.img} alt={item.id}></img>
              </div>
            )
          })}
        </div>
        <div className={styles.Partners__container__second}>
          {partners.slice(4).map((item) => {
            return (
              <div className={styles.Partners__container__second__img} key={item.id}>
                <img src={item.img} alt={item.id}></img>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

Partners.propTypes = {};

Partners.defaultProps = {};

export default Partners;
