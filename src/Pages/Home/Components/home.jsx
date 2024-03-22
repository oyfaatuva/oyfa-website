import { useOutletContext } from 'react-router';
import { Helmet } from 'react-helmet';
import HomeTitle from './HomeTitle';
import Introduction from './HomeIntro';
import Testimonies from './HomeTestimonies';
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