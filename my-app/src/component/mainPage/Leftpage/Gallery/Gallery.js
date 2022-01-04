import React from 'react';
import {useState} from 'react';

//import CSS
import './Gallery.css';


export const Gallery = ({ carData, gallery}) => {

  //state track from local component for Exterior gallery index position
  let [extGalleryIndex,updateExtGalleryIndex] = useState(0);



  //Function for changing gallery when user clicks left or right arrow
  const changePictures=(e)=>{
    const event = e.target.className;

    if(event ==='fas fa-chevron-right'){
      if(extGalleryIndex !== gallery.length){
        updateExtGalleryIndex(extGalleryIndex++);
      }else{
        updateExtGalleryIndex(0);
      }
      //User clicks LEFT arrow
    }else{
      if(extGalleryIndex !==-1){
        updateExtGalleryIndex(extGalleryIndex--);
      }else{
        updateExtGalleryIndex(gallery.length-1);
      }
    }

  }

  //Gallery render
  const renderGallery =()=>{
    return(
      <div className="gallery-alignment">
        <img src={gallery[extGalleryIndex]} alt="gallery-size" className="gallery-size"/>
      </div>
    )
  }

  return (
    <div className="gallery-container">
      {renderGallery()}
      <div className="arrows">
        <i className="fas fa-chevron-left" onClick={(e) => changePictures(e)}></i>
        1/8
        <i className="fas fa-chevron-right" onClick={(e) => changePictures(e)}></i>
      </div>
    </div>
  )
}
