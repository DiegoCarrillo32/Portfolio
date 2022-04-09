import React from 'react'
import styles from './index.module.css'
import { VscGithub } from 'react-icons/vsc'
export const Footer = () => {
  return (
    <footer id='contact' className={styles['about-contact']}>
        <section>
            <h3>Contactos:</h3>
            <span>
                email: dcgreenforest@gmail.com
            </span>
            <span>
                phone: (+506) 85543228    
            </span>
            
            
        </section>
        <section>
            <h3>Redes:</h3>
            <span>
                <VscGithub/>
                <a href='https://github.com/DiegoCarrillo32'>Github</a>
            </span>
            <span>
                Instagram:
            </span>
            <span>
                Twitter:
            </span>

        </section>
    </footer>
  )
}
