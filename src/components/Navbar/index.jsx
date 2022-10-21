import React from 'react'
import styles from './index.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import pdf from '../../assets/CVDiegoC.pdf'

export const Navbar = () => {
    
    return (
        
        
        <nav className={styles.Navbar}>
            
            <input id='toggler' type="checkbox" />
            <label htmlFor='toggler'  > <GiHamburgerMenu color='white' size={32}/> </label>
            <div className={styles.menu}>
                <ul className={styles.NavbarUl}>
                    <li><a href={"#about-me"}>About me</a> </li>
                    <li> <a href={"#tech"}>Experience</a> </li>
                    <li> <a href={"#projects"}>Projects</a> </li>
                    <li> <a  href={pdf}>Resumé</a> </li>

                </ul>
            </div>
            
        </nav>
    )
}
