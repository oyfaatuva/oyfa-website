import { useOutletContext } from 'react-router';
import { Helmet } from 'react-helmet';
import HomeTitle from './homeTitle';
import Introduction from './homeIntro';
import Testimonies from './homeTestimonies';
import useWindowDimensions from './../../../hooks/useWindowDimensions';

/* Main export file to index that combines all "home" components */

export default function Home () {
    const {setNavbarScrollPosition, setNavbarScrollPositionMobile} = useOutletContext();
    const {height} = useWindowDimensions(); 
    
    setNavbarScrollPosition(height - 70);
    setNavbarScrollPositionMobile(430);

    return(
        <>
            <Helmet><title>Home</title></Helmet>
            <HomeTitle/>
            <Introduction/>
            <Testimonies/>
        </>
    )
}