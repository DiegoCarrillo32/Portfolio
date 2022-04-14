import React from 'react'
import styles from './Tech.module.css'
export const Tech = () => {
  return (
    <section className={styles['Tech-container']}>
        <div className={styles['Tech-percent']}>
            <span>React</span>
            <div className={styles.bar}>
                <div style={{width:'80%', backgroundColor:'white', height:'30px'}}></div>
            </div>            
            
        </div>
        <div className={styles['Tech-percent']}>
            <span>Angular</span>          
            <div className={styles.bar}>
                <div style={{width:'70%', backgroundColor:'white', height:'30px'}}></div>
            </div>
        </div>
        <div className={styles['Tech-percent']}>
            <span>Mongo</span>
        <div className={styles.bar}>
                <div style={{width:'30%', backgroundColor:'white', height:'30px'}}></div>
            </div>  
        </div>
        <div className={styles['Tech-percent']}>
            <span>React Native</span>          
            <div className={styles.bar}>
                <div style={{width:'60%', backgroundColor:'white', height:'30px'}}></div>
            </div>
        </div>

    </section>
  )
}
