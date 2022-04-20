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
  // Interior Button function
  const interiorButton = (values, index) => {
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
            false,
            data[trim][model].spec.optionsPackages,
            false,
            data[trim][model].spec.price
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
  };

  //Render Interior Button
  const renderInteriorButton = () => {

    const interiorColorButton = data[trim][model].spec.interior.intColorImage;

    const renderInteriorBtn = interiorColorButton.map((values, index) => {
      if (
        wheelSelection !== "premium_wheel_two" &&
        values.name !== "Black with Rock Gray stitching S-Line®"
      ) {
        return interiorButton(values, index);
      }
      if (wheelSelection === "premium_wheel_two") {
        return interiorButton(values, index);
      }
    });
    return renderInteriorBtn;
  };

  return (
    <div>
      <h3 className="exterior-color-title">Interior Color: <span className="interior-color-name">{intColor}</span></h3>
      <div className="interior-color-container">{renderInteriorButton()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.carData,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    extColor: state.userSelection.extColor,
    wheelSelection: state.userSelection.wheelSelection,
    intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView,
  };
};

export default connect(mapStateToProps, { userSelectedTrim })(InteriorSection);
