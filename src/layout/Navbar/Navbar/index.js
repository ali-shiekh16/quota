import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Select } from "antd";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink as Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import AppContext from "../../../context/app/AppContext";
import styles from './Navbar.module.scss';
import RightMenu from "./RightMenu";

const { Option } = Select;

export const languageOptions = [
  {
    label: "Eng",
    value: "en"
  },
  {
    label: "한국어",
    value: "ko"
  }
]

export const links = [
  {
    id: 1,
    path: "/home",
    label: "Home"
  },
  {
    id: 2,
    path: "/governance",
    label: "Governance"
  },
  {
    id: 3,
    path: "https://quotanetwork.medium.com/",
    label: "Blog"
  }
]

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { selectedLanguage, setSelectedLang } = useContext(AppContext)
  const { i18n } = useTranslation()

  const showDrawer = () => {
    setVisible(!visible);
  };

  function changeLang(value) {
    setSelectedLang(value)
    i18n.changeLanguage(value);
  }

  const isActive = ({ isActive }) => isActive ? styles.Navbar__tabs__desktop__active : "";

  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__logo}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.Navbar__tabs__desktop}>
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
              <Link to={"/launch"} className={styles.Navbar__launch}> Launch App</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.Navbar__lang}>
          <Select style={{ width: "100%" }} value={selectedLanguage} onChange={changeLang}>
            {languageOptions.map((item) => {
              return (
                <Option key={item.value} value={item.value}>{item.label}</Option>
              )
            })}
          </Select>
        </div>

      </div>
      <div className={styles.Navbar__tabs__mobile}>
        <Button className={styles.Navbar__menuButton} type="text" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={showDrawer}
          visible={visible}
          style={{ zIndex: 99999 }}
          width={"80%"}
          className={styles.Navbar__draw}      >
          <RightMenu showDrawer={showDrawer} />
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;

{/* <nav className="navbar">
<Layout>
  <Layout.Header className="nav-header">
    <div className="logo">
      <h3 className="brand-font">Brand Here</h3>
    </div>
    <div className="navbar-menu">
      <div className="leftMenu">
        <LeftMenu mode={"horizontal"} />
      </div>
      <Button className="menuButton" type="text" onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <div className="rightMenu">
        <RightMenu mode={"horizontal"} />
      </div>

      <Drawer
        title={"Brand Here"}
        placement="right"
        closable={true}
        onClose={showDrawer}
        visible={visible}
        style={{ zIndex: 99999 }}
      >
        <RightMenu mode={"inline"} />
      </Drawer>
    </div>
  </Layout.Header>
</Layout>
</nav> */}