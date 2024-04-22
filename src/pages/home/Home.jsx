import { Suspense, lazy } from 'react';
import { useOutletContext } from 'react-router';
import { Helmet } from 'react-helmet';
import HomeTitle from './Components/HomeTitle/HomeTitle';
import useWindowDimensions from '../../hooks/useWindowDimensions';

// Async Components for code splitting
const HomeIntroduction = lazy(() => import('./Components/HomeIntroduction/HomeIntroduction'));
const HomeLinkGallery = lazy(() => import('./Components/HomeLinkGallery/HomeLinkGallery'));
const HomeSocialsAndSignup = lazy(() => import('./Components/HomeSocialsAndSignup/HomeSocialsAndSignup'));
const Testimonies = lazy(() => import('./Components/HomeTestimonies/HomeTestimonies'));
const AppearingDiv = lazy(() => import('../../components/ui/AppearingDiv/AppearingDiv'));

import './Home.css';
import Loading from '../../components/layout/Loading/Loading';

export default function Home () {
    const {setNavbarScrollPosition, setNavbarScrollPositionMobile, setHide} = useOutletContext();
    const {height} = useWindowDimensions(); 

    setNavbarScrollPosition(height - 70);
    setNavbarScrollPositionMobile(430);
    setHide(true);
    
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