import React, { useRef } from "react";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { useArrow } from "../../hooks/useArrow";
import me from "../../assets/image.jpeg"
import styles from "./Home.module.css";
export const Home = ({setIsOpened}) => {
  const arrow = useRef(null);
  const arrow1 = useRef(null);
  const arrow2 = useRef(null);
  const arrow3 = useRef(null);
  const arrow4 = useRef(null);
  const width = window.innerWidth - 50;
  
  useArrow(arrow, 500, width);
  useArrow(arrow1, 400, width);
  useArrow(arrow2, 20, width);
  useArrow(arrow3, 300, width);
  useArrow(arrow4, 600, width);

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
            <a href='https://www.linkedin.com/in/diego-carrillo-695a39208/'>
              <AiOutlineLinkedin size={32} color={"white"} />
            </a>
          </span>
          <span>
            <a href='https://www.instagram.com/datacode32/'>
              <AiOutlineInstagram size={32} color={"white"} />
            </a>
          </span>
        </div>
        <button className={styles['contact-button']} onClick={()=>setIsOpened(true)}>Contact me</button>
      </div>
      <div className={styles["img-wrapper"]}>
        <img
          className={styles.image}
            src={me}
          alt='me'></img>
      </div>
    </div>
  );
};
