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
                <HalfTitle header='Families' imgSrc=''/>
                <Suspense fallback={<Loading/>}>
                    <FamGallery fams={Fam}/>
                </Suspense>
            </div>
        )
    }
}