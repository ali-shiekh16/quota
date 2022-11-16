import { ArrowLeftOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { t } from "i18next";
import React, { useContext, useEffect } from "react";
import { Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";
import blackVid from "../../../../assets/blackVid.png";
import bronzeVid from "../../../../assets/bronzeVid.png";
import diamondVid from "../../../../assets/diamondVid.png";
import goldVid from "../../../../assets/goldVid.png";
import silvervid from "../../../../assets/silverVid.png";
import NftCard from "../../../../components/NftCard/NftCard";
import AppContext from "../../../../context/app/AppContext";
import styles from "./HomeNft.module.scss";

const nftData = [
  {
    img: bronzeVid,
    head: "Bronze",
    body: (
      <h6>
        <ul>
          <li>
            <Trans i18nKey={"bronze-box"} />
          </li>
        </ul>
      </h6>
    ),
  },
  {
    img: silvervid,
    head: "Silver",
    body: (
      <h6>
        <ul>
          <li>
            <Trans i18nKey={"silver-box"} />
          </li>{" "}
          <li>
            <Trans i18nKey={"silver-box-1"} />
          </li>{" "}
          <li>
            <Trans i18nKey={"silver-box-2"} />
          </li>
        </ul>
      </h6>
    ),
  },
  {
    img: goldVid,
    head: "Gold",
    body: (
      <h6>
        <ul>
          <li>
            <Trans i18nKey={"gold-box"} />
          </li>
          <li>
            <Trans i18nKey={"gold-box-1"} />
          </li>
          <li>
            <Trans i18nKey={"gold-box-2"} />{" "}
          </li>
        </ul>
      </h6>
    ),
  },
  {
    img: diamondVid,
    head: "Diamond",
    body: (
      <h6>
        <ul>
          <li>
            <Trans i18nKey={"diamond-box"} />
          </li>
          <li>
            <Trans i18nKey={"diamond-box-1"} />{" "}
          </li>
          <li>
            <Trans i18nKey={"diamond-box-2"} />{" "}
          </li>
        </ul>
      </h6>
    ),
  },
  {
    img: blackVid,
    head: "Black",
    body: (
      <h6>
        <ul>
          <li>
            <Trans i18nKey={"black-box"} />
          </li>
          <li>
            <Trans i18nKey={"black-box-1"} />{" "}
          </li>
          <li>
            <Trans i18nKey={"black-box-2"} />
          </li>
        </ul>
      </h6>
    ),
  },
];

const HomeNft = () => {
  const navigate = useNavigate();
  const appContext = useContext(AppContext);

  const { setNavbarValue } = appContext;

  useEffect(() => {
    setNavbarValue(false);
  }, []);

  return (
    <div className={styles.HomeNft}>
      <div className={styles.HomeNft__top} onClick={() => navigate("/home")}>
        <ArrowLeftOutlined />
        <span>Back</span>
      </div>
      <div className={styles.HomeNft__head}>
        <span>{t("nft-heading")}</span>
      </div>
      <div className={styles.HomeNft__body}>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={24}>
              <div>
                <h5>{t("nft-perc")}</h5>
              </div>{" "}
            </Col>
            <Col span={24}>
              <div className={styles.HomeNft__body__container}>
                <table>
                  <tr className={styles.HomeNft__body__container__tdhead}>
                    <td colspan="6" style={{ marginRight: "30px" }}>
                      {t("nft-ref")}
                    </td>
                  </tr>
                  <tr>
                    <th>{t("Tiers")}</th>
                    <th>{t("nft-trans")}</th>
                    <th>1 {t("Tier")}</th>
                    <th>2 {t("Tiers")}</th>
                    <th>3 {t("Tiers")}</th>
                    <th>4 {t("Tiers")}</th>
                  </tr>
                  <tr>
                    <td>{t("Bronze")}</td>
                    <td>20%</td>
                    <td>0.0%</td>
                    <td>0.0%</td>
                    <td>0.0%</td>
                    <td>0.0%</td>
                  </tr>
                  <tr>
                    <td>{t("Silver")}</td>
                    <td>20%</td>
                    <td>4.5%</td>
                    <td>1.0%</td>
                    <td>0.20%</td>
                    <td>0.04%</td>
                  </tr>
                  <tr>
                    <td>{t("Gold")}</td>
                    <td>30%</td>
                    <td>7.0%</td>
                    <td>1.5%</td>
                    <td>0.30%</td>
                    <td>0.06%</td>
                  </tr>
                  <tr>
                    <td>{t("Diamond")}</td>
                    <td>40%</td>
                    <td>9.5%</td>
                    <td>2.0%</td>
                    <td>0.40%</td>
                    <td>0.08%</td>
                  </tr>
                  <tr>
                    <td>{t("Black")}</td>
                    <td>50%</td>
                    <td>12%</td>
                    <td>2.5%</td>
                    <td>0.50%</td>
                    <td>0.10%</td>
                  </tr>
                  <tr></tr>
                </table>
                <div className={styles.HomeNft__body__container__unl}>
                  <p>**{t("Unlimited")}</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
              <div>
                <h5>{t("tier-lev")}</h5>
              </div>{" "}
            </Col>
            <Col>
              <div className={styles.HomeNft__body__container}>
                <Row
                  gutter={[16, 48]}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {nftData.slice(0, 3).map((item) => {
                    return (
                      <Col sm={24} md={8}>
                        <NftCard
                          img={item.img}
                          head={item.head}
                          body={item.body}
                        />
                      </Col>
                    );
                  })}
                </Row>
                <Row
                  justify="center"
                  align="center"
                  gutter={[16, 48]}
                  style={{ marginTop: "70px" }}
                >
                  {nftData.slice(3).map((item) => {
                    return (
                      <Col sm={24} md={8}>
                        <NftCard
                          img={item.img}
                          head={item.head}
                          body={item.body}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

HomeNft.propTypes = {};

HomeNft.defaultProps = {};

export default HomeNft;
