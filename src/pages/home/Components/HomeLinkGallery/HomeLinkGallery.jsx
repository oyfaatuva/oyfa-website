import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';

export default function HomeLinkGallery() {
    const isMobile = useMediaQuery({ maxWidth: '1000px' });

    return (
        <div className='link_gallery'>
                <Link to='/events' className='link_gallery_column'>
                    <div className='link_gallery_photo_overlay'/>
                    <AppearingDiv delay={0.7} margin={isMobile ? '0px 100px -100px 0px' : '0px 100px -40% 0px'} className='link_gallery_title'>
                        <h1 className='link_gallery_top_title'>Events</h1>
                    </AppearingDiv>
                    <img className='link_gallery_photo' src='/images/home/Events.jpg'/>
                </Link>
                <Link to='/leadership' className='link_gallery_column'> 
                    <div className='link_gallery_photo_overlay'/>
                    <AppearingDiv delay={0.9} margin={isMobile ? '0px 100px -100px 0px' : '0px 100px 0px 0px'} className='link_gallery_title'>
                        <h1 className='link_gallery_bottom_title'>Leadership</h1>
                        </AppearingDiv>
                    <img className='link_gallery_photo_middle' src='/images/home/Leadership.jpg'/>
                </Link>
                <a href='https://uvaoyfa.myportfolio.com/oyfa-2023-2024' className='link_gallery_column'>
                    <div className='link_gallery_photo_overlay'/>
                    <AppearingDiv delay={1.1} margin={isMobile ? '0px 100px -100px 0px' : '0px 100px -40% 0px'} className='link_gallery_title'>
                        <h1 className='link_gallery_top_title'>Photos</h1>
                    </AppearingDiv>
                    <img className='link_gallery_photo' src='/images/home/Photos.jpg'/>
                </a>
            </div>
    );
}