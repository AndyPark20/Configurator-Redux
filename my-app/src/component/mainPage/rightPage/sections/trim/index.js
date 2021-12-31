import React from "react";
import {connect} from 'react-redux';

const Trim = ({ data }) => {

  // console.log(data)


  //Render Trim Level
  const renderTrimLevel =(values)=>{
    if(data.carData.hasOwnProperty(values)){
      return(
        <div>
          <h4>{values}</h4>
          {console.log(data.carData[values])}
          </div>
        // <div>{data.carData[values]}</div>
      )
    }
  }


  //Render Package level
  const renderPackageLevel = () => {
    const packageLevel = Object.keys(data.carData);
    const renderPackage = packageLevel.map((values,index)=>{
      return (
        <div>
          {renderTrimLevel(values)}
        </div>
      );
    })
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
