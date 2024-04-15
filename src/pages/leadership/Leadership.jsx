import { useMemo } from 'react'
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import LeadershipArchive from './Components/LeadershipArchive/LeadershipArchive';
import { BNC_ARCHIVE, BNC } from '../../constants/bncArchive';
import LeadershipGallery from './Components/LeadershipGallery/LeadershipGallery';
import { CURRENT_BNC } from '../../Constants';
import { B_C_YOUTUBE_EMBED_ID } from '/src/Constants';
import YoutubeEmbed from '../../components/media/YoutubeEmbed/YoutubeEmbed';
import { toOrdinalNumber } from '../../utils/toOrdinalNumber';

import styles from './Leadership.module.css'

export default function Leadership () {
    const [searchParams, setSearchParams] = useSearchParams();
    const archivedBNC = useMemo(() => {
        return BNC_ARCHIVE.find((bnc) => bnc.bncNum == searchParams.get('bnc'));
    });
    
    const bncNum = useMemo(() => {
        return (archivedBNC ? searchParams.get('bnc') : CURRENT_BNC);
    });

    const currentBNC = useMemo(() => {
        return bncNum === undefined ? BNC : archivedBNC?.bnc || BNC;
    });

    // Vertical position of HalfTitle
    const position = archivedBNC ? archivedBNC.position : 35;

    const updateBnC = (params) => {
        if(params['bnc'] != bncNum) {
            setSearchParams(params);
        }
    };

    return(
        <>
            <Helmet><title>Leadership</title></Helmet>
            <HalfTitle header = 'Leadership' imgSrc = {`/images/leadership/bnc${bncNum}/Leadership_Title.jpg`} brightness={65} position={position} caption='Read Bios' captionLink='/Bios'/>
            <LeadershipArchive archive={BNC_ARCHIVE} updateBnC={updateBnC} />
            <h1 className = {styles.leadership_heading}>{toOrdinalNumber(bncNum)} BOARD & COUNCIL</h1>        
            {B_C_YOUTUBE_EMBED_ID != '' && 
                <div className={styles.leadership_youtube_container}>
                    <YoutubeEmbed embedId={B_C_YOUTUBE_EMBED_ID} embedWidth='50%' embedHeight='440px'/>
                </div>
            }
            <LeadershipGallery bnc={currentBNC} combinedBoardSection={archivedBNC?.combinedBoard}/>
        </>
    )
}