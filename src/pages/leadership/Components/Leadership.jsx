import { useMemo, useState} from 'react'
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import HalfTitle from '../../../components/layout/HalfTitle/HalfTitle';
import LeadershipIntro from './LeadershipIntro';
import LeadershipArchive from './LeadershipArchive';
import { BNC_ARCHIVE, BNC } from '../../../constants/bncArchive';
import LeadershipGallery from './LeadershipGallery/LeadershipGallery';
import { CURRENT_BNC } from '../../../Constants';

/* Main export file to index that combines all "leadership" components */

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

    const position = useMemo(() => {
        return (archivedBNC ? archivedBNC.position : 35);
    });

    const updateBnC = (params) => {
        setSearchParams(params);
        window.location.reload();
    };

    return(
        <>
            <Helmet><title>Leadership</title></Helmet>
            <HalfTitle header = 'Leadership' imgSrc = {`/images/leadership/bnc${bncNum}/Leadership_Title.jpg`} brightness={65} position={position} caption='Read Bios' captionLink='/Bios'/>
            <LeadershipArchive archive={BNC_ARCHIVE} updateBnC={updateBnC} />
            <LeadershipIntro bncNum = {bncNum} />
            <LeadershipGallery bnc={currentBNC}/>
        </>
    )
}