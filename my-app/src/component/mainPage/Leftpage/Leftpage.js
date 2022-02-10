import React, { useEffect, useState } from "react";
//Connect functionality from React-Redux;
import { connect } from "react-redux";
//CSS Styling
import "./Leftpage.css";
//Import Components
import { Gallery } from "./Gallery/Gallery.js";

//import Action
import { userSelectedTrim } from "../../../Actions/";

const MainLeft = ({
  carData,
  currentSelection,
  trim,
  model,
  wheelSelection,
  extColor,
  viewPosition,
  userSelectedTrim,
  sectionView,
  intColor
}) => {
  //Destructre data
  const { acceleration, engine, hp, torque } = carData[trim][model].spec;


  const toggleImageSection = () => {
  let exteriorPictures = carData[trim][model].spec[wheelSelection][viewPosition][extColor];
   if(sectionView){
   return exteriorPictures;
   }


   //Default Innterior to S-Line if user clicks on premium wheel two
   if(!sectionView && wheelSelection ==='premium_wheel_two'){
   let interiorPictures = carData[trim][model].spec.interior.intImage['Black with Rock Gray stitching S-Line®'][extColor];
   return interiorPictures;
   }

    if(!sectionView && wheelSelection !=='premium_wheel_two'){
   let interiorPictures = carData[trim][model].spec.interior.intImage[intColor][extColor];

   return interiorPictures;
   }

  };

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

  //Render Model name EXCEPT Q4 keyword phrase
  const ModelNameRender = () => {
    const q4Index = model.replace("Q4 ", "");
    return `${q4Index} ${trim}`;
  };

  return (
    <div className="audi-container-left">
      <div className="row-section">
        <div className="col section-left">
          <div className="description">
            <h2 className="year-model">2022</h2>
            <h1 className="audi-model">
              <span className="model">Q4 </span>
              <span className="current-trim-level">
                {ModelNameRender()}
                <span className="reg-mark">®</span>
              </span>
            </h1>
          </div>
          <Gallery
            carData={currentSelection}
            gallery={toggleImageSection()}
            sectionView={sectionView}
          />
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
    intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView,
  };
};

export default connect(mapStateToProps, { userSelectedTrim })(MainLeft);
