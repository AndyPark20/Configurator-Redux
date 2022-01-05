import React from 'react';
import {connect} from 'react-redux';

import './WheelSection.css'



const WheelSection =({userSelection,carData})=>{


  //Destructre data
  //For Current User Selection:
  const { trim, model, wheelSelection, wheelName, extColor, viewPosition, wheelType } =userSelection;

  //For Wheel Selection:
  const wheelList =carData[trim][model].spec.wheels.wheelImage[wheelType]

  const renderWheelList =()=>{
    const wheelArray = wheelList.map((value,index)=>{
      return(
        <div key={index}>
          {Object.values(value).map((imgSrc,imgIndex)=>{
            return(
              <div key={imgIndex}>
                <img src={imgSrc.img} alt={imgSrc.wheelName} className="wheel-image-size"/>
              </div>
            )
            })}
        </div>
      )
    })
    return wheelArray;
  }


  return <div>{renderWheelList()}</div>;
};

const mapStateToProps=(state)=>{
  console.log('wheel',state)
  return {
    userSelection:state.userSelection,
    carData:state.carData
  };
};


export default connect(mapStateToProps)(WheelSection)