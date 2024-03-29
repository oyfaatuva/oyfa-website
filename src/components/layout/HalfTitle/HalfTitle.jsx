import { Link } from 'react-router-dom';
import Vignette from '../../ui/Vignette/Vignette';
import FadeOnLoadImg from '../../ui/FadeOnLoadImg/FadeOnLoadImg';
import AppearingDiv from '../../ui/AppearingText/AppearingDiv';

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
            <FadeOnLoadImg imgPath={imgSrc} className='half_title_img' style={imageStyle}/>
            <Vignette/>
            <AppearingDiv className='header_container'>
                <h1 className ='half_title_heading'>{header}</h1>
            </AppearingDiv>
            <Link to={captionLink} target={newTab ? '_blank' : ''}>
                <AppearingDiv><p className='half_title_caption'>{caption}</p></AppearingDiv>
            </Link>
            
        </div>
    )
}