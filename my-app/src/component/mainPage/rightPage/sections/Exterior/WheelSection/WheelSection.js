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
  wheelSelection,
  currentSelection,
}) => {
  //Destructre data
  //For Current User Selection:
  const { trim, model, extColor } = userSelection;

  //For Wheel Selection:
  const wheelList = carData[trim][model].spec.wheels.wheelImage;

  //Function to populate wheel name when user clicks wheel choices
  const renderWheelName =(wheelType)=>{

    const wheelNameArray = carData[trim][model].spec.wheels.wheelImage;
    const wheelName=wheelNameArray.map((values,index)=>{


    })
    return wheelType
  }

  const renderWheelList = () => {
    //function to check if user selected premium wheel two
    const checksLineWheel = (value) => {

      if (Object.keys(value).toString() === "premium_wheel_two") {
        return "Black with Rock Gray stitching S-Line®";
      }
      return intColor;
    };

    const wheelArray = wheelList.map((value, index) => {
      return (
        <span
          key={index}
          className="wheel-picture-spacing"
        >
          {Object.values(value).map((imgSrc, imgIndex) => {
            return (
              <img
                key={imgIndex}
                src={imgSrc.img}
                alt={imgSrc.wheelName}
                className="wheel-image-size"
                onClick={(e) =>
                  userSelectedTrim(
                    trim,
                    model,
                    extColor,
                    //Issue here
                    renderWheelName(Object.keys(value).toString()),
                    (intColor = checksLineWheel(value)),
                    sectionView,
                    carData[trim][model].spec.optionsPackages,
                    null,
                    currentSelection.price,
                    imgSrc.wheelName
                  )
                }
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
    carData: state.carData,
    userSelection: state.userSelection,
    intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView,
    wheelSelection: state.userSelection.wheelSelection,
    currentSelection: state.userSelection,
  };
};


export default connect(mapStateToProps,{userSelectedTrim})(WheelSection)
