import { CloseOutlined } from "@ant-design/icons";
import { Button, Input, Radio, Space } from "antd";
import { default as React, useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import styles from './WishlistModal.module.scss';

const WishlistModal = ({handleCancel}) => {
  
  const [value, setValue] = useState(1);
  const [submit,setIsSubmit]= useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [wallet, setWallet] = useState('');


  const {t}=useTranslation()

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  
  return(
  <div className={styles.WishlistModal}>
      {!submit?
        <>
    <div className={styles.WishlistModal__container}>
        <div className={styles.WishlistModal__container__blur}></div>
        <div className={styles.WishlistModal__container__head}>
        <span className={styles.WishlistModal__container__head__text__container}>
          <span className={styles.WishlistModal__container__head__text}>
          {t('WHITELIST')}
          </span>
          <hr></hr>
        </span>
        <CloseOutlined className={styles.WishlistModal__container__head__icon} onClick={handleCancel}  />
      </div>
      <div className={styles.WishlistModal__container__body}>
        <Input value={name} onChange={(e)=>setName(e.target.value)} className={styles.WishlistModal__container__body__input} placeholder={t("Name")}/>
        <Input value={email} onChange={(e)=>setEmail(e.target.value)} className={styles.WishlistModal__container__body__input} placeholder={t("Email")}/>
        <span className={styles.WishlistModal__container__body__radiotext}>{t('Crypto')}</span>
        <Radio.Group onChange={onChange} value={value} className={styles.WishlistModal__container__body__radiogroup}>
      <Space direction="vertical">
        <Radio value={1}>{t('dunno')}</Radio>
        <Radio value={2}>{t('Beginner')}</Radio>
        <Radio value={3}>{t('Intermediate')}</Radio>
        <Radio value={4}>
          {t('Professional')}
        </Radio>
      </Space>
    </Radio.Group>
        <Input value={country} onChange={(e)=>setCountry(e.target.value)} className={styles.WishlistModal__container__body__input} placeholder={t("Country")}/>
        <Input value={wallet} onChange={(e)=>setWallet(e.target.value)} className={styles.WishlistModal__container__body__input} placeholder={t("Polygon")}/>
      </div>
      <div className={styles.WishlistModal__container__footer}>
        <Button disabled={!name||!wallet}  className={styles.WishlistModal__container__footer__button} type="primary" onClick={()=>setIsSubmit(true)}>{t('Submit')}</Button>
      </div>
      </div>
      </>:
      <>
    <div className={styles.WishlistModal__submitcontainer}>
    <div className={styles.WishlistModal__submitcontainer__blur}></div>

              <div className={styles.WishlistModal__submitcontainer__head}>
        <span className={styles.WishlistModal__submitcontainer__head__text}>{" "}</span>
        <CloseOutlined className={styles.WishlistModal__submitcontainer__head__icon} onClick={handleCancel}  />
      </div>
<div className={styles.WishlistModal__submitcontainer__submit}>
  <span><Trans i18nKey="thank" /></span>
      </div>
      </div>
      </>
      }
    </div>
)};

WishlistModal.propTypes = {};

WishlistModal.defaultProps = {};

export default WishlistModal;
