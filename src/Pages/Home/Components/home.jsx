import { useOutletContext } from 'react-router';
import { Helmet } from 'react-helmet';
import HomeTitle from './homeTitle';
import Introduction from './homeIntro';
import Testimonies from './homeTestimonies';

/* Main export file to index that combines all "home" components */

export default function Home () {
    const {setNavbarScrollPosition, setNavbarScrollPositionMobile} = useOutletContext();
    
    setNavbarScrollPosition(740);
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