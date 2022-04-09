import React from 'react'
import styles from './index.module.css'
import {BsFileArrowUp} from 'react-icons/bs'
export const Navbar = () => {
    
    return (
        
        <nav className={styles.Navbar}>
            <ul className={styles.NavbarUl}>
                
                <li><a href={"#top"}> <BsFileArrowUp/> </a> </li>
                <li><a href={"#about-me"}>ABOUT ME</a> </li>
                <li> <a href={"#projects"}>PROJECTS</a> </li>
                <li> <a href={"#contact"}>CONTACTS</a> </li>
            </ul>
            
        </nav>
    )
}
