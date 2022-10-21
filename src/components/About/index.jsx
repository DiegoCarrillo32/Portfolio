import React, {useEffect, useRef} from 'react'
import img3 from '../../assets/diegoh2.jpg'
import styles from './About.module.css'
import {useInView} from "framer-motion";
export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
  return (
          <div className={styles['about-me']} ref={ref} style={{
              transform: isInView ? "none" : "translateX(-300px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}   >
              <h1 className={styles.title} id='about-me' >WHO AM I?</h1>
              <div className={styles['about-me-body']}>
                  <p> I am a Junior software engineer from Costa Rica, currently studying and going through my third year of career.
                      I am very passionate about learning and web development, I been learning different frameworks and libraries as Next, Angular or React.
                      I like to learn new technologies in my free time and do sports!
                  </p>
                  <div className={styles['about-me-img']}>

                      <img src={img3} alt="" width={'auto'} height={'400px'} />
                  </div>
              </div>
          </div>

  )
}
