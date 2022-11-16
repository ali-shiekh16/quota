import React from 'react';
import styles from './TeamCard.module.scss';

const TeamCard = ({img,name,pos,spc,id}) => (
  <div className={styles.TeamCard} key={id}>
    <div className={styles.TeamCard__img}>
      <img src={img} alt={id}></img>
    </div>
    <div className={styles.TeamCard__text}> 
    <span className={styles.TeamCard__name}>{name}</span>
    <span className={styles.TeamCard__pos}>{pos}</span>
    <span className={styles.TeamCard__spc}>{spc}</span>
    </div>
  </div>
);

TeamCard.propTypes = {};

TeamCard.defaultProps = {};

export default TeamCard;
