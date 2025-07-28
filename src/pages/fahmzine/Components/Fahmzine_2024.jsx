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
                        onClick={() => window.location.href='/fahmzine/fahmzine_2023'}
                        style={galleryButtonStyle}
                    >
                        FAHMzine: Kapwa (Volume 2, 2023)
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
                    <h1>FAHMzine 2024:</h1>
                    <h1><strong>Kaalaman</strong></h1>
                    <h2><em>/kaʔalaˈman/ <span>[noun]</span> </em></h2>
                    <h3>knowledge; wisdom; understanding</h3>

                </div>
                <Suspense fallback={<Loading/>}>
                    <PDFViewer fileUrl="/files/fahmzine/fahmzine_2024_issue1.pdf" />
                    <PDFViewer fileUrl="/files/fahmzine/fahmzine_2024_issue2.pdf" />
                    <PDFViewer fileUrl="/files/fahmzine/fahmzine_2024_issue3.pdf" />
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
                       <p><strong>Editors in Chief & Advocacy Chairs:  </strong>Dean Paler, Danella Lei Romera</p>
                       <br></br>
                       <p><strong>Artists:  </strong>Nico Ching (Issue 1), Mateo Paras (Issue 2), John Policarpio (Issue 3)</p>
                       <br></br>
                       <p><strong>Writers & Editors:  </strong>Aliza Susatijo, Ashley Lohr, Carina Martinez, Franceszca Penaredondo, Zoë Cacanindin, Jaco Asistores, Olivia Cordero</p>
                       <br></br> 
                    </div>
                
            </div>
        )
    }
}