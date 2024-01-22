import React, {  useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdf from './ByteBeatJan2024.pdf';
// import Loading from "./Loading";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref} >
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

function FlipBook() {


    // const [loading, setLoading] = useState(true);
  
    const [numPages, setNumPages] = useState(null);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    //   setTimeout(()=>{

    //       setLoading(false);
    //   },1000)
    };
    return (
<> 

        {/* {loading && <Loading loading = {loading} />} */}
      <div className="bg-gray-900 h-screen flex flex-col justify-end items-center md:justify-center scroll-mx-2 overflow-hidden">
      <div className="text-4xl font-bold md:font-extrabold text-white">PIMR</div>
        <HTMLFlipBook width={350} height={500} showCover={true}>
            


        {[...Array(numPages).keys()].map((n) => (
                <Pages number={`${n+1}`}>
                 <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess} 
              
            >
              <Page pageNumber={n+1}  renderAnnotationLayer={false} renderTextLayer={false} width={350} className='border-3 border-black' />
            </Document>
           
            </Pages>
              ))}
        </HTMLFlipBook>
      </div>
      </>
    );
}

export default FlipBook;
