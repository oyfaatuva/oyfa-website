import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import useScrollPosition from "/src/hooks/useScrollPosition";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import classes from "./Navbar.module.css";

/**
 * USAGE GUIDE: to be made... I am lazy
 */

const MAX_WIDTH = '1000px' //Maximum window width to classify screen as "Mobile"

export default function Navbar({ logoImgSrc, navbarTabs, useTransition, transitionScrollPositions, leaveGap = true, hide = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: MAX_WIDTH });
    const scrollPosition = useScrollPosition()
    const [oldScrollPosition, setOldScrollPosition] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMobileMenu = () => {
        if (isMobile) { setIsMenuOpen(false); }
    };
    
    useEffect(() => {
        if(scrollPosition < oldScrollPosition) {
            setHidden(false);
        } else if (scrollPosition > 50 && scrollPosition > oldScrollPosition) {
            setHidden(true);
        }
        setOldScrollPosition(scrollPosition);
    }, [scrollPosition]);

    return (
        <>
            {!useTransition && leaveGap && <div className={classes.header_space}/>}
            <header className={classes.header} style={hidden ? {transform: 'translateY(-60px)'} : {}}>
                <nav className={classes.nav + ` ${useTransition ? 
                        classes.nav_transition + ' ' + (transitionScrollPositions !== undefined && scrollPosition > (isMobile ? transitionScrollPositions[1] : transitionScrollPositions[0]) ? classes.nav_bg_color : '')
                        : 
                        classes.nav_bg_color}`}>
                    <NavLink to="/" className={classes.nav_logo} onClick={closeMobileMenu}>
                        <img src={logoImgSrc}/>
                    </NavLink>
                    {isMobile && (
                        <div className={classes.nav_toggle} id="nav-toggle" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    )}
                    { isMobile ? (
                        <div className={classes.nav_menu + " " + (isMenuOpen ? classes.show_menu : "")} id="nav-menu">
                            <NavBarLinks navBarLinksDict={navbarTabs} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                            <div className={classes.nav_close} id="nav-close" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>

                    ) : (
                        <NavBarLinks navBarLinksDict={navbarTabs} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                    )}
                </nav>
            </header>
        </>
    );
}

function NavBarLinks({ navBarLinksDict, isMobile, closeMobileMenu }) {
    return (
        <ul className={classes.nav_list}>
            {isMobile && <NavBarLink name='HOME' url='/' closeMobileMenu={closeMobileMenu} />}
            {Object.keys(navBarLinksDict).map((componentKey) => (
                <NavBarLink key={componentKey} {...navBarLinksDict[componentKey]} closeMobileMenu={closeMobileMenu} />
            ))}
        </ul>
    );
}

function NavBarLink( { name, url, closeMobileMenu } ) {
    return (
        <li>
            <NavLink to={url.toLowerCase()} className={classes.nav_link} onClick={closeMobileMenu}>
                {name.toUpperCase()}
            </NavLink>
        </li>
    )
}