import React from "react";
import Data from "../../DataObject";

//Connect functionality from React-Redux;
import {connect} from 'react-redux';

//CSS Styling
import "./index.css";

const MainLeft = (data) => {
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
            src={
              data.carData.Premium["Q4 40 e-tron"].spec.standard.extImage[
                "Navarra Blue metallic"
              ][0]
            }
            className="default-image"
            alt="Q4 40 e-tron Navarra Blue metallic"
          />
        </div>
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps =(state)=>{
  console.log(state.carData)
  return{
    carData:state.carData
  }
};

export default connect(mapStateToProps)(MainLeft)
