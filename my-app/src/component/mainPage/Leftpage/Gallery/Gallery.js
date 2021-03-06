import React from 'react';
import {useState} from 'react';

//import CSS
import './Gallery.css';


export const Gallery = ({ carData, gallery, sectionView }) => {
  //state track from local component for Exterior gallery index position
  let [extGalleryIndex, updateExtGalleryIndex] = useState(0);
  let [intGalleryIndex,updateIntGalleryIndex] = useState(0);



  //Function to add or subtract index based on interior or exterior gallery
  const renderViewSection =(e)=>{
    if(sectionView){
      changeExteriorPictures(e);
    }else{
      changeInteriorPictures(e);
    }
  }


  //(EXTERIOR)Function for changing gallery when user clicks left or right arrow
   const changeExteriorPictures = (e) => {
    const event = e.target.className;

    if (event === "fas fa-chevron-right") {
      if (extGalleryIndex !== gallery.length) {
        updateExtGalleryIndex(extGalleryIndex++);
      } else {
        updateExtGalleryIndex(0);
      }
      //User clicks LEFT arrow
    } else {
      if (extGalleryIndex !== -1) {
        updateExtGalleryIndex(extGalleryIndex--);
      } else {
        updateExtGalleryIndex(gallery.length - 1);
      }
    }
  };

  //(INTERIOR)Function for changing gallery when user clicks left or right arrow
    const changeInteriorPictures = (e) => {
      const event = e.target.className;
      if (event === "fas fa-chevron-right") {
        if (intGalleryIndex !== gallery.length) {
          updateIntGalleryIndex(intGalleryIndex++);
        } else {
          updateIntGalleryIndex(0);
        }
        //User clicks LEFT arrow
      } else {
        if (intGalleryIndex !== -1) {
          updateIntGalleryIndex(intGalleryIndex--);
        } else {
          updateIntGalleryIndex(gallery.length - 1);
        }
      }
    };


  //SWAP Current image number
  const imageIndexGallery=()=>{
    if(sectionView){
      return (
        <div>
          <span>{extGalleryIndex + 1}/</span>
          <span>{gallery.length}</span>
        </div>
      );
    }
    return (
      <div>
        <span>{intGalleryIndex + 1}/</span>
        <span>{gallery.length}</span>
      </div>
    );
  }

  //Swap counter setting based on interior or Exterior view
  const renderPictureSection =()=>{
    if(sectionView){
      return gallery[extGalleryIndex];
    }
    return gallery[intGalleryIndex];
  };

  //Gallery render
  const renderGallery = () => {
    return (
      <div className="gallery-alignment">
        <img
          src={renderPictureSection()}
          alt="gallery-size"
          className="gallery-size"
        />
      </div>
    );
  };

  return (
    <div className="gallery-container">
      {renderGallery()}
      <div className="arrows">
        <i
          className="fas fa-chevron-left"
          onClick={(e) => renderViewSection(e)}
        ></i>
        {imageIndexGallery()}
        <i
          className="fas fa-chevron-right"
          onClick={(e) => renderViewSection(e)}
        ></i>
      </div>
    </div>
  );
};
