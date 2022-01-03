import React from "react";
import { connect } from 'react-redux';

//Import CSS
import './Trim.css';

//Import Reducers
import {userSelectedTrim} from '../../../../../Actions';


const Trim = ({ data, userSelectedTrim }) => {



  //Render Trim Level
  const renderTrimLevel = (packageSelection) => {
    //Array holding packageSelection of Audi trim based on package level (i.e. 'Premium', etc....)
    const trimLevelValueList = Object.keys(data[packageSelection]);
    if (data.hasOwnProperty(packageSelection)) {
      return (
        <div className="trim-level-container">
          <h4>{packageSelection}</h4>
          {trimLevelValueList.map((trim, index) => {
            return (
              <div key={index} className="trim-border-style" onClick={(e) => userSelectedTrim(packageSelection,trim)}> {trim}</div>
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
    const renderPackage = packageLevel.map((packageSelection, index) => {
      return (
        <div className="trim-option-width" key={index}>
          {renderTrimLevel(packageSelection)}
        </div>
      )
    });
    return renderPackage;
  };


  return <div className="trim-container-width">
    {renderPackageLevel()}
  </div>;
};


//React-Redux connect to retrieve packageSelection from the Redux Store
const thisMapStateToProps = (state) => {
  console.log(state.userSelection)
  return {
    data: state.carData,
  };
};


export default connect(thisMapStateToProps,{userSelectedTrim})(Trim);
