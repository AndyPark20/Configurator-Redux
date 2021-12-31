import React from 'react';
import {useState} from 'react';


export const Gallery = ({ carData, extGallery}) => {

  //state track from local component for Exterior gallery index position
  const [ext_Gallery_Index,update_Ext_Gallery_Index] = useState(0);

  //De-strcuture for current user selection
  const { level, trim, wheel_Selection, ext_Color } = carData;

  //Function for changing gallery when user clicks left or right arrow

  //Gallery render
  const exterior =()=>{
    return(
      <div>
        <img src={extGallery[ext_Gallery_Index]}alt="test"/>
      </div>
    )
  }

  return (
    <div className="gallery-container">
      {exterior()}
      <div className="arrows">
        <i className="fas fa-chevron-left"></i>
        1/8
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}
