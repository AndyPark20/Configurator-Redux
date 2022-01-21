import React, { useState } from "react";

import { connect } from "react-redux";

import "./Interior.css";

//Import Actions
import { userSelectedTrim } from "../../../../../Actions";

const InteriorSection = ({
  data,
  trim,
  model,
  extColor,
  wheelSelection,
  intColor,
  sectionView,
  userSelectedTrim,
}) => {
  //Render Interior Button
  const interiorButton = () => {
    const interiorColorButton = data[trim][model].spec.interior.intColorImage;

    const renderInteriorBtn = interiorColorButton.map((values, index) => {
      return (
        <div
          key={index}
          onClick={() =>
            userSelectedTrim(
              trim,
              model,
              extColor,
              wheelSelection,
              values.name,
              false
            )
          }
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

  return (
    <div>
      <h3 className="exterior-color-title">Interior Color:</h3>
      <div className="interior-color-container">{interiorButton()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.carData,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    extColor: state.userSelection.extColor,
    wheelSelection: state.userSelection.wheelSelection,
    intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView
  };
};


export default connect(mapStateToProps, { userSelectedTrim })(InteriorSection);
