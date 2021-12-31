import React from "react";
import Data from "../../DataObject";

//Connect functionality from React-Redux;
import { connect } from 'react-redux';

//CSS Styling
import "./index.css";

const MainLeft = (data) => {
  //Destructre data
    //==>For Current User Selection
  const {level, trim,wheel_Selection,ext_Color} = data.currentSelection;

    //==>For carData
    const {acceleration,engine,hp,torque} = data.carData[level][trim].spec;

  //Specification Render for Trim Selected
  const specRender = () => {

    return (
      <div className="spec">
        {console.log(data)}
    <p><span className="spec-category-style">Engine Type: </span><span className="engine-type">{engine}</span></p>
        <p><span className="spec-category-style">Max. Output: </span><span className="engine-type">{hp} HP</span></p>
        <p><span className="spec-category-style">Max. Torque: </span><span className="engine-type">{torque} LB-FT</span></p>
        <p><span className="spec-category-style">Acceleration: </span><span className="engine-type">{acceleration} Seconds</span></p>
      </div>
    )
  }

  return (
    <div className="audi-container">
      <div className="row-section">
        <div className="col section-left">
          <div className="description">
            <h2 className="year-model">2022</h2>
            <h1 className="audi-model">
              <span className="model">Q4</span>
              <span className="current-trim-level">
                Premium 40 e-tron<span className="reg-mark"></span>
              </span>
            </h1>
          </div>
          <img
            src={data.carData[level][trim].spec[wheel_Selection].extImage[ext_Color][0]}
            className="default-image" alt="Q4 40 e-tron Navarra Blue metallic" />
        </div>
          {specRender()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    carData: state.carData,
    currentSelection:state.userSelection
  }
};

export default connect(mapStateToProps)(MainLeft)
