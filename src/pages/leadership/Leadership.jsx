import { Suspense, useMemo, lazy } from 'react'
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import YoutubeEmbed from '../../components/media/YoutubeEmbed/YoutubeEmbed';
const LeadershipArchive = lazy(() => import('./Components/LeadershipArchive/LeadershipArchive'));
const LeadershipGallery = lazy(() => import('./Components/LeadershipGallery/LeadershipGallery'));

import { toOrdinalNumber } from '../../utils/toOrdinalNumber';
import { CURRENT_BNC } from '../../Constants';
import { B_C_YOUTUBE_EMBED_ID } from '/src/Constants';

import styles from './Leadership.module.css'

const FORMAT_0 = {numBoardImgs: 1};
const FORMAT_1 = {numBoardImgs: 1, hideCouncil: true};
const FORMAT_2 = {hideTitle: true, hideCouncil: true};
const FORMAT_3 = {numBoardImgs: 5};

const FORMATS = [FORMAT_0, FORMAT_1, FORMAT_2, FORMAT_3];

const { BNC_ARCHIVE, BNC } = await import ('../../constants/bncArchive');

export default function Leadership () {
    const [searchParams, setSearchParams] = useSearchParams();
    const archivedBNC = useMemo(() => {
        return BNC_ARCHIVE.find((bnc) => bnc.bncNum == searchParams.get('bnc'));
    });
    
    const bncNum = useMemo(() => {
        return (archivedBNC ? searchParams.get('bnc') : CURRENT_BNC);
    });

    const currentBNC = (bncNum === undefined ? BNC : archivedBNC?.bnc || BNC);

    // Vertical position of HalfTitle
    const position = archivedBNC ? archivedBNC.position : 35;

    const updateBnC = (params) => {
        if(params['bnc'] != bncNum) {
            setSearchParams(params);
        }
    };

    return(
        <>
            <Helmet><title>Leadership - OYFA at UVA</title></Helmet>

            <HalfTitle header = 'Leadership' imgSrc = {`/images/leadership/bnc${bncNum}/Leadership_Title.jpg`} brightness={65} position={position} caption='Read Bios' captionLink='/leadership/bios'/>
            <Suspense>
                <LeadershipArchive archive={BNC_ARCHIVE} updateBnC={updateBnC} />
                <h1 className = {styles.leadership_heading}>{toOrdinalNumber(bncNum)} BOARD & COUNCIL</h1>        
                {B_C_YOUTUBE_EMBED_ID != '' && 
                    <div className={styles.leadership_youtube_container}>
                        <YoutubeEmbed embedId={B_C_YOUTUBE_EMBED_ID} embedWidth='50%' embedHeight='440px'/>
                    </div>
                }
            
                <LeadershipGallery bnc={currentBNC} format={archivedBNC?.format != undefined ? FORMATS[archivedBNC.format] : {numBoardImgs: 6}}/>
            </Suspense>
        </>
    )
}