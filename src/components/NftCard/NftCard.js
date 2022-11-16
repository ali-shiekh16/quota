import { t } from 'i18next';
import React from 'react';
import styles from './NftCard.module.scss';

const NftCard = ({img,head,body}) => (
  <div className={styles.NftCard}>
    <div className={styles.NftCard__img}>
      <img src={img} width={"100%"}></img>
    </div>
    <div className={styles.NftCard__container}>
      <h5>
        {t(head)}
      </h5>
      <hr>
      </hr>
      {/* <h6> */}
        {body}
      {/* </h6> */}
    </div>
  </div>
);

NftCard.propTypes = {};

NftCard.defaultProps = {};

export default NftCard;
