import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../../AuthContext";

import styles from './Sidebar.module.css' 

export default function Sidebar({ logoImgSrc, title, sidebarTabs }) {
    const { logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <>
            <nav className={styles.sidebar} style={isMenuOpen ? {} : {width: '57px'}}> 
                <h2 className={styles.navbar_title}>
                    <img className={styles.logo} src={logoImgSrc} style={isMenuOpen ? {} : {opacity: '0'}}/>
                    <span style={isMenuOpen ? {} : {opacity: '0'}}>{title}</span>
                    <button className={styles.toggle} id="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </h2>
                <SideBarLinks sideBarLinksDict={sidebarTabs} isMenuOpen={isMenuOpen}/>
                <div className={styles.bottom_section}>
                    <button className={styles.logout_button} onClick={() => logout()} style={isMenuOpen ? {} : {paddingLeft: '0.9rem'}}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                        <span style={isMenuOpen ? {} : {opacity: '0'}}>
                            LOG OUT
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

function SideBarLinks({ sideBarLinksDict, isMenuOpen }) {
    return (
        <ul className={styles.sidebar_list} style={isMenuOpen ? {} : {paddingLeft: '0.2rem'}}>
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
                <span style={isMenuOpen ? {} : {opacity: '0'}}>
                    {name.toUpperCase()}
                </span>
            </NavLink>
        </li>
    )
}