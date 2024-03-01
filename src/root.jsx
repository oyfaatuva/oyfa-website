import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { NAVBAR_TABS } from "./Constants";

function RootRouteComponent() {
    return (
        <>
            <ScrollToTop/>
            <Navbar logoImgSrc="./Images/_Common/Navbar_OYFA_Logo.png" navbar={NAVBAR_TABS}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default RootRouteComponent;