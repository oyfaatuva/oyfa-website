import { useOutletContext } from 'react-router';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HomeTitle from './Components/HomeTitle';
import Testimonies from './Components/HomeTestimonies';
import HomeSocialsAndSignup from './Components/HomeSocialsAndSignup/HomeSocialsAndSignup';
import AppearingDiv from '../../components/ui/AppearingDiv/AppearingDiv';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import useScrollPosition from './../../hooks/useScrollPosition';

import './Home.css';

export default function Home () {
    const {setNavbarScrollPosition, setNavbarScrollPositionMobile, setHide} = useOutletContext();
    const {height} = useWindowDimensions(); 
    const scrollPosition = useScrollPosition()
    
    setNavbarScrollPosition(height - 70);
    setNavbarScrollPositionMobile(430);
    setHide(true);
    
    return(
        <>
            <Helmet><title>Home</title></Helmet>
            <HomeTitle/>
            <div className='hello_container' id='helloyfa'>
                <div className="scrolling_text" style={{ transform: `translateX(-${scrollPosition/3 + 1000}px)`, top: '20px'}}>
                    THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS
                </div>    
                <AppearingDiv className='hello_text_container' translateMeasurement={50}>
                    <h1>Helloyfa!</h1>
                    <p>
                        Since 1988, OYFA has been the University of Virginia's exclusive Filipino-American undergraduate CIO.
                        OYFA exists to engage all in cultural understanding through its yearly live Barrio performance,
                        positively impact the local community through acts of service and fundraising, and secure a space 
                        for all those who are any part Young, Filipino, and American, or not at all.
                    </p>
                    <Link to='/about'>About Us</Link>
                </AppearingDiv>
                <div className="scrolling_text" style={{ transform: `translateX(${scrollPosition/3 - 1400}px)`, bottom: '20px'}}>
                    THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS
                </div>
                <AppearingDiv className='hello_photo_box2'/>
                <AppearingDiv className='hello_photo' translateAxis='X' translateMeasurement={350} delay={1}>
                    <img src='/images/home/Intro_Culturefest_Panorama.jpeg'/>
                </AppearingDiv>
            </div>

            <div className='link_gallery'>
                <Link to='/events' className='link_gallery_column'>
                    <div className='link_gallery_photo_overlay'/>
                    <AppearingDiv delay={0.7} margin='0px 100px -480px 0px' className='link_gallery_title'><h1 className='link_gallery_top_title'>Events</h1></AppearingDiv>
                    <img className='link_gallery_photo' src='/images/home/Events.jpg'/>
                </Link>
                <Link to='/leadership' className='link_gallery_column'>
                    <div className='link_gallery_photo_overlay'/>
                    <AppearingDiv delay={0.9} margin='0px 100px -20px 0px' className='link_gallery_title'><h1 className='link_gallery_bottom_title'>Leadership</h1></AppearingDiv>
                    <img className='link_gallery_photo_middle' src='/images/home/Leadership.jpg'/>
                </Link>
                <a href='https://uvaoyfa.myportfolio.com/oyfa-2023-2024' className='link_gallery_column'>
                    <div className='link_gallery_photo_overlay'/>
                    <AppearingDiv delay={1.1} margin='0px 100px -480px 0px' className='link_gallery_title'><h1 className='link_gallery_top_title'>Photos</h1></AppearingDiv>
                    <img className='link_gallery_photo' src='/images/home/Photos.jpg'/>
                </a>
            </div>

            
            <HomeSocialsAndSignup/>

            <div className='other_container'>
                <img src='images/home/ffn.jpg'/>
                <AppearingDiv className='thank_you'><h3>Thank you, 36th &lt;3</h3></AppearingDiv>
            </div>
        
            {/* <Introduction/> */}
            <Testimonies/>
        </>
    )
}