
import React from "react";

//Import CSS
import "./Exterior.css";

//Import connect helper function
import { connect } from "react-redux";

//Import Actions
import { userSelectedTrim } from "../../../../../Actions";

//Import Components
import  WheelSection  from "./WheelSection/WheelSection.js";



const ExteriorSection = ({ data,trim, model, exteriorColor,userSelectedExtColor,userSelectedWheelName, userSelectedTrim,wheelSelection,intColor,sectionView }) => {


  //Render available exterior colors for Audi Q4 e-tron
  const q4ExteriorColors = () => {
    const renderColor = exteriorColor.map((values, index) => {
      return (
        <div
          key={index}
          className="exterior-individiual-color-button-container"
        >
          <img
            src={values.img}
            className="exterior-color-btn"
            alt={values.name}
            id={values.name}
            onClick={() =>
              userSelectedTrim(
                trim,
                model,
                values.name,
                wheelSelection,
                intColor,
                true,
                data[trim][model].spec.optionsPackages,
                false
              )
            }
          />
        </div>
      );
    });
    return renderColor;
  };

  return (
    <div className="">
      <div>
        <h3 className="exterior-color-title">Exterior Color:<span className="selected-exterior-color">{userSelectedExtColor}</span></h3>
        <div className="exterior-color-container">{q4ExteriorColors()}</div>
      </div>
      <div>
        <h3 className="exterior-color-title">Wheels:<span className="selected-wheel">{userSelectedWheelName}</span></h3>
        <div className="wheel-selection-master-container">
          <WheelSection />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.carData,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    exteriorColor: state.carData.extColorButtons,
    wheelSelection: state.userSelection.wheelSelection,
    intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView,
    //User Selected Exterior color property:
    userSelectedExtColor:state.userSelection.extColor,
    userSelectedWheelName:state.userSelection.wheelName
  };
};

export default connect(mapStateToProps, { userSelectedTrim })(ExteriorSection);
