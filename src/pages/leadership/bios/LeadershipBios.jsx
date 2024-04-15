import { useOutletContext, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppearingDiv from '../../../components/ui/AppearingDiv/AppearingDiv';
import { BNC_ARCHIVE, BNC } from '../../../constants/bncArchive';

import styles from './LeadershipBios.module.css'

import { useEffect, useMemo } from 'react';

export default function LeadershipBios () {
    const { setTransition } = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();

    const archivedBNC = useMemo(() => {
        const bncNum = searchParams.get('bnc');
        return bncNum === undefined ? BNC : BNC_ARCHIVE.find((bnc) => bnc.bncNum == bncNum)?.bnc || BNC;
    });
    
    useEffect(() => {
        setTransition(false);
    });
    
    return(
        <>
            <Helmet><title>Leadership Bios</title></Helmet>
            {archivedBNC.map((committee, index) => (
                <div key={index} id={committee.committeeName}>
                    {committee.bios.map((bio, index2) => (
                        <CommitteeBio key={index + index2} bio={bio}/>
                    ))}
                </div>
            ))}
        </>
    )
}

function CommitteeBio ({ bio }) {
    return (
        <div className={styles.committee_bio}>
            <AppearingDiv className={styles.committee_img_column} translateMeasurement={200} margin='0px 100px -10% 0px'>
                <div className={styles.committee_img_container}><img src={bio.bioImgSrc} className={styles.committee_img + " bio_imgg"}/></div>
            </AppearingDiv>
            <CommitteeBioText bioText={bio.text}/>
        </div>
    );
}

function CommitteeBioText ({ bioText }) {
    return (  
        <AppearingDiv className={styles.committee_text_container}>
            {bioText.map((textSection) => (
                <CommitteeBioTextSection key={textSection.name} textSection={textSection}></CommitteeBioTextSection>
            ))}
        </AppearingDiv>
    );
}

function CommitteeBioTextSection ({ textSection }) {
    return (
        <div className={styles.commitee_text_section}>
            <h1 className={styles.name}>{textSection.name} ({textSection.pronouns})</h1>

            <h2>{textSection.year}</h2>
            <h2>{textSection.major}</h2>
            <h2>{textSection.city}</h2>
            <p>{textSection.bio}</p>
            {textSection.quote && 
                <>
                <br/>
                <h3><b>{textSection.name}'s Favorite Quote:</b></h3>
                    <p>{textSection.quote}</p>
                </>
            }
        </div>
    );
}