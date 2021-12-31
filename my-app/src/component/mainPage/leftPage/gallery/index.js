import React from 'react';
import {useState} from 'react';

//import CSS
import './index.css';


export const Gallery = ({ carData, gallery}) => {

  //state track from local component for Exterior gallery index position
  let [ext_Gallery_Index,update_Ext_Gallery_Index] = useState(0);

  //De-strcuture for current user selection
  const { level, trim, wheel_Selection, ext_Color } = carData;

  //Function for changing gallery when user clicks left or right arrow
  const changePictures=(e)=>{
    const event = e.target.className
    if(event ==='fas fa-chevron-left'){
      update_Ext_Gallery_Index++
    }
  }

  //Gallery render
  const exterior =()=>{
    return(
      <div className="gallery-alignment">
        <img src={gallery[ext_Gallery_Index]}alt="test"/>
      </div>
    )
  }

  return (
    <div className="gallery-container">
      {exterior()}
      <div className="arrows">
        <i className="fas fa-chevron-left" onClick={(e)=>changePictures(e)}></i>
        1/8
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  )
}
