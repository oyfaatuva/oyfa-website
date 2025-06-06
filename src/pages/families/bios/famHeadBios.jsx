import { Suspense, useEffect, useMemo, lazy, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { PageContext } from '../../PageContext';
const AppearingDiv = lazy(() => import('../../../components/ui/AppearingDiv/AppearingDiv'));

import styles from './famHeadBios.module.css'

const {Fam} = await import ('../../../constants/famHeadBio');

export default function FamBios() {
    const { setUseTransition } = useContext(PageContext);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        setUseTransition(false);
    }, [setUseTransition]);

    return (
        <>
            <Helmet><title>Family Head Bios</title></Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                {Fam.map((fam, famIndex) => (
                    fam.bios.map((bio, bioIndex) => (
                        <FamBio key={`${famIndex}-${bioIndex}`} bio={bio} famName={fam.famName} />
                    ))
                ))}
            </Suspense>
        </>
    );
}

function FamBio({ bio, famName }) {
    return (
        <div className={styles.fam_bio}>
            <AppearingDiv className={styles.fam_img_column} translateMeasurement={200} margin="0px 100px -10% 0px">
                <div id={famName} className={styles.fam_img_container}>
                    <img src={bio.bioImgSrc} className={`${styles.fam_img} bio_img`}/>
                </div>
            </AppearingDiv>

            {bio.text && (
                <AppearingDiv className={styles.fam_text_container}>
                    {bio.text.map((section, i) => (
                        <FamBioTextSection key={`${section.name}-${i}`} text={section} />
                    ))}
                </AppearingDiv>
            )}
        </div>
    );
}

function FamBioTextSection({ text }) {
    return (
        <div className={styles.fam_text_section}>
            <h1 className={styles.name}>
                {text.name} {text.pronouns && `(${text.pronouns})`}
            </h1>
            {text.year && <p>{text.year}</p>}
            {text.major && <p>{text.major}</p>}
            {text.city && <p>{text.city}<br /></p>}
            {text.bio && <p>{text.bio}</p>}
            {text.email && <p>{text.email}</p>}
            {text.extraText?.map((extra, i) => (
                <div key={i}>
                    <br />
                    <h4>{extra.header}</h4>
                    <p>{extra.text}</p>
                </div>
            ))}
        </div>
    );
}