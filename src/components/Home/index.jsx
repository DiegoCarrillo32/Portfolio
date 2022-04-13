import React, { useRef } from "react";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { useArrow } from "../../hooks/useArrow";
import styles from "./Home.module.css";
export const Home = ({setIsOpened}) => {
  const arrow = useRef(null);
  const arrow1 = useRef(null);
  const arrow2 = useRef(null);
  const arrow3 = useRef(null);
  const arrow4 = useRef(null);
  useArrow(arrow, 500);
  useArrow(arrow1, 400);
  useArrow(arrow2, 20);
  useArrow(arrow3, 300);
  useArrow(arrow4, 600);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.arrow} ref={arrow}></div>
      <div className={styles.arrow} ref={arrow1}></div>
      <div className={styles.arrow} ref={arrow2}></div>
      <div className={styles.arrow} ref={arrow3}></div>
      <div className={styles.arrow} ref={arrow4}></div>

      <div className={styles["left-container"]}>
        <p className={styles["no-margin"]} style={{ color: "#FE2956" }}>
          My name is
        </p>
        <h1 className={styles["no-margin"]}>DIEGO CARRILLO</h1>
        <p className={styles["no-margin"]}>SOFTWARE DEVELOPER</p>
        <div className={styles['social-media']}>
          <span>
            <a href='https://github.com/DiegoCarrillo32'>
              <VscGithub size={32} color={"white"} />
            </a>
          </span>
          <span>
            <a href='https://github.com/DiegoCarrillo32'>
              <AiOutlineLinkedin size={32} color={"white"} />
            </a>
          </span>
          <span>
            <a href='https://github.com/DiegoCarrillo32'>
              <AiOutlineInstagram size={32} color={"white"} />
            </a>
          </span>
          <span>
            <a href='https://github.com/DiegoCarrillo32'>
              <AiOutlineTwitter size={32} color={"white"} />
            </a>
          </span>
        </div>
        <button className={styles['contact-button']} onClick={()=>setIsOpened(true)}>Contact me</button>
      </div>
      <div className={styles["img-wrapper"]}>
        <img
          className={styles.image}
          src={
            "https://media-exp1.licdn.com/dms/image/C4E03AQHT8nMb11X5Ow/profile-displayphoto-shrink_800_800/0/1627689957398?e=1655337600&v=beta&t=qa-Jb6sWFtOi9hY1zPI0qyePpzZup08sntlPc5yF0NY"
          }
          alt='me'></img>
      </div>
    </div>
  );
};
