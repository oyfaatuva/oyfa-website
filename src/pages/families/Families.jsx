import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';

const { Fam } = await import('../../constants/famHeadBio');
const FamGallery   = React.lazy(() => import('./Components/FamHeadGallery/FamHeadGallery'));
const FamHeadInsta = React.lazy(() =>  import('./Components/FamHeadGallery/FamInstaGallery/FamHeadInsta.jsx'));


const IG_HANDLES = {
  AMIHAN:  'oyfaamihan',
  MATAPANG:'oyfamatapang',
  MAYARI:  'oyfamayari',
  YAHAN:   'oyfayahan',
};

const IG_POSTS = {
    AMIHAN: 'https://www.instagram.com/p/DBw9SSQSsW5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    MATAPANG: 'https://www.instagram.com/p/DCuK9R2p0k6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    MAYARI: 'https://www.instagram.com/reel/DAPmQXntsUv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    YAHAN: 'https://www.instagram.com/p/DANAuRlNDcb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
}

import styles from './Families.module.css'

export default class Families extends Component{
    render() {
        return(
            <div>
                <Helmet><title>Families - OYFA at UVA</title></Helmet>
                <HalfTitle header='Families' imgSrc='/images/families/Families_Title.jpg' caption='Meet our Fam Heads!' captionLink='/fam-bios'/>
                <Suspense fallback={<Loading/>}>
                    <h1 className={styles.families_heading}>FAM HEADS</h1>
                    <FamGallery fams={Fam}/>
                    { /*
                    <h1 className={styles.families_heading}>FOLLOW OUR FAM INSTAS</h1>
                    <FamHeadInsta
                    fams={Fam}
                    handlesByFam={IG_HANDLES}
                    postsByFam={IG_POSTS}
                    title={null} // we already render the heading above
                    />
                    */ }
                </Suspense>
            </div>
        )
    }
}