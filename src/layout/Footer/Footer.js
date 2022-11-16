import React from 'react';
import FooterImg from "../../assets/crytical.png";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import medium from "../../assets/medium.svg";
import gitbook from "../../assets/gitbook.png";

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.Footer__logo}>

      <img src={FooterImg} alt="footer" />
      <span>© 2022 QUOTA LAB ALL RIGHTS RESERVED.</span>
    </div>
    <div className={styles.Footer__social}>
      <a href='https://twitter.com/QuotaNetwork'  target="_blank">

        <img src={twitter} alt="twitter" />
      </a>
      <a href='https://t.me/quotanet' target="_blank">

        <img src={telegram} alt="telegram" />
      </a>
      <a href='https://quotanetwork.medium.com' target="_blank">

        <img src={medium} alt="medium" />
      </a>
      <a href='https://quotanetwork.gitbook.io/untitled/' target="_blank">

        <img src={gitbook} alt="git" />
      </a>
      <a href='https://discord.gg/fBypsGj5b6' target="_blank">

        <img src={discord} alt="discord" />
      </a>


    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
