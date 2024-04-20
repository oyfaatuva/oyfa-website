import { Link } from 'react-router-dom';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';
import useScrollPosition from '../../../../hooks/useScrollPosition';

//TODO: Remove global css classes from Home.css and make module.css instead
export default function HomeIntroduction() {
    const scrollPosition = useScrollPosition()

    return (
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
                    THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS • THE ORGANIZATION OF YOUNG FILIPINO AMERICANS
                </div>
                <AppearingDiv className='hello_photo_box2'/>
                <AppearingDiv className='hello_photo' translateAxis='X' translateMeasurement={250} delay={0.7}>
                    <img src='/images/home/Intro_Culturefest_Panorama.jpeg'/>
                </AppearingDiv>
            </div>
    );
}