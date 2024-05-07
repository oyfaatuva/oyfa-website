import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import useScrollPosition from "/src/hooks/useScrollPosition";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { MAX_WIDTH } from './../../../Constants';

import classes from "./Navbar.module.css";

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      Navbar used in our page layout to navigate between the different pages.
**  PROPS: 
**      logoImgSrc = string, file path to your image or a web link
**      navbarTabs = string, JSON array containg navbar tabs (JSON object formatted {name: "name", url: "/url"})
**  OPTIONAL PROPS:
**      useTransition = boolean, condition whether navbar transitions from opaque to solid (default true).
**      transitionScrollPositions = array, if useTransition = true, values in pixels when navbar transitions. First value
                                    is the normal screen scroll position, second is for mobile (example format: [normal, mobile]).
**      hide = boolean, condition whether the navbar should hide when the user scrolls down and reappear
               on scroll up (default false).
**
**  RETURNS:
**      Navbar component which is fixed to the top of the viewport
**==============================================================================================================*/

export default function Navbar({ logoImgSrc, navbarTabs, useTransition = true, transitionScrollPositions = [340, 250], hide = false }) {
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
            {!useTransition && <div className={classes.header_space}/>}
            <header className={classes.header} style={(hide && hidden) ? {transform: 'translateY(-60px)'} : {}}>
                <nav className={classes.nav + ` ${useTransition ? 
                        classes.nav_transition + ' ' + (transitionScrollPositions !== undefined && scrollPosition > (isMobile ? transitionScrollPositions[1] : transitionScrollPositions[0]) ? classes.nav_bg_color : '')
                        : 
                        classes.nav_bg_color}`}>
                    <NavLink to="/" className={classes.nav_logo} onClick={closeMobileMenu}>
                        <img src={logoImgSrc}/>
                    </NavLink>

                    { isMobile ? (
                        <div className={classes.nav_toggle} id="nav-toggle" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    ) : (
                        <NavBarLinks navBarLinksDict={navbarTabs} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                    )}
                </nav>
            </header>

            {/* We moved this outside of the header tag because the hide transition animation caused a visual bug where the mobile sidebar menu
                would also animate upwards slightly because the menu was a child of the header */}
            { isMobile && 
                <div className={classes.nav_menu + " " + (isMenuOpen ? classes.show_menu : "")} id="nav-menu">
                    <NavBarLinks navBarLinksDict={navbarTabs} isMobile={isMobile} closeMobileMenu={closeMobileMenu}/>
                    <div className={classes.nav_close} id="nav-close" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            }
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