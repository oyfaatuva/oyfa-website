import {Component} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HashLink } from 'react-router-hash-link';
import AppearingDiv from '../../../../components/ui/AppearingDiv/AppearingDiv';
import { MAX_WIDTH } from './../../../../Constants';

import styles from './FamHeadGallery.module.css'

export default function FamHeadGallery({fams}) {
    const [searchParams] = useSearchParams();
    
    return(
        /*
            <AppearingDiv className={styles.grid_container}>
                <div className={styles.fam_title_container}>
                    <p className={styles.fam_title_text}>AMIHAN</p>
                    <div className={styles.fam_img_container}>
                        <img src={}/>
                    </div>
                    <div className={styles.fam_name_container}>
                        <div className={styles.fam_name_text}>
                            <p>Jaco Asistores</p>
                            <p>Francis Santos</p>
                            <p>Eric Yeatts</p>
                        </div>
                    </div>
                
                </div>
            </AppearingDiv>
            */
        <AppearingDiv className={styles.grid_container}>
            {fams.map((fam, index) => (
                <div key={index} className={styles.fam_title_container}>
                    <p className={styles.fam_title_text}>{fam.famName}</p>
                    <div className={styles.fam_img_container}>
                        <img src={fam.famImgSrc}/>
                    </div>
                    <div className={styles.fam_name_container}>
                        <div className={styles.fam_name_text}>
                            {fam.bios[0].text.map((person, i) => (
                            <p key={i}>{person.name}</p>
                        ))}
                        </div>
                    </div>
                </div>
            ))}
        </AppearingDiv>
        )
}