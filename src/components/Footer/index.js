import React from 'react'
import styles from './index.module.css'
export const Footer = () => {
  return (
    <footer id='contact' className={styles['about-contact']}>
        <section>
            <h3>Contactos:</h3>
            <p>
                email: dcgreenforest@gmail.com
                phone: (+506) 85543228    
            </p>
            
        </section>
        <section>
            <h3>Redes:</h3>
            <p>

                Github:
                Instagram:
                Twitter:
            </p>
        </section>
    </footer>
  )
}
