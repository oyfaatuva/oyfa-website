import { Suspense, lazy, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageContext } from '../PageContext';
import HomeTitle from './Components/HomeTitle/HomeTitle';
import Loading from '../../components/layout/Loading/Loading';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Async Components for code splitting
const HomeIntroduction = lazy(() => import('./Components/HomeIntroduction/HomeIntroduction'));
const HomeLinkGallery = lazy(() => import('./Components/HomeLinkGallery/HomeLinkGallery'));
const HomeSocialsAndSignup = lazy(() => import('./Components/HomeSocialsAndSignup/HomeSocialsAndSignup'));
const Testimonies = lazy(() => import('./Components/HomeTestimonies/HomeTestimonies'));
const AppearingDiv = lazy(() => import('../../components/ui/AppearingDiv/AppearingDiv'));

import './Home.css';
import { useEffect } from 'react';

export default function Home () {
    const { setHideNavbar, setNavbarTransitionScroll, setNavbarTransitionScrollMobile } = useContext(PageContext);

    const {height} = useWindowDimensions(); 

    useEffect(() => {
        setNavbarTransitionScroll(height - 70);
        setNavbarTransitionScrollMobile(430);
        setHideNavbar(true);
    });
    
    return(
        <>
            <Helmet><title>Home</title></Helmet>
            <HomeTitle/>

            <Suspense fallback={<Loading/>}>
                <HomeIntroduction/>
                <HomeLinkGallery/>
                <HomeSocialsAndSignup/>
                <div className='other_container'>
                    <img src='images/home/ffn.jpg'/>
                    <AppearingDiv className='thank_you'><h3>Thank you, 36th &lt;3</h3></AppearingDiv>
                </div>
                <Testimonies/>
            </Suspense>
        </>
    )
}