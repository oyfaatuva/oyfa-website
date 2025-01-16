import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';
const FileGallery = React.lazy(() => import('./Components/ArchivesFileGallery/ArchivesFileGallery'));

/* Main export file to index that combines all "archives" components */

export default class Archives extends Component{
    render(){
        return(
            <div>
                <Helmet><title>Archives - OYFA at UVA</title></Helmet>
                <HalfTitle header='Archives' imgSrc='./images/archives/Archives_Title_D7_JMU.jpeg' position={25} brightness={70}/>
                <Suspense fallback={<Loading/>}>
                    <FileGallery />
                </Suspense>
            </div>
        )
    }
}