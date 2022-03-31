import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


import { userSelectedTrim } from "../../../../Actions";



const RightSideHeader=({userSelectedTrim, carData,currentSelection,trim,model,wheelSelection,extColor,viewPosition,intColor,sectionView})=>{

  return (
    <div className="sections">
      <Link to="/">
        <h4>TRIM</h4>
      </Link>
      <Link to="/Exterior">
        <h4
          onClick={() => userSelectedTrim(trim, model, extColor,wheelSelection,intColor,true, carData[trim][model].spec.optionsPackages)}
        >
          EXTERIOR
        </h4>
      </Link>
      <Link to="/Interior">
        <h4 onClick={() => userSelectedTrim(trim, model, extColor,wheelSelection,intColor,false,carData[trim][model].spec.optionsPackages)}>INTERIOR</h4>
      </Link>
      <Link to="/Options">
        <h4 onClick={() => userSelectedTrim(trim, model, extColor,wheelSelection,intColor,false,carData[trim][model].spec.optionsPackages)}>OPTIONS</h4>
      </Link>
      <Link to="/Packages">
        <h4>PACKAGES</h4>
      </Link>
      <Link to="/Summary">
        <h4>SUMMARY</h4>
      </Link>
    </div>
  );
}

const mapStateToProps =(state)=>{
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
}

export default connect(mapStateToProps, {userSelectedTrim})(RightSideHeader)
