import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './GlassCard.module.scss';

const GlassCard = ({ name, img, text, id, path }) => {
  const { t } = useTranslation()
  const navigate = useNavigate();

  const handleNavigate = (p) => {
    navigate(`${path}`)
  }

  return (
    <div className={styles.GlassCard} key={id} onClick={() => handleNavigate(path)}>
      <div className={styles.GlassCard__card}>
        <img src={img} alt="2" />
      </div>
      <span className={styles.GlassCard__name}>{t(name)
      }</span>
      {text && <span className={styles.GlassCard__text}>{t(text)}</span>}
    </div>
  )
};

GlassCard.propTypes = {};

GlassCard.defaultProps = {};

export default GlassCard;
