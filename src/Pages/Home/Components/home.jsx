import HomeTitle from './homeTitle';
import Introduction from './homeIntro';
import Testimonies from './homeTestimonies';
import { useOutletContext } from 'react-router';

/* Main export file to index that combines all "home" components */

export default function Home () {
    const {setNavbarScrollPosition, setNavbarScrollPositionMobile} = useOutletContext();
    
    setNavbarScrollPosition(740);
    setNavbarScrollPositionMobile(430);

    return(
        <>
            <title>Home</title>
            <HomeTitle/>
            <Introduction/>
            <Testimonies/>
        </>
    )
}