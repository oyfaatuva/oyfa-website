import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { NAVBAR_TABS } from "../Constants";

/** Values that NavBar will transition to solid after passing the HalfTitle component we commonly
 * use on most pages. Since the HalfTitle is different for full screen (min 1000px width) and 
 * mobile (max 1000px width), we have to contants */
const DEFAULT_NAVBAR_TRANSITION_SCROLL = 340; 
const DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE = 250;

export default function PageLayout() {
    const [currentLocation, getCurrentLocation] = useLocalStorage('currentLocation', )
    const [scroll, setNavbarScrollPosition] = useState(DEFAULT_NAVBAR_TRANSITION_SCROLL)
    const [scrollMobile, setNavbarScrollPositionMobile] = useState(DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE)
    const [useTransition, setTransition] = useState(true)
    const [leaveGap, setLeaveGap] = useState(true)
    const [hide, setHide] = useState(false);

    return (
        <>
            <ScrollToTop/>
            <UpdateLocation setNavbarScrollPosition={setNavbarScrollPosition} setNavbarScrollPositionMobile={setNavbarScrollPositionMobile} setTransition={setTransition} setHide={setHide}/>

            <Navbar logoImgSrc="/images/_common/Navbar_OYFA_Logo.png" navbarTabs={NAVBAR_TABS} useTransition={useTransition} transitionScrollPositions={[scroll,scrollMobile]} leaveGap={leaveGap} hide={hide}/>
            <Outlet context={{setNavbarScrollPosition, setNavbarScrollPositionMobile, setTransition, setLeaveGap, setHide}}/> 
            <Footer/>
        </>
    );
}

function UpdateLocation({ setNavbarScrollPosition, setNavbarScrollPositionMobile, setTransition, setHide }) {
    const { pathname } = useLocation();
    
    useEffect(() => { 
        if(pathname !== sessionStorage.getItem("currentPath")) {
            setNavbarScrollPosition(DEFAULT_NAVBAR_TRANSITION_SCROLL);
            setNavbarScrollPositionMobile(DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE);
            setTransition(true);
            setHide(false);
            sessionStorage.setItem("currentPath", pathname);
        }
    }, [pathname]);

    return null;
}