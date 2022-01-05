
import React from "react";

//Import CSS
import "./Exterior.css";

//Import connect helper function
import { connect } from "react-redux";

//Import Actions
import { userSelectedTrim } from "../../../../../Actions";

//Import Components
import  WheelSection  from "./WheelSection/WheelSection.js";



const ExteriorSection = ({ trim, model, exteriorColor, userSelectedTrim }) => {
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
            onClick={() => userSelectedTrim(trim, model, values.name)}
          />
        </div>
      );
    });
    return renderColor;
  };

  return (
    <div className="">
      <div>
        <h3 className="exterior-color-title">Exterior Color:</h3>
        <div className="exterior-color-container">{q4ExteriorColors()}</div>
      </div>
      <div>
        <h3 className="exterior-color-title">Wheels:</h3>
        <WheelSection/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    exteriorColor: state.carData.extColorButtons,
  };
};

export default connect(mapStateToProps, { userSelectedTrim })(ExteriorSection);