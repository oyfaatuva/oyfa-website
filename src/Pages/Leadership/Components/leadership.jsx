import {useEffect, useRef, useState} from 'react'
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import HalfTitle from '../../../components/layout/HalfTitle/HalfTitle';
import LeadershipGallery from './LeadershipGallery';
import LeadershipIntro from './LeadershipIntro';
import LeadershipArchive from './LeadershipArchive';
import { CURRENT_BNC, BOARD, COUNCIL } from '/src/Constants';
import { BNC_ARCHIVE } from '../../../constants/bncArchive';

/* Main export file to index that combines all "leadership" components */

export default function Leadership() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [dataFetched, setDataFetched] = useState(false); //Need to keep track of state as useEffect occurs after render

    const bncNum = useRef(CURRENT_BNC); //NOTE: useRef wraps input in an object with the "current" value
    const board = useRef(BOARD);
    const council = useRef(COUNCIL);

    useEffect(() => {
        if(searchParams.has('bnc')) {
            let archive = BNC_ARCHIVE.find(obj => obj.bncNum.toString() === searchParams.get('bnc'));
            if(archive !== undefined) {
                bncNum.current = searchParams.get('bnc');
                board.current = archive.board;
                council.current = archive.council;
            }
            else {
                setSearchParams('')
            }  
        }
        else {
            setSearchParams('');
            bncNum.current = CURRENT_BNC;
            board.current = BOARD;
            council.current = COUNCIL;
        }
        setDataFetched(true);
    }, [searchParams, dataFetched]);

    const updateBnC = (params) => {
        setSearchParams(params);
        window.location.reload();
    };

    return(
        <>
            <Helmet><title>Leadership</title></Helmet>
            <HalfTitle header = 'Leadership' imgSrc = {'/images/leadership/Leadership_Title_' + bncNum.current + 'B&C.jpg'} brightness={65} position={35} caption='Read Bios' captionLink='/Bios'/>
            <LeadershipArchive updateBnC = {updateBnC} /> {/*TODO: MAKE THIS ALSO TAKE PROPS FOR ENTIRE ARCHIVE BC GOOD PROGRAMMING I AM GOOD PROGRAMMER (COMPS SHOULD NOT CALL CONSTANTS) */}
            <LeadershipIntro bncNum = {bncNum.current} />
            <LeadershipGallery board = {board.current} council = {council.current} />
        </>
    )
}