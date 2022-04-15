import React from "react";
import { connect } from "react-redux";

//Import CSS
import "./Trim.css";

import { Link } from "react-router-dom";

//Import Reducers
import { userSelectedTrim } from "../../../../../Actions";

const Trim = ({
  data,
  trim,
  model,
  extColor,
  wheelSelection,
  userSelectedTrim,
  intColor,
}) => {
  //Check model to render Register mark

  //CHECKPOINT-Default back to original standard wheel IF premium wheel is not avialble after user selects premium wheel on higher trim models.
  const checkAvailableWheels = (e, trimSelection) => {
    const clickedModel = e.currentTarget.id;
    let checkedWheelSelection = wheelSelection;
    if (!data[trimSelection][clickedModel].spec[wheelSelection]) {
      checkedWheelSelection = "standard_wheel_one";
      userSelectedTrim(trim, model, extColor, checkedWheelSelection);
    }

    return checkedWheelSelection;
  };

  const renderModelRegMark = (model) => {
    if (model.includes("e-tron")) {
      return (
        <span className="model-title-style">
          {model}
          <span className="reg-mark">®</span>
        </span>
      );
    }
    return <span className="model-title-style">{model}</span>;
  };

  //Render Engine Layout (ie. Quattro, Rear-wheel-drive)
  const renderEngineLayout = (model, trimSelection) => {
    const engineLayout = data[trimSelection][model].spec;
    // return engineLayout;
    if (engineLayout) {
      if (engineLayout.layout.includes("quattro")) {
        return (
          <span>
            {engineLayout.layout}
            <span className="reg-mark">®</span>
          </span>
        );
      }
      return engineLayout.layout;
    }
  };

  //Render List of trim and Models
  const renderTrimLevel = (trimSelection) => {
    //Array holding trimSelection of Audi trim based on package level (i.e. 'Premium', etc....)
    const trimLevelValueList = Object.keys(data[trimSelection]);
    //Omit Exterior Color buttons
    if (
      data.hasOwnProperty(trimSelection) &&
      trimSelection !== "extColorButtons"
    ) {
      return (
        <div className="trim-level-container">
          <h4 className="trim-title">{trimSelection}</h4>
          {trimLevelValueList.map((model, index) => {
            return (
              <Link to="/Exterior">
                <div
                  id={model}
                  className="trim-border-style"
                  key={index}
                  onClick={(e) =>
                    userSelectedTrim(
                      trimSelection,
                      model,
                      extColor,
                      (wheelSelection = checkAvailableWheels(e, trimSelection)),
                      intColor,
                      true,
                      data[trimSelection][model].spec.optionsPackages,
                      false,
                      data[trim][model].spec.price
                    )
                  }
                >
                  <div className="model-engine-layout-title-style">
                    <h3>{renderModelRegMark(model)}</h3>
                    <p className="engine-layout-title">
                      {renderEngineLayout(model, trimSelection)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      );
    }
  };

  //Render Package level
  const renderPackageLevel = () => {
    //Get package level from data object
    const packageLevel = Object.keys(data);
    //loop thru the package list array and pass the value as an agument to renderTrimLevel function
    const renderPackage = packageLevel.map((trimSelection, index) => {
      return (
        <div className="trim-option-width" key={index}>
          {renderTrimLevel(trimSelection)}
        </div>
      );
    });
    return renderPackage;
  };

  return <div className="trim-container-width">{renderPackageLevel()}</div>;
};

//React-Redux connect to retrieve trimSelection from the Redux Store
const thisMapStateToProps = (state) => {

  return {
    data: state.carData,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    extColor: state.userSelection.extColor,
    wheelSelection: state.userSelection.wheelSelection,
    intColor: state.userSelection.intcolor,
  };
};

export default connect(thisMapStateToProps, { userSelectedTrim })(Trim);
