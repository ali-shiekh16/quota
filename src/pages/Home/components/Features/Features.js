import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import aas from "../../../../assets/aas.png";
import bonds from "../../../../assets/bonds.png";
import gov from "../../../../assets/gov.png";
import nft from "../../../../assets/nft.png";
import onchain from "../../../../assets/onchain.png";
import phil from "../../../../assets/phil.png";
import tax from "../../../../assets/tax.png";
import token from "../../../../assets/token.png";
import GlassCard from '../../../../components/GlassCard/GlassCard';
import styles from './Features.module.scss';

const cardArray = [
  {
    id: 1,
    name: "aas",
    text: "aas-sub",
    img: aas,
    path: "/home/aas"
  },
  {
    id: 2,
    name: "nft",
    img: nft,
    path: "/home/nft"
  },
  {
    id: 3,
    name: "tax",
    img: tax,
    path: "/home/tax"
  },
  {
    id: 4,
    name: "governance",
    img: gov,
    path: "/home/governance"
  },
  {
    id: 5,
    name: "onchain",
    img: onchain,
    path: "/home/onchain"
  },
  {
    id: 6,
    name: "lp-token",
    img: bonds,
    path: "/home/lp"
  },
  {
    id: 7,
    name: "philospher",
    img: phil,
    path: "/home/phil"
  },
  {
    id: 8,
    name: "token",
    img: token,
    path: "/home/token"
  },
]

const Features = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.Features}>
      <div className={styles.Features__head}>

        <div className={styles.Features__head__line1}></div>
        <span>
          {t('feature')}
        </span>
        <div className={styles.Features__head__line2}></div>

      </div>
      <span className={styles.Features__subhead}>          {t('feature-sub')}
      </span>
      <div className={styles.Features__cards}>
        {cardArray?.slice(0, 2).map((item) => (
          <GlassCard path={item.path} name={item.name} text={item.text} img={item.img} key={item.id}></GlassCard>
        ))}
        {cardArray?.slice(2, 4).map((item) => (
          <GlassCard path={item.path} name={item.name} text={item.text} img={item.img} key={item.id}></GlassCard>
        ))}
        {cardArray?.slice(4, 6).map((item) => (
          <GlassCard path={item.path} name={item.name} text={item.text} img={item.img} key={item.id}></GlassCard>
        ))}
        {cardArray?.slice(6).map((item) => (
          <GlassCard path={item.path} name={item.name} text={item.text} img={item.img} key={item.id}></GlassCard>
        ))}
      </div>
    </div>
  );
}

Features.propTypes = {};

Features.defaultProps = {};

export default Features;
