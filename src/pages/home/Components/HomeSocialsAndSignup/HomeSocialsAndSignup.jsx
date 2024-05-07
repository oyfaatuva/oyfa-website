import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import jsonp from 'jsonp';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';
import FadeOnLoadImg from '../../../../components/ui/FadeOnLoadImg/FadeOnLoadImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FACEBOOK_LINK, INSTAGRAM_LINK, MAILCHIMP_BASE_URL, TWITTER_LINK, YOUTUBE_LINK } from '../../../../Constants';

import styles from './HomeSocialsAndSignups.module.css'

export default function HomeSocialsAndSignup() {
    const isMobile = useMediaQuery({ maxWidth: '1000px' });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameUrl = `${MAILCHIMP_BASE_URL}&EMAIL=${email}&FNAME=${firstName}&LNAME=${lastName}&tags=1785772`
        jsonp(nameUrl, { param: 'c' }, (_, data) => {
            const { msg, result } = data
            alert('Check Your Email!')
        })
    };

    return (
        <div className={styles.container}>
            <div className={styles.social_media_container}>
                <h1 className={styles.header}>Follow our Social Media</h1>
                <div className={styles.grid_container}>
                    <div className={styles.grid}>
                        <AppearingDiv delay={0.5} {...(isMobile ? {} : {margin: '0px 100px -200px 0px'})}>
                            <a href={FACEBOOK_LINK} target='_blank' className={styles.grid_item}>
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </AppearingDiv>
                        <AppearingDiv delay={0.7}  {...(isMobile ? {} : {margin: '0px 100px -200px 0px'})}>
                            <a href={INSTAGRAM_LINK} target='_blank' className={styles.grid_item}>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </AppearingDiv>
                        <AppearingDiv delay={0.9}>
                            <a href={YOUTUBE_LINK} target='_blank'className={styles.grid_item}>
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a>
                        </AppearingDiv>
                        <AppearingDiv delay={1.1}>
                            <a href={TWITTER_LINK} target='_blank'className={styles.grid_item}>
                                <FontAwesomeIcon icon={faXTwitter}/>
                            </a>
                        </AppearingDiv>
                    </div>
                </div>
            </div>
            <div className={styles.wio_container} translatey={0} duration={0.7}>
                <AppearingDiv translateAxis='X' translateMeasurement={100} percent={true}>
                    <h1 className={styles.header}>Sign up for our weekly newsletter <br/> "This Week in OYFA"</h1>
                </AppearingDiv>
                <FadeOnLoadImg className={styles.wio_logo} imgPath='/images/home/wio.png' duration={1.1}/>

                <form className={styles.wio_form} onSubmit={handleSubmit}>
                    <div className={styles.wio_input_container}><input className={styles.wio_input} type="text" placeholder="First Name" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/></div>
                    <div className={styles.wio_input_container}><input className={styles.wio_input} type="text" placeholder="Last Name" value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/></div>
                    <div className={styles.wio_input_container}>
                        <div className={styles.wio_input_button_container}>
                            <input className={styles.wio_input} type="email" placeholder="Email Address" value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                            <button className={styles.wio_button} type="submit">SEND</button>
                        </div>
                    </div>  
                </form>
            </div>
        </div>
    );
}