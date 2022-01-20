import React, { useState } from "react";
import { connect } from "react-redux";

import "./Interior.css";

const InteriorSection = ({ data, trim, model, extColor }) => {
  //Render Interior Button
  const interiorButton = () => {
    const interiorColorButton = data[trim][model].spec.interior.intColorImage;

    const renderInteriorBtn = interiorColorButton.map((values, index) => {
      return (
        <div key={index}>
          <img src={values.url} alt={values.name} />
        </div>
      );
    });
    return renderInteriorBtn;
  };

  return <div>{interiorButton()}</div>;
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
