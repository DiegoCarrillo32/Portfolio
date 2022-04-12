import React from 'react'
import styles from './index.module.css'
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineInstagram } from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer id='contact' className={styles['about-contact']}>
        <section>
            <h3>Contact me:</h3>
            <span>
                Email: dcgreenforest@gmail.com
            </span>
            <span>
                Phone: (+506) 85543228    
            </span>
            
            
        </section>
        <section>
            <h3>Social media:</h3>
            <span>
                <a href='https://github.com/DiegoCarrillo32'>
                    <VscGithub size={32} color={"white"}/>
                </a>
            </span>
            <span>
                <a href='https://github.com/DiegoCarrillo32'>
                <AiOutlineInstagram size={32} color={"white"}/>
                </a>
            </span>

        </section>
    </footer>
  )
}
