import React, {useRef} from 'react'
import Carrousel from '../Carrousel/Carrousel'
import styles from './Project.module.css'
import {useInView} from "framer-motion";
export const Project = ({dataList, title, description}) => {
    const ref = useRef();
    const inView = useInView(ref, {once:true});
  return (

          <article className={styles['project-container']} ref={ref} style={{
              transform: inView ? "none" : "translateX(-300px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",

          }}  >
              <div className={styles['project-info']}>
                <h2> {title}</h2>
                <p> {description} </p>

              </div>
              <div className={styles['project-image']}>
                <Carrousel dataList={dataList} />
              </div>
            </article>

  )
}
