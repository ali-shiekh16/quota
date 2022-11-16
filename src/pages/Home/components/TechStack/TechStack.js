import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import a from "../../../../assets/1.png";
import j from "../../../../assets/10.png";
import b from "../../../../assets/2.png";
import c from "../../../../assets/3.png";
import d from "../../../../assets/4.png";
import e from "../../../../assets/5.png";
import f from "../../../../assets/6.png";
import g from "../../../../assets/7.png";
import h from "../../../../assets/8.png";
import i from "../../../../assets/9.png";
import styles from './TechStack.module.scss';

const images = [
  {
    id: Math.random(),
    img: a
  },
  {
    id: Math.random(),
    img: b
  },
  {
    id: Math.random(),
    img: c
  },
  {
    id: Math.random(),
    img: d
  },
  {
    id: Math.random(),
    img: e
  },
  {
    id: Math.random(),
    img: f
  },
  {
    id: Math.random(),
    img: g
  },
  {
    id: Math.random(),
    img: h
  },
  {
    id: Math.random(),
    img: i
  },
  {
    id: Math.random(),
    img: j
  },
]
const TechStack = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.TechStack}>
      <div>
        <span className={styles.TechStack__text}>
          <span>
            {t('techstack')}
          </span>
          <hr></hr>
        </span>
      </div>
      <div className={styles.TechStack__container}>
        <div className={styles.TechStack__img}>
          {images?.map((item) => (
            <img key={item.id} src={item.img} alt="a" />
          ))}
        </div>
      </div>
    </div>
  );
}

TechStack.propTypes = {};

TechStack.defaultProps = {};

export default TechStack;
