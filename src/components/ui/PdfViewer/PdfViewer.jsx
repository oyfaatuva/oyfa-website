import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import styles from "./PdfViewer.module.css";

/*==TO USE:==================================================
**  EXAMPLE:
**      <PDFViewer fileUrl="/fahmzine/fahmzine_2024_issue1.pdf" />
**
**  NOTE: make sure that file is in 'public' folder and use filepath starting from there! 
==========================================================*/

export default function PDFViewer({ fileUrl }) {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
      import.meta.url,
    ).toString();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const pageRef = useRef(null);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
      setPageNumber(1); // Reset to first page on load
    };
  
    const goToPrevPage = () =>
      setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  
    const goToNextPage = () =>
      setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  
    return (
        <div className={styles.pdfContainer}>
            <div className={styles.pdfWrapper}>
                <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page
                    pageNumber={pageNumber}
                    scale={0.3}
                    className={styles.pdfPageCanvas}
                    renderAnnotationLayer={false} 
                    renderTextLayer={false}
                    />
                </Document>

                <div className={styles.pdfControls}>
                    <button className="btn btn btn-outline-dark" onClick={goToPrevPage} disabled={pageNumber <= 1}>
                    ⬅ Previous
                    </button>

                    {/* <span> Page {pageNumber} of {numPages} </span> */}

                    <button className="btn btn btn-outline-dark" onClick={goToNextPage} disabled={pageNumber >= numPages}>
                    Next ➡
                    </button>
                </div>
            </div>
        </div>
    );
  }
