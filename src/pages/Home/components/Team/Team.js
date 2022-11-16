import React from 'react';
import banksy from "../../../../assets/Banksy.png";
import Barnum from "../../../../assets/Barnum.png";
import Che from "../../../../assets/Che.png";
import Luca from "../../../../assets/Luca.png";
import Mozart from "../../../../assets/Mozart.png";
import Nicolas from "../../../../assets/Nicolas.png";
import Rasputin from "../../../../assets/Rasputin.png";
import TeamCard from '../../../../components/TeamCard/TeamCard';
import styles from './Team.module.scss';

const teams = [
  {
    id: Math.random(),
    img: Barnum,
    name: "PT Barnum (4th year)",
    pos: "Head of Marketing",
    spc: " Community Growth Specialist"
  },
  {
    id: Math.random(),
    img: banksy,
    name: "Banksy (3rd year)",
    pos: "Master Designer",
    spc: "NFT Aficionado / MEME Specialist"
  },
  {
    id: Math.random(),
    img: Che,
    name: "Che Guevara (3rd year)",
    pos: "Head of Operations",
    spc: "Front-end DEV"
  },
  {
    id: Math.random(),
    img: Nicolas,
    name: "Nicolas Flamel (7th year)",
    pos: "Head of Product",
    spc: "Game Theorist / Blockchain Architect"
  },
  {
    id: Math.random(),
    img: Luca,
    name: "Luca Pacioli (3rd year)",
    pos: "CFO",
    spc: "Economist / Financial Expert"
  },
  {
    id: Math.random(),
    img: Rasputin,
    name: "Grigori Rasputin (3rd year)",
    pos: "SCRUM Master",
    spc: "Project Manager / HR"
  },
  {
    id: Math.random(),
    img: Mozart,
    name: "Wolfgang A. Mozart (5th year)",
    pos: "CTO",
    spc: "Fullstack DEV / Defi-native"
  },
]

const Team = () => (
  <div className={styles.Team}>
    <span className={styles.Team__text}>
      Team
    </span>
    <div className={styles.Team__container}>
      <div className={styles.Team__container__first}>
        {teams.slice(0, 4).map((item) => {
          return (
            <TeamCard key={item.id} name={item.name} pos={item.pos} img={item.img} spc={item.spc} />
          )
        })}
      </div>
      <div className={styles.Team__container__second}>
        {teams.slice(4).map((item) => {
          return (
            <TeamCard key={item.id} name={item.name} pos={item.pos} img={item.img} spc={item.spc} />
          )
        })}
      </div>
    </div>
  </div>
);

Team.propTypes = {};

Team.defaultProps = {};

export default Team;
