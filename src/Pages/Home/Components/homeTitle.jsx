/********************************************************************************************************
** This is the Title page, the first part of the home screen you see when visiting oyfaatuva.com
** This code is very decomposed for your convinience, parent TitleScreen class renders a react-bootstrap
** carousel. Carousel uses Array.map to dynamically render Carousel.Items for each dictionary you pass as
** props in the content array. The parent class also renders a Title component.
**
** for API documentation on the react-bootstrap Carousel, visit https://react-bootstrap.netlify.app/docs/components/carousel/
*/

import {Component} from 'react'
import {Carousel} from 'react-bootstrap';
import Vignette from '../../../components/ui/Vignette/Vignette';
import FadeOnLoadImg from '../../../components/ui/FadeOnLoadImg/FadeOnLoadImg';
import AppearingDiv from '../../../components/ui/AppearingText/AppearingDiv';

import '../Stylesheets/homeTitle.css';

export default class HomeTitle extends Component{
    render(){

        /* Carousel Variables */
        const timeBeforeSwitch = 5000 //time in milliseconds
        const content = [] //push more content in the following format to automatically add new slides as you see fit
        const imgDir = './images/home/' //images for this file are in public/images/home
        
        content.push(
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
                link: 'https://uvaoyfa.myportfolio.com/oyfa-2022-2023'
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
                link: 'https://www.youtube.com/watch?v=zWFKvAuphp8&ab_channel=OYFAatUVA'
            },
            //...continue as you see fit
        ) 

        return(
            <>
                <TitleCarousel timeBeforeSwitch={timeBeforeSwitch} content = {content}/>
                <Title/>
            </>
        )
    }
}

class Title extends Component{
    render(){
        return(
                <AppearingDiv className={'title_parent'}>
                    <h1 className = 'title_h1'>
                        Organization of Young
                        <br></br>
                        Filipino Americans
                    </h1>
                </AppearingDiv>
        )
    }
}

class TitleCarousel extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const timeBeforeSwitch = this.props.timeBeforeSwitch
        const content = this.props.content

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
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        )
    }
}

function CarouselContent ( {index, imgSrc, captionHeader, captionPara, link } ) {
    return(
        <>
            <div className = 'title_img_container'>
                {index === 0 ?
                    <FadeOnLoadImg imgPath={imgSrc}/>
                    :
                    <img src={imgSrc}/>
                }
                <Vignette/>
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
