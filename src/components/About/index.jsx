import React from 'react'
import img3 from '../../assets/diegoh2.jpg'
import styles from './About.module.css'
export const About = () => {
  return (
    <div className={styles['about-me']}>
    <h1 className={styles.title} id='about-me' >Who am I?</h1>
    <div className={styles['about-me-body']}>
      <p> I am a Junior software engineer from Costa Rica, currently studying and going through my third year of career.
        I am very passionate about learning and web development, I been learning different frameworks and libraries as Next, Angular or React.
        I like to learn new technologies in my free time and do sports!
      </p>
      <div className={styles['about-me-img']}>

        <img src={img3} alt="" width={'auto'} height={'400px'} />
        {/* <img src={img2} alt="" width={'300px'} height={'auto'} /> */}
      </div>
    </div>
  </div>
  )
}
