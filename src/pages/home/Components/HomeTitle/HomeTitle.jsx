/********************************************************************************************************
** This is the Title page, the first part of the home screen you see when visiting oyfaatuva.com
** This code is very decomposed for your convinience, parent TitleScreen class renders a react-bootstrap
** carousel. Carousel uses Array.map to dynamically render Carousel.Items for each dictionary you pass as
** props in the content array. The parent class also renders a Title component.
**
** for API documentation on the react-bootstrap Carousel, visit https://react-bootstrap.netlify.app/docs/components/carousel/
*/
import { Suspense, lazy } from 'react';
import { Carousel } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Vignette from '../../../../components/ui/Vignette/Vignette';
const FadeOnLoadImg = lazy(() => import('../../../../components/ui/FadeOnLoadImg/FadeOnLoadImg'));
const AppearingDiv = lazy(() => import('../../../../components/ui/AppearingDiv/AppearingDiv'));
import useScrollPosition from "/src/hooks/useScrollPosition";

import './HomeTitle.css';

//TODO: Remove global css classes from HomeTitle.css and make module.css instead
export default function HomeTitle () {
    const scrollPosition = useScrollPosition()
    const isMobile = useMediaQuery({ maxWidth: '1000px' });

    /* Carousel Variables */
    const timeBeforeSwitch = 5000 //time in milliseconds
    const imgDir = './images/home/' //images for this file are in public/images/home
    
    const content = [
        {
            imgSrc: imgDir + '36th_BnC.jpg',
            captionHeader: '36th Board and Council',
            captionPara: 'Meet our leadership team',
            link: '/leadership'
        },
        {
            imgSrc: imgDir + 'gbm.jpg',
            captionHeader: 'October General Body Meeting',
            captionPara: 'Join our community',
            link: 'https://www.facebook.com/groups/oyfaatuva/'
        },
        {
            imgSrc: imgDir + 'oyfa_volleyball_IMs.jpg',
            captionHeader: 'Beach Volleyball IM Team',
            captionPara: 'Join Chilling Out with OYFA',
            link: 'https://www.facebook.com/groups/596905140414588/'
        },
        {
            imgSrc: imgDir + 'Title_Fourth_Year_Modern.jpeg',
            captionHeader: '4th Year Modern, Barrio 2023',
            captionPara: 'View more pictures',
            link: 'https://uvaoyfa.myportfolio.com/oyfa-2022-2023',
            brightness: 65
        },
        {
            imgSrc: imgDir + 'culture.jpg',
            captionHeader: 'Taste of Barrio',
            captionPara: 'Join Barrio !',
            link: ''
        },
        {
            imgSrc: imgDir + 'Title_First_Year_Modern.jpeg',
            captionHeader: '1st Year Modern, Barrio 2023',
            captionPara: 'Watch the performance',
            link: 'https://www.youtube.com/watch?v=zWFKvAuphp8&ab_channel=OYFAatUVA',
            brightness: 65
        },
        //...continue as you see fit
    ]

    return (
        <div className='title_container'>
            <Suspense>
                <TitleCarousel timeBeforeSwitch={timeBeforeSwitch} content={content} isMobile={isMobile}/>
                <Title/>
            </Suspense>
            <a className='down_button' onClick={() => {
                const helloyfaElement = document.getElementById('helloyfa');
                helloyfaElement?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })
            }} style={scrollPosition > 400 ? {opacity: 0} : {}}>
                <img src='/icons/down_arrow.svg'/>
            </a>
        </div>
    )
}

function Title () {
    return(
        <AppearingDiv className={'title_parent'}>
            <h1 className = 'title_h1'>
                Organization of Young
                <br/>
                Filipino Americans
            </h1>
        </AppearingDiv>
    )
}

function TitleCarousel ({timeBeforeSwitch, content, isMobile}) {
    return(
        <Carousel fade={true} indicators={false} touch={true}>
            {content.map((item, index) => (
                <Carousel.Item interval={timeBeforeSwitch} key={index}>
                    <CarouselContent
                        index={index}
                        imgSrc={item.imgSrc}
                        captionHeader={item.captionHeader}
                        captionPara={item.captionPara}
                        link={item.link}
                        brightness={item.brightness}
                        objectPosition={item.objectPosition}
                        isMobile={isMobile}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

function CarouselContent ( {index, imgSrc, captionHeader, captionPara, link, brightness, objectPosition, isMobile} ) {
    return(
        <>
            <div className = 'title_img_container'>
                {index === 0 ?
                    <FadeOnLoadImg imgPath={imgSrc} style={{filter: `brightness(${brightness}%)`, objectPosition: `${objectPosition}`}}/>
                    :
                    <img src={imgSrc} style={{filter: `brightness(${brightness}%)`, objectPosition: `${objectPosition}`}}/>
                }
                <Vignette blur={250} radius={isMobile ? 120 : 180} opacity={0.62}/>
            </div>
            <Carousel.Caption className = 'title_caption'>
                <AppearingDiv><h3 className = 'title_caption_header'>{captionHeader}</h3></AppearingDiv>
                {link !== undefined && link !== ''  ?
                    <a href = {link} target={link.charAt(0) === '/' ? '' : '_blank'} className = 'title_link'>
                        <AppearingDiv><p className = 'title_caption_paragraph'>{captionPara}</p></AppearingDiv>
                    </a>
                    :
                    <AppearingDiv><p className = 'title_caption_paragraph'>{captionPara}</p></AppearingDiv>
                }
            </Carousel.Caption>
        </>
    );
}
