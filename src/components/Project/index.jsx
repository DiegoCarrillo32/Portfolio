import React from 'react'
import Carrousel from '../Carrousel/Carrousel'
import styles from './Project.module.css'
export const Project = ({containerRef, dataList, title, description}) => {
  return (

            <article className={styles['project-container']} ref={containerRef} >
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
