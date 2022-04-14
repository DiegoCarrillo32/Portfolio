import React from 'react'
import styles from './index.module.css'
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer id='contact' className={styles['about-contact']}>
        <section className={styles['section-display-col']}>
            <h3>Contact me:</h3>
            <span>
                Email: dcgreenforest@gmail.com
            </span>
            <span>
                Phone: (+506) 85543228    
            </span>
            
            
        </section>
        <section >
          
          <div className={styles['section-display-row']} >

            <span>
                <a href='https://github.com/DiegoCarrillo32'>
                    <VscGithub size={32} color={"white"}/>
                </a>
            </span>
            <span>
            <a href='https://www.linkedin.com/in/diego-carrillo-695a39208/'>
              <AiOutlineLinkedin size={32} color={"white"} />
            </a>
          </span>
            <span>
                <a href='https://www.instagram.com/datacode32/'>
                <AiOutlineInstagram size={32} color={"white"}/>
                </a>
            </span>
            {/* <span>
            <a href='https://github.com/DiegoCarrillo32' >
              <AiOutlineTwitter size={32} color={"white"} />
            </a>
          </span> */}
          </div>

        </section>
    </footer>
  )
}
