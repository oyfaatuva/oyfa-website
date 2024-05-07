import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { PageContext, PageContextProvider } from "./PageContext";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import { NAVBAR_TABS } from "../Constants";

export default function PageLayout() {
    function Page() {
        const { hideNavbar, useTransition, navbarTransitionScroll, navbarTransitionScrollMobile } = useContext(PageContext);
    
        return (
            <>
                <ScrollToTop/>
    
                <Navbar logoImgSrc="/images/_common/Navbar_OYFA_Logo.png" navbarTabs={NAVBAR_TABS} useTransition={useTransition} 
                    transitionScrollPositions={[navbarTransitionScroll, navbarTransitionScrollMobile]} hide={hideNavbar}/>
                <Outlet/>  
                <Footer/>
            </>
        );
    }

    return (
        <PageContextProvider>
            <Page/>
        </PageContextProvider>
    );
}