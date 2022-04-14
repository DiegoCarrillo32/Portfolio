import React from 'react'
import styles from './index.module.css'

export const Navbar = () => {
    
    return (
        
        <nav className={styles.Navbar}>
            <ul className={styles.NavbarUl}>
                <li><a href={"#about-me"}>About me</a> </li>
                <li> <a href={"#tech"}>Experience</a> </li>
                <li> <a href={"#projects"}>Projects</a> </li>
            </ul>
            
        </nav>
    )
}
