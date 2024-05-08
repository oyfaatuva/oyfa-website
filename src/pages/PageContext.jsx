import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

/** Values that NavBar will transition to solid after passing the HalfTitle component we commonly
 * use on most pages. Since the HalfTitle is different for full screen (min 1000px width) and 
 * mobile (max 1000px width), we have to contants */
const DEFAULT_NAVBAR_TRANSITION_SCROLL = 340; 
const DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE = 250;

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
    const { pathname } = useLocation();

    const [previousPath, setPreviousPath] = useState(null);

    /* Global State for Navbar to be used and set by pages */
    const [hideNavbar, setHideNavbar] = useState(false);
    const [useTransition, setUseTransition] = useState(true)
    const [navbarTransitionScroll, setNavbarTransitionScroll] = useState(DEFAULT_NAVBAR_TRANSITION_SCROLL)
    const [navbarTransitionScrollMobile, setNavbarTransitionScrollMobile] = useState(DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE)

    useEffect(() => { 
        if(previousPath !== pathname) {
            setNavbarTransitionScroll(DEFAULT_NAVBAR_TRANSITION_SCROLL);
            setNavbarTransitionScrollMobile(DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE);
            setUseTransition(true);
            setHideNavbar(false);
            setPreviousPath(pathname);
        }
    }, [pathname]);

    return (
        <PageContext.Provider value={{ hideNavbar, setHideNavbar, useTransition, setUseTransition, navbarTransitionScroll, setNavbarTransitionScroll,
            navbarTransitionScrollMobile, setNavbarTransitionScrollMobile
         }}>
            {children}
        </PageContext.Provider>
    );
};