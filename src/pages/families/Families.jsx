import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';

const {Fam} = await import ('../../constants/famHeadBio');
const FamGallery = React.lazy(() => import('./Components/FamHeadGallery/FamHeadGallery'));

import styles from './Families.module.css'

export default class Families extends Component{
    render() {
        return(
            <div>
                <Helmet><title>Families - OYFA at UVA</title></Helmet>
                <HalfTitle header='Families' imgSrc='' caption='Meet our Fam Heads!' captionLink='/fam-bios'/>
                <Suspense fallback={<Loading/>}>
                    <h1 className={styles.families_heading}>FAM HEADS</h1>
                    <FamGallery fams={Fam}/>
                </Suspense>
            </div>
        )
    }
}