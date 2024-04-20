import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import History from './Components/AboutHistory';
import Mission from './Components/AboutMission';

/* Main export component to index that combines all "About" components */

export default function About () {
    const {setHide} = useOutletContext();
    setHide(true);

    return(
        <>
            <Helmet><title>About</title></Helmet>
            <HalfTitle header = 'About' imgSrc = './images/about/About_Title_Battle.jpeg'
            brightness={80} position={40}/>
            <History />
            <Mission />
        </>
    )
}