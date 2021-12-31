import React from "react";
import { connect } from 'react-redux';

const Trim = ({ data }) => {

  //Render Trim Level
  const renderTrimLevel = (values) => {

    //Array holding values of Audi trim based on package level (i.e. 'Premium', etc....)
    const trimLevelValueList = Object.keys(data.carData[values]);

    if (data.carData.hasOwnProperty(values)) {
      return (
        <div>
          <h4>{values}</h4>
          {trimLevelValueList.map((trim, index) => {
            return (
              <div key={index}>{trim}</div>
            )
          })}
        </div>
      );
    };
  };

  //Render Package level
  const renderPackageLevel = () => {
    const packageLevel = Object.keys(data.carData);
    const renderPackage = packageLevel.map((values, index) => {
      return (
        <div key={index}>
          {renderTrimLevel(values)}
        </div>
      )
    });
    return renderPackage;
  };

  return <div>
    {renderPackageLevel()}
  </div>;
};

const thisMapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(thisMapStateToProps)(Trim);
