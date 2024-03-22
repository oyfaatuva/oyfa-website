import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
import { NAVBAR_TABS } from "../Constants";
import { useEffect, useState } from "react";

const DEFAULT_NAVBAR_TRANSITION_SCROLL = 340;
const DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE = 250;

export default function PageLayout() {
    const [scroll, setNavbarScrollPosition] = useState(DEFAULT_NAVBAR_TRANSITION_SCROLL)
    const [scrollMobile, setNavbarScrollPositionMobile] = useState(DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE)
    const [useTransition, setTransition] = useState(true)
    const [leaveGap, setLeaveGap] = useState(true)

    return (
        <>
            <ScrollToTop/>
            <UpdateLocation setNavbarScrollPosition={setNavbarScrollPosition} setNavbarScrollPositionMobile={setNavbarScrollPositionMobile} setTransition={setTransition}/>

            <Navbar logoImgSrc="/images/_common/Navbar_OYFA_Logo.png" navbarTabs={NAVBAR_TABS} useTransition={useTransition} transitionScrollPositions={[scroll,scrollMobile]} leaveGap={leaveGap}/>
            <Outlet context={{setNavbarScrollPosition, setNavbarScrollPositionMobile, setTransition, setLeaveGap}}/> 
            <Footer/>
        </>
    );
}


function UpdateLocation({ setNavbarScrollPosition, setNavbarScrollPositionMobile, setTransition }) {
    const { pathname } = useLocation();
    
    useEffect(() => { 
        if(pathname !== sessionStorage.getItem("currentPath")) {
            setNavbarScrollPosition(DEFAULT_NAVBAR_TRANSITION_SCROLL);
            setNavbarScrollPositionMobile(DEFAULT_NAVBAR_TRANSITION_SCROLL_MOBILE);
            setTransition(true);
            sessionStorage.setItem("currentPath", pathname);
        }
    }, [pathname]);

    return null;
}