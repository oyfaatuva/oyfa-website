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
        
        <AppearingDiv className={styles.grid_container}>
            {fams.map((fam, index) => (
                <div key={index} className={styles.fam_title_container}>
                    <p className={styles.fam_title_text}>{fam.famName}</p>
                    <div className={styles.fam_img_container}>
                        <HashLink to={{pathname: '/famheadbios', hash: fam.famName,}}
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}>
                        <img src={fam.famImgSrc} loading='lazy' />
                        </HashLink>
                    </div>
                    <div className={styles.fam_name_container}>
                        <div className={styles.fam_name_text}>
                            {fam.bios.map((bio, index) => (
                                <div key={index} className={styles.fam_person_text_container}>
                                    {bio.text.map((person, i) => (
                                    <p key={i}>{person.name}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </AppearingDiv>
        )
}