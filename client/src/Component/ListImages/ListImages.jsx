import React, { useState } from 'react';
import { images } from './data';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Lightbox} from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import {Captions, Download, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

const ImageDisplay = ({onClick}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleClickImage = (index) => onClick(index)
  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'flex-start',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
  };

  const imageContainerStyle = {
    borderRadius: '20px',
    boxShadow: '0 1px 1px rgba(235, 27, 27, 0.1)',
    marginLeft: isMobile ? '0' : '20px',
    marginBottom: isMobile ? '20px' : '0',
    cursor: 'pointer'

  };

  const imageStyle = {
    width: isMobile ? '100%' : '700px',
    height: isMobile ? 'auto' : '700px',
    borderRadius: '20px'
  };

  const thumbnailStyle = {
    width: isMobile ? '150px' : '200px',
    height: isMobile ? '150px' : '200px',
    borderRadius: '10px',
    marginBottom: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div key={0} style={imageContainerStyle}>
        <img src={images[0].src} onClick={()=>{handleClickImage(0)}} alt="Descriptive Alt Text" style={imageStyle} />
      </div>
      {!isMobile && (
        <>
        
        <div key={100} style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginTop: '100px' }}>
          {images.slice(1, 3).map((img, index) => (
            <div onClick={()=>{console.log(index + 1);handleClickImage(index + 1)}} key={index + 1}><img src={img.src} alt={img.alt} style={thumbnailStyle} />
          <br/><br/><br/></div>
          ))}
        </div>
        <div key={200} style={{ display: 'flex', flexDirection: 'column', marginRight: '50px', marginTop: '100px' }}>
        {images.slice(3, 5).map((img, index) => (
            <div onClick={()=>{console.log(index + 3);handleClickImage(index + 3)}} key={index + 3}><img src={img.src} alt={img.alt} style={thumbnailStyle} />
          <br/><br/><br/></div>
        ))}
      </div>
    </>
      )}
      {isMobile && (
        <>
        
        <div style={{ display: 'flex', flexDirection: 'row', margin: "0 auto", justifyContent: 'space-between', }}>
          {images.slice(1, 3).map((img, index) => (
            <div onClick={()=>{console.log(index + 1);handleClickImage(index + 1)}} key={index + 1}><img src={img.src} alt={img.alt} style={thumbnailStyle} />
          <br/><br/><br/></div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: "0 auto", justifyContent: 'space-between', }}>
        {images.slice(3, 5).map((img, index) => (
          <div onClick={()=>{console.log(index + 3);handleClickImage(index + 3)}} key={index + 3}><img src={img.src} alt={img.alt} style={thumbnailStyle} />
          <br/><br/><br/></div>
        ))}
      </div>
    </>
      )}
    </div>
  );
};

const ListImages = () => {
  const [index, setIndex] = useState(-1)
  return (
    <>
      <ImageDisplay onClick={(currentIndex) => setIndex(currentIndex)}/>
      <Lightbox plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]} index={index} open={index >= 0} slides={images} close={()=> setIndex(-1)}/>
    </>
  );
};

export default ListImages;
