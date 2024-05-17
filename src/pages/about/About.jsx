import React, { Suspense, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { PageContext } from '../PageContext';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';
const History = React.lazy(() => import('./Components/AboutHistory'));
const Mission = React.lazy(() => import('./Components/AboutMission'));

/* Main export component to index that combines all "About" components */

export default function About () {
    const { setHideNavbar } = useContext(PageContext);

    useEffect(() => {
        setHideNavbar(true);
    });

    return(
        <>
            <Helmet><title>About - OYFA at UVA</title></Helmet>
            <HalfTitle header = 'About' imgSrc = './images/about/About_Title_Battle.jpeg'
            brightness={80} position={40}/>
            <Suspense fallback={<Loading/>}>
                <History />
                <Mission />
            </Suspense>
        </>
    )
}