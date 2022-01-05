import React from 'react';
import {connect} from 'react-redux';

import './WheelSection.css';



const WheelSection =({userSelection,carData})=>{


  //Destructre data
  //For Current User Selection:
  const { trim, model, wheelSelection, wheelName, extColor, viewPosition, wheelType } =userSelection;

  //For Wheel Selection:
  const wheelList =carData[trim][model].spec.wheels.wheelImage;
  console.log(wheelList)

  const renderWheelList =()=>{
    const wheelArray = wheelList.map((value,index)=>{
      return (
        <div key={index} className="wheel-img-div-width">
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
        </div>
      );
    })
    return wheelArray;
  }


  return renderWheelList();
};

const mapStateToProps=(state)=>{
  console.log('wheel',state)
  return {
    userSelection:state.userSelection,
    carData:state.carData
  };
};


export default connect(mapStateToProps)(WheelSection)
