import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';
import PDFViewer from '../../components/ui/PdfViewer/PdfViewer';

/* Main export file to index that combines all "fahmzine" components */

export default class Archives extends Component{
    render(){
        return(
            <div>
                <Helmet><title>Fahmzine - OYFA at UVA</title></Helmet>
                {/* This is for an image background for the half title: currently is the d7 photo from archives
                <HalfTitle header='Fahmzine' imgSrc='./images/archives/Archives_Title_D7_JMU.jpeg' position={25} brightness={70} caption='Learn about Filipino American History Month'/> */}
                <HalfTitle header='Fahmzine' blackBackground={true} caption='Learn about Filipino American History Month'/>
                <Suspense fallback={<Loading/>}>
                    <PDFViewer fileUrl="/fahmzine/fahmzine_2024_issue1.pdf" />
                    <PDFViewer fileUrl="/fahmzine/fahmzine_2024_issue2.pdf" />
                    <PDFViewer fileUrl="/fahmzine/fahmzine_2024_issue3.pdf" />
                </Suspense>
            </div>
        )
    }
}