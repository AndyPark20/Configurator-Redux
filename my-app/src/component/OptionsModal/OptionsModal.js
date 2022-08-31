import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";

import "./OptionsModal.css";

export const OptionsDetail = ({ userSelection, modal, selectedOption, optionTitle}) => {

  //Left of HERE (08/16/2022)

  const renderOptionDescription=()=>{
    const description = userSelection.selectedOptions.map((values,index)=>{
      return(
        <div>
          {values.option[selectedOption][optionTitle].description.map((values,index)=>{
            return (
              <div>
                <p>{values}</p>
              </div>
            );
          })}
        </div>
      )
    })
    return description;
  }

  const optionList = () => {
    if (modal) {
      const renderOptionList = userSelection.selectedOptions.map(
        (values, innerIndex) => {
          return (
            <div className="options-modal-container">
              <div className="row">
                <div className="col">
                  <h2>{Object.keys(values.option[selectedOption])[0]}</h2>
                </div>
                <div className="col">
                  {renderOptionDescription()}
                </div>
                 <div className="col">
                  <h5 className="close" onClick={()=>console.log('hello')}>Close</h5>
                </div>
              </div>
            </div>
          );
        }
      );
      return renderOptionList;
    }
  };

  return <div className="option-detail-modal">
    <div className="col">
    {optionList()}
    <div className="col"></div>
    </div>
    </div>;
};

const thisMapStateToProps = (state) => {
  return {
    userSelection: state.userSelection,
  };
};

export default connect(thisMapStateToProps)(OptionsDetail);
