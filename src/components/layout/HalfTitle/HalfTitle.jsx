import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import Vignette from '../../ui/Vignette/Vignette';
const FadeOnLoadImg = lazy(() => import('../../ui/FadeOnLoadImg/FadeOnLoadImg'));
const AppearingDiv = lazy(() => import('../../../components/ui/AppearingDiv/AppearingDiv'));

import './HalfTitle.css'

/* This is a common title panel which occupies 50% screen height; appears on all pages except Home.

/*==USAGE GUIDE===================================================================================================
**  DESCRIPTION:
**      This is a common title panel which occupies 50% screen height; appears on all pages except Home.
**  PROPS: 
**      header      = string, title text
**      imgSrc      = string, file path to your image or a web link
**  OPTIONAL PROPS:
**      caption     = string, small subheading/caption text 
**      captionLink = string, optional link you want your caption text to link to
**      newTab      = string, 'true' if the link should open in a new tab, else default to same tab
**      brightness  = int, % brightness of image (100 default) if your image is too bright/dim
**      position    = int, vertical position of the image (50 default) to focus on when cropping. Basically if
**                    the image isn't centered when you crop it you can use this to move the center of the img
**                    up or down.
**  RETURNS:
**      HalfTitle component, which is an h1 title portion with an optional p caption, with optional React Link
**      component.
**==============================================================================================================*/

export default function HalfTitle ({header, imgSrc, brightness = 100, position = 50, caption, captionLink, newTab}) {
    /* Because these CSS styles can change depending on the props, we have to use JS to dynamically set them */
    const imageStyle = { filter: `brightness(${brightness}%)`, objectPosition: `center ${position}%`}
    
    return(
        <div className = 'half_title_container'>
            <Suspense>
                <FadeOnLoadImg imgPath={imgSrc} className='half_title_img' style={imageStyle}/>
                <Vignette/>
                <AppearingDiv className='header_container'>
                    <h1 className ='half_title_heading'>{header}</h1>
                </AppearingDiv>
                <Link to={captionLink} target={newTab ? '_blank' : ''}>
                    <AppearingDiv className='half_title_caption'><p>{caption}</p></AppearingDiv>
                </Link>
            </Suspense>
        </div>
    )
}

//TODO: replace framer-motion with this
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.animate_hidden');
// hiddenElements.forEach((el) => observer.observe(el));