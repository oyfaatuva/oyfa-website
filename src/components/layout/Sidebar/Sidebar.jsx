import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShirt, faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './Sidebar.module.css' 

export default function Sidebar({ logoImgSrc, sidebarTabs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className={styles.sidebar + " " + (isMenuOpen ? "" : styles.hide)}> 
                <h2 className={styles.navbar_title}>
                    <img className={styles.logo} src="/images/_common/Navbar_OYFA_Logo.png"/>
                    ADMIN
                    <button id="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </h2>
                <SideBarLinks sideBarLinksDict={sidebarTabs} isMenuOpen={isMenuOpen}/>
                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            </nav>
        </>
    );
}

function SideBarLinks({ sideBarLinksDict, isMenuOpen }) {
    return (
        <ul className={styles.sidebar_list}>
            {Object.keys(sideBarLinksDict).map((componentKey) => (
                <SideBarLink key={componentKey} {...sideBarLinksDict[componentKey]} isMenuOpen={isMenuOpen}/>
            ))}
        </ul>
    );
}

function SideBarLink( { name, icon, url, isMenuOpen } ) {
    return (
        <li>
            <NavLink to={url.toLowerCase()} className={styles.nav_link}>
                <FontAwesomeIcon icon={icon}/>
                <p className={( isMenuOpen ? "" : styles.nav_link_text_hidden)}>
                    {name.toUpperCase()}
                </p>
            </NavLink>
        </li>
    )
}