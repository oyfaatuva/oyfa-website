import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../../components/layout/Loading/Loading';
import PDFViewer from '../../../components/ui/PdfViewer/PdfViewer';
const galleryButtonStyle = {
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#f8f8f8',
    cursor: 'pointer',
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
  };
  
  galleryButtonStyle[':hover'] = {
    backgroundColor: '#eaeaea'
  };
/* Main export file to index that combines all "fahmzine" components */

export default class Archives extends Component{
    render(){
        return(
            <div>
                <Helmet><title>Fahmzine - OYFA at UVA</title></Helmet>
                <HalfTitle header='FAHMzine' imgSrc='/images/fahmzine/fahmzine_header.png' caption='Learn about Filipino American History Month'/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    padding: '2rem 1rem'
                    }}>
                    {/*---TO ADD WHEN FAHMZINE ARCHIVES ARE RECEIVED---
                     <button
                        onClick={() => window.location.href='_blank'}
                        style={galleryButtonStyle}
                    >
                        FAHMzine Archives (through 2021)
                    </button>
                    */}
                    
                    <button
                        onClick={() => window.location.href='/fahmzine/fahmzine_2022'}
                        style={galleryButtonStyle}
                    >
                        FAHMzine (Volume 1, 2022)
                    </button>

                    <button
                        onClick={() => window.location.href='/fahmzine'}
                        style={galleryButtonStyle}
                    >
                        FAHMzine: Kaalaman (Volume 3, 2024)
                    </button>
                    </div>
                <div className="definitionEntry"
                style={{
                    padding: '2rem',
                    maxWidth: '800px',
                    margin: '2rem auto',
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: '#333'
                }}>
                    <h1>FAHMzine 2023:</h1>
                    <h1><strong>Kapwa</strong></h1>
                    <h1><strong>Our Culture. Our Connections.</strong></h1>
                    <h2><em>/kapwà/ <span>[noun]</span> </em></h2>
                    <h3>fellow human; a construct in Filipino culture to describe our shared identity
                    </h3>
                </div>
                <Suspense fallback={<Loading/>}>
                    <PDFViewer fileUrl="/files/fahmzine/fahmzine_2023_issue1.pdf" />
                    <PDFViewer fileUrl="/files/fahmzine/fahmzine_2023_issue2.pdf" />
                    <PDFViewer fileUrl="/files/fahmzine/fahmzine_2023_issue3.pdf" />
                </Suspense>
                <div
                    className="definitionEntry"
                    style={{
                        padding: '1.5rem 2rem',
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'left-align',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: '#333'
                    }}>
                       <p><strong>Editors in Chief & Advocacy Chairs:  </strong>Olivia Cordero, Jaco Asistores</p>
                       <br></br>
                       <p><strong>Artists:  </strong>Christine Amor, Jaco Asistores, Olivia Cordero, Sam Dioneda, Larry Egalla, Tori Ochave</p>
                       <br></br>
                       <p><strong>Writers & Editors:  </strong>Adrian Alora, Ashley Lohr, Carina Martinez, Colby Le, Franceszca Penaredondo, Franky Coo, Jenilyn Vinluan, Patrick Yuson</p>
                       <br></br> 
                    </div>
            </div>
        )
    }
}