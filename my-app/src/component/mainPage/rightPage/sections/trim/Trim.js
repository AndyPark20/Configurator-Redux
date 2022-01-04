import React from "react";
import { connect } from 'react-redux';

//Import CSS
import './Trim.css';

//Import Reducers
import {userSelectedTrim} from '../../../../../Actions';


const Trim = ({ data, currentSelection, userSelectedTrim }) => {

  //Render Trim Level
  const renderTrimLevel = (trimSelection) => {
    //Array holding trimSelection of Audi trim based on package level (i.e. 'Premium', etc....)
    const trimLevelValueList = Object.keys(data[trimSelection]);

    //Omit Exterior Color buttons
    if (data.hasOwnProperty(trimSelection) && trimSelection !=='extColorButtons') {
      return (
        <div className="trim-level-container">
          <h4>{trimSelection}</h4>
          {trimLevelValueList.map((model, index) => {
            return (
              <div key={index} className="trim-border-style" onClick={(e) => userSelectedTrim(trimSelection,model, currentSelection.extColor)}>{model}</div>
            )
          })}
        </div>
      );
    };
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
      )
    });
    return renderPackage;
  };


  return <div className="trim-container-width">
    {renderPackageLevel()}
  </div>;
};


//React-Redux connect to retrieve trimSelection from the Redux Store
const thisMapStateToProps = (state) => {
  return {
    data: state.carData,
    currentSelection:state.userSelection
  };
};


export default connect(thisMapStateToProps,{userSelectedTrim})(Trim);
