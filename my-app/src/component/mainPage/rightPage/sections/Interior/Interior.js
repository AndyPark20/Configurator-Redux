import React, { useState } from "react";
import { connect } from "react-redux";

import "./Interior.css";

const InteriorSection = ({ data, trim, model, extColor }) => {
  //Render Interior Button
  const interiorButton = () => {
    const interiorColorButton = data[trim][model].spec.interior.intColorImage;

    const renderInteriorBtn = interiorColorButton.map((values, index) => {
      return (
        <div
          key={index}
          className="interior-individiual-color-button-container"
        >
          <img
            src={values.url}
            alt={values.name}
            className="interior-color-btn"
          />
        </div>
      );
    });
    return renderInteriorBtn;
  };

  return <div>
     <h3 className="exterior-color-title">Exterior Color:</h3>
     <div className="interior-color-container">{interiorButton()}</div>
    </div>
};

const mapStateToProps = (state) => {
  return {
    data: state.carData,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    extColor: state.userSelection.extColor,
  };
};

export default connect(mapStateToProps)(InteriorSection);
