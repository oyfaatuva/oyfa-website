import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import styles from "./PdfViewer.module.css";

/*==TO USE:==================================================
**  EXAMPLE:
**      <PDFViewer fileUrl="/fahmzine/fahmzine_2024_issue1.pdf" />
**    
**  NOTES: - make sure that file is in 'public' folder and use filepath starting from there!
**         - pdf MUST be 1800 x 2250 pts in order to display properly; resize as necessary 
==========================================================*/

export default function PDFViewer({ fileUrl }) {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
      import.meta.url,
    ).toString();
    const containerRef = useRef(null);
const [containerWidth, setContainerWidth] = useState(0);

// Update container width on resize
useEffect(() => {
  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  updateWidth(); // Set on initial render
  window.addEventListener('resize', updateWidth);
  return () => window.removeEventListener('resize', updateWidth);
}, []);
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageRef = useRef(null);

  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setCurrentPage(1); // Reset to first page on load
    };
  
    const goToPrevPage = () => {
      if (currentPage === 2)
        setCurrentPage(1);
      else if(currentPage - 2 >=1) 
        setCurrentPage(currentPage - 2);
    }
  
    const goToNextPage = () =>{
      if (currentPage === 1)
        setCurrentPage(2);
      else if(currentPage + 2 <= numPages)
        setCurrentPage(currentPage + 2);
    }
  
    return (
        <div className={styles.pdfContainer}>
            <div className={styles.pdfWrapper} ref={containerRef}>
              <button 
              onClick={goToPrevPage}
              className={styles.arrowButton}
              disabled={currentPage <=1}  
              >
                &#60;
              </button>
            
              <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                  {currentPage === 1? (
                    <Page
                    key={`page-${currentPage}`}
                    pageNumber={1}
                    className={`${styles.pdfPageCanvas} ${styles.pageAnimated}`}
                  
                    scale={0.3}

                    renderAnnotationLayer={false} 
                    renderTextLayer={false}
                    />
                  ) : (
                    <div className={styles.pageSpread}>
                      <Page
                        key={`page-${currentPage}`}
                        pageNumber={currentPage}
                        
                        className={`${styles.pdfPageCanvas} ${styles.pageAnimated}`}
                        renderAnnotationLayer={false} 
                        renderTextLayer={false}
                        scale={0.3}
                      />
                      {currentPage + 1 <= numPages && (
                        <Page
                          key={`page-${currentPage + 1}`}
                          
                          pageNumber={currentPage + 1}
                          className={`${styles.pdfPageCanvas} ${styles.pageAnimated}`}
                          renderAnnotationLayer={false} 
                          renderTextLayer={false}
                          scale={0.3}
                        />
                      )}
                    </div>
                  )}
                   
                </Document>
            <button
              onClick={goToNextPage}
              className={styles.arrowButton}
              disabled={
                (currentPage === 1 && currentPage + 1 > numPages) ||
                (currentPage > 1 && currentPage + 1 >= numPages)
              }
            >
              &#62;
            </button>
          </div>
        </div>
    );
  }
