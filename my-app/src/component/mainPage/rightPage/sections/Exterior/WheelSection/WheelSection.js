import React from 'react';
import {connect} from 'react-redux';


//Import Actions
import{userSelectedTrim} from "../../../../../../Actions";


//Import CSS
import './WheelSection.css';



const WheelSection = ({
  userSelection,
  carData,
  userSelectedTrim,
  intColor,
  sectionView,
  wheelSelection
}) => {
  //Destructre data
  //For Current User Selection:
  const { trim, model, extColor } = userSelection;

  //For Wheel Selection:
  const wheelList = carData[trim][model].spec.wheels.wheelImage;

  const renderWheelList = () => {


    //function to check if user selected premium wheel two
    const checksLineWheel=(value)=>{
      if (Object.keys(value).toString() === "premium_wheel_two") {

        return "Black with Rock Gray stitching S-Line®";
      }
      return intColor;
    }


    const wheelArray = wheelList.map((value, index) => {
      return (
        <span
          key={index}
          className="wheel-picture-spacing"
          onClick={() =>
            userSelectedTrim(
              trim,
              model,
              extColor,
              Object.keys(value).toString(),
              intColor =checksLineWheel(value),
              sectionView
            )
          }
        >
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
    });
    return wheelArray;
  };

  return renderWheelList();
};

const mapStateToProps=(state)=>{
  return {
    userSelection:state.userSelection,
    carData:state.carData,
     intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView,
     wheelSelection: state.userSelection.wheelSelection,
  };
};


export default connect(mapStateToProps,{userSelectedTrim})(WheelSection)
