import { Suspense, useEffect, useMemo, lazy, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { PageContext } from '../../PageContext';
const AppearingDiv = lazy(() => import('../../../components/ui/AppearingDiv/AppearingDiv'));

import styles from './LeadershipBios.module.css'

// Async constant import to reduce bundle
const { BNC_ARCHIVE, BNC } = await import ('../../../constants/bncArchive');

export default function LeadershipBios () {
    const { setUseTransition } = useContext(PageContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const archivedBNC = useMemo(() => {
        const bncNum = searchParams.get('bnc');
        return bncNum === undefined ? BNC : BNC_ARCHIVE.find((bnc) => bnc.bncNum == bncNum)?.bnc || BNC;
    });
    
    useEffect(() => {
        setUseTransition(false);
    });
    
    return(
        <>
            <Helmet><title>Leadership Bios</title></Helmet>
            <Suspense>
                {archivedBNC.map((committee, index) => (
                    <>
                        {committee.bios.filter(bio => bio.bioImgSrc).map((bio, index2) => (
                            <CommitteeBio key={index + index2} bio={bio} committeeName={committee.committeeName}/>
                        ))}
                    </>
                ))}
            </Suspense>
        </>
    )
}

function CommitteeBio ({ bio, committeeName }) {
    return (
        <div className={styles.committee_bio}>
            <AppearingDiv className={styles.committee_img_column} translateMeasurement={200} margin='0px 100px -10% 0px'>
                <div id={committeeName} className={styles.committee_img_container}><img src={bio.bioImgSrc} className={styles.committee_img + " bio_img"}/></div>
            </AppearingDiv>
            {bio.text && <CommitteeBioText bioText={bio.text}/>}
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

function CommitteeBioTextSection ({ textSection, fontSize }) {
    return (
        <div className={styles.commitee_text_section}>
            <h1 className={styles.name}>{textSection.name} {textSection.pronouns ? (`(${textSection.pronouns})`) : ''}</h1>

             
            <p>{textSection.year}</p>
            <p>{textSection.major}</p>
            {textSection.city &&<p>{textSection.city}<br/></p>}
            {textSection.bio && <p>{textSection.bio}</p>}
            {textSection.quote && 
                <>
                    <br/>
                    <h3>{textSection.name}'s Favorite Quote:</h3>
                        <p>{textSection.quote}</p>
                </>
            }

            <p>{textSection.email}</p>

            {textSection.extraText?.map((extraText) => (
                <>
                    <br/>
                    <h4>{extraText.header}</h4>
                    <p>{extraText.text}</p>
                </>
            ))}
        </div>
    );
}