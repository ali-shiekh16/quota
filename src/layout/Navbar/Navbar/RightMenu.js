import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import i18next from "i18next";
import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { languageOptions, links } from ".";
import AppContext from "../../../context/app/AppContext";
import discord from "../../../assets/discord.png";
import twitter from "../../../assets/twitter.svg";
import telegram from "../../../assets/telegram.svg";
import medium from "../../../assets/medium.svg";
import gitbook from "../../../assets/gitbook.png";
import styles from './RightMenu.module.scss';

const { Option } = Select;

const RightMenu = ({showDrawer}) => {

  const { selectedLanguage, setSelectedLang } = useContext(AppContext)


  function changeLang(value) {
    setSelectedLang(value)
    i18next.changeLanguage(value);
  }

const isActive= ({ isActive }) => isActive ? styles.RightMenu__tabs__desktop__active : "";

  return (
    <div className={styles.RightMenu}>
        <CloseOutlined onClick={()=>showDrawer()} />
    <div className={styles.RightMenu__tabs__desktop}>
      <nav>
        <ul>
          {links?.map((link) => {
            return (
              <li key={link.id}>
                {link.label === 'Blog' ?
                    <a target="_blank" className={isActive} href={link.path}>{link.label}</a>
                    :
                    <Link to={link.path} className={isActive}>{link.label}</Link>

                  }
              </li>
            )
          })}
          <li key={4}>
          <Link to={"/launch"} className={styles.RightMenu__launch}> Launch App</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.RightMenu__lang}>
          <Select  style={{ width: "100%" }} dropdownStyle={{ zIndex: 99999 }} value={selectedLanguage} onChange={changeLang}>
            {languageOptions.map((item) => {
              return (
                <Option key={item.value} value={item.value}>{item.label}</Option>
              )
            })}
          </Select>
      </div>
      <div className={styles.RightMenu__img}>
      <a href='https://twitter.com/QuotaNetwork'  target="_blank">

        <img src={twitter} alt="twitter" />
      </a>
      <a href='https://t.me/quotanet' target="_blank">

        <img src={telegram} alt="telegram" />
      </a>
      <a href='https://quotanetwork.medium.com' target="_blank">

        <img src={medium} alt="medium" />
      </a><br/>
      <a href='https://quotanetwork.gitbook.io/untitled/' target="_blank">

        <img src={gitbook} alt="git" />
      </a>
      <a href='https://discord.gg/fBypsGj5b6' target="_blank">

        <img src={discord} alt="discord" />
      </a>


      </div>
     
    </div>
  </div>
  );
};

export default RightMenu;
