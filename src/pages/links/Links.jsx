import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle'
import Loading from '../../components/layout/Loading/Loading';
import PDFViewer from '../../components/ui/PdfViewer/PdfViewer';
const LinkGallery = React.lazy(() => import('./Components/LinksLinkGallery'));

/* Main export file to index that combines all "links" components */

export default class Links extends Component{
    render(){
        return(
            <div>

                <Helmet><title>Links - OYFA at UVA</title></Helmet>
                <HalfTitle header = 'Links' imgSrc = './images/links/Links_Title_Culturefest.jpeg'
                brightness={90} position={25} />
                <Suspense fallback={<Loading/>}>
                    <LinkGallery />
                </Suspense>

            </div>

        )
    }
}