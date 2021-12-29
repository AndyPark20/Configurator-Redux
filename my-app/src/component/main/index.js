import React from "react";
import Data from "../DataObject";

import "./index.css";

export const Main = () => {
  return (
    <div className="audi-container">
      <div className="row-section">
        <div clasasName="col section-width-left">
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
              Data.Premium["Q4 40 e-tron"].spec.standard.extImage[
                "Navarra Blue metallic"
              ][0]
            }
            className="default-image"
            alt="test"
          />
        </div>
      </div>
      {/* {console.log(Data.Premium['Q4 40 e-tron'].spec.standard.extImage['Navarra Blue metallic'])} */}
    </div>
  );
};
