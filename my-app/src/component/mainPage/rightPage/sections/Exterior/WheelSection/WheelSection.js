import React from 'react';
import {connect} from 'react-redux';


//Import Actions
import{userSelectedTrim} from "../../../../../../Actions";


//Import CSS
import './WheelSection.css';



const WheelSection =({userSelection,carData,userSelectedTrim})=>{


  //Destructre data
  //For Current User Selection:
  const { trim, model,extColor } =userSelection;

  //For Wheel Selection:
  const wheelList =carData[trim][model].spec.wheels.wheelImage;


  const renderWheelList =()=>{
    const wheelArray = wheelList.map((value,index)=>{
      return (
        <span key={index} className="wheel-picture-spacing" onClick={()=>userSelectedTrim(trim,model,extColor,(Object.keys(value).toString()))}>
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
  console.log(state)
  return {
    userSelection:state.userSelection,
    carData:state.carData
  };
};


export default connect(mapStateToProps,{userSelectedTrim})(WheelSection)
