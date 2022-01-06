import React from 'react';
import {connect} from 'react-redux';

import './WheelSection.css';



const WheelSection =({userSelection,carData})=>{


  //Destructre data
  //For Current User Selection:
  const { trim, model, wheelSelection, wheelName, extColor, viewPosition, wheelType } =userSelection;

  //For Wheel Selection:
  const wheelList =carData[trim][model].spec.wheels.wheelImage;


  const renderWheelList =()=>{
    const wheelArray = wheelList.map((value,index)=>{
      return (
        <span key={index} className="wheel-picture-spacing">
          {Object.values(value).map((imgSrc, imgIndex) => {
            return (
              <img
                key={imgIndex}
                src={imgSrc.img}
                alt={imgSrc.wheelName}
                className="wheel-image-size"
              />
            );
          })}
        </span>
      );
    })
    return wheelArray;
  }


  return renderWheelList();
};

const mapStateToProps=(state)=>{
  return {
    userSelection:state.userSelection,
    carData:state.carData
  };
};


export default connect(mapStateToProps)(WheelSection)
