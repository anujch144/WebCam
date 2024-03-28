import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';


function App () {
  const windowSize = useRef([
    window.innerWidth,
    window.innerHeight,
  ]);
  const webcamRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [windowWidth, setWindowWidth] = useState(windowSize.current[0])
  const [windowHeight, setWindowHeight] = useState(windowSize.current[1])

  const handleCapture = () => {
    console.log("hello")
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc)
    setImageData(imageSrc);
  };

  return (
    <div className="container" >
      <div className='guided-photo' style={{width:'90%',height:'95%'}} >

          <div style={{width:'100%',height:'100%'}} >
            <Webcam
              audio={false} 
              ref={webcamRef} 
              screenshotFormat="image/jpeg" 
              videoConstraints={{facingMode:'environment'}}
              style={{width:'100%',height:'100%'}}
            />
          </div>
       
          <div className="stencil-container">
            <svg  width="100%" height="100%" viewBox="0 0 960 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="transparent"/>
                <path d="M98.5 262.012C99.7 265.612 115.333 271.179 123 273.512L167 279.512L169.364 242.339C171.147 214.286 193.797 192.093 221.881 190.881L251.973 189.582C284.754 188.167 312.392 213.768 313.485 246.561L314.5 277.012H651L656.936 237.284C660.969 210.296 684.502 190.558 711.78 191.284L743.653 192.132C772.766 192.907 796.229 216.242 797.161 245.351L798 271.512C813.167 269.179 844.3 263.512 847.5 259.512C850.7 255.512 860.833 220.179 865.5 203.012L860 184.512C861.833 174.679 865.5 154.012 865.5 150.012C865.5 146.012 857.167 127.679 853 119.012C836.333 100.012 797.3 58.9122 774.5 46.5122C746 31.0122 534 29.5122 502.5 29.0122C477.3 28.6122 440 38.1788 424.5 43.0122L302 117.512C302 117.512 139.333 138.512 118.5 148.012L110 158.512L102 185.012L98.5 193.012V224.512L95 232.012C95.6667 240.512 97.3 258.412 98.5 262.012Z" fill="transparent" fillOpacity="0.15" stroke="#ffffff" strokeWidth="4"/>
                <circle cx="725.5" cy="268.512" r="62" fill="transparent" fillOpacity="0.15" stroke="#ffffff" strokeWidth="4"/>
                <circle cx="243.5" cy="268.512" r="62" fill="transparent" fillOpacity="0.15" stroke="#ffffff" strokeWidth="4"/>
            </svg>
          </div>
        
        
      </div>

      <div style={{position: 'relative', width:'5%'}}>
        <button onClick={handleCapture} >Capture Photo</button>
      </div>
      {/* {imageData && <img src={imageData} alt="Captured Photo" />} */}
    </div>
  );
};

export default App;

