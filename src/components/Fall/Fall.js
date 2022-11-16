import React from 'react';
import loader from "../../assets/loader.png";
import styles from './Fall.module.scss';

const Fall = () => (
  <div className={styles.Fall}>
    <img src={loader}></img>
  </div>
);

Fall.propTypes = {};

Fall.defaultProps = {};

export default Fall;
