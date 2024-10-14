// src/components/PdfViewer.tsx
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import styles from '../styles/PdfViewer.module.css';

// Set up the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.mjs`;

interface PdfViewerImp {
    src: string;
    alt?: string;
}

const PdfViewer: React.FC<PdfViewerImp> = ({ src, alt }) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [pageDimensions, setPageDimensions] = useState({ width: 1, height: 1 }); // Holds the current page's aspect ratio

    useEffect(() => {
        const handleResize = () => {
            const containerElement = document.querySelector(`.${styles['pdf-container']}`);
            if (containerElement) {
                setContainerWidth(containerElement.clientWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const onPageLoadSuccess = ({ width, height }: { width: number; height: number }) => {
        setPageDimensions({ width, height });
    };

    const goToNextPage = () => setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages!));
    const goToPrevPage = () => setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));

    // Calculate aspect ratio based height adjustment
    const aspectRatio = pageDimensions.height / pageDimensions.width;
    const calculatedHeight = containerWidth * aspectRatio;

    return (
        <div className={styles['pdf-container']}>
            <div className={styles['pdf-preview']} style={{ height: calculatedHeight }}>
                <Document
                    file={src}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className={styles['pdf-document']}
                >
                    <Page
                        pageNumber={pageNumber}
                        width={containerWidth}
                        onLoadSuccess={onPageLoadSuccess}
                    />
                </Document>
                <div className={styles['pdf-controls']}>
                    <button onClick={goToPrevPage} className={styles['btn']} disabled={pageNumber <= 1}>
                        Previous
                    </button>
                    <p className={styles['page-info']}>
                        Page {pageNumber} of {numPages}
                    </p>
                    <button onClick={goToNextPage} className={styles['btn']} disabled={pageNumber >= numPages!}>
                        Next
                    </button>
                </div>
            </div>
            {alt && <div className={styles['pdf-alt']}>{alt}</div>}
        </div>
    );
};

export default PdfViewer;
