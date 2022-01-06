import React,{useEffect} from "react";
//Connect functionality from React-Redux;
import { connect } from "react-redux";
//CSS Styling
import "./Leftpage.css";
//Import Components
import { Gallery } from "./Gallery/Gallery.js";

//import Action
import {userSelectedTrim} from '../../../Actions/';

const MainLeft = ({
  carData,
  currentSelection,
  trim,
  model,
  wheelSelection,
  extColor,
  viewPosition,
  userSelectedTrim
}) => {
  //Destructre data
  const { acceleration, engine, hp, torque } = carData[trim][model].spec;

  //CHECKPOINT-Default back to original standard wheel IF premium wheel is not avialble after user selects premium wheel on higher trim models.


  // let checkedWheelSelection = wheelSelection;
  // if (!carData[trim][model].spec[wheelSelection]) {
  //   checkedWheelSelection = "standard_wheel_one";
  //   userSelectedTrim(trim, model, extColor, checkedWheelSelection);
  // }
  let galleryPictures =
    carData[trim][model].spec[wheelSelection][viewPosition][extColor];

  //Specification Render for Trim Selected
  const specRender = () => {
    return (
      <div className="spec">
        <p>
          <span className="spec-category-style">Engine Type: </span>
          <span className="engine-type">{engine}</span>
        </p>
        <p>
          <span className="spec-category-style">Max. Output: </span>
          <span className="engine-type">{hp} HP</span>
        </p>
        <p>
          <span className="spec-category-style">Max. Torque: </span>
          <span className="engine-type">{torque} LB-FT</span>
        </p>
        <p>
          <span className="spec-category-style">Acceleration: </span>
          <span className="engine-type">{acceleration} Seconds</span>
        </p>
      </div>
    );
  };

  return (
    <div className="audi-container-left">
      <div className="row-section">
        <div className="col section-left">
          <div className="description">
            <h2 className="year-model">2022</h2>
            <h1 className="audi-model">
              <span className="model">Q4</span>
              <span className="current-trim-level">
                Premium 40 e-tron
                <span className="reg-mark">®</span>
              </span>
            </h1>
          </div>
          <Gallery carData={currentSelection} gallery={galleryPictures} />
        </div>
        {specRender()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.carData,
    currentSelection: state.userSelection,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    wheelSelection: state.userSelection.wheelSelection,
    extColor: state.userSelection.extColor,
    viewPosition: state.userSelection.viewPosition,
  };
};

export default connect(mapStateToProps,{userSelectedTrim})(MainLeft);
