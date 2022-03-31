import React from "react";
import "./options.css";
import { connect } from "react-redux";

//Import action creators
import {
  userSelectedTrim,
  userSelectedOptions,
  removeOrAdd,
} from "../../../../../Actions";

const OptionsSection = ({
  carData,
  currentSelection,
  trim,
  model,
  wheelSelection,
  extColor,
  viewPosition,
  intColor,
  sectionView,
  userSelectedOptions,
  selectedOptions,
  removeOrAdd,
}) => {
  //Options checklist description are in an array, use the map method to render the list
  const renderOptionDescription = (keys, values) => {
    const optionDescriptionArray = values[keys].description.map(
      (checkListvalues, index) => {
        return (
          <div keys={index} className="option-container">
            <i className="fa-solid fa-check"></i>
            <p className="options">{checkListvalues}</p>
          </div>
        );
      }
    );
    return optionDescriptionArray;
  };

  //A function that will check if the option has already been selected or not
  const checkSelection = (keys, values) => {
    console.log(currentSelection.selectedOptions)
   const changeStatus=currentSelection.selectedOptions.map((options,index)=>{
      if(options[keys]){

         let test =JSON.stringify({...options, click:true})
         console.log(JSON.parse(test))
      }
    })
    return changeStatus
  };

  //Options in an array of objects, need to map thru the objects to get the property
  //values are from mapping OptionList.
  const renderEachOptions = (values) => {
    for (let keys in values) {
      return (
        <div className="options-container">
          <div className="option-picture">
            <img
              src={values[keys].image}
              alt={keys}
              className="option-image-size"
            />
          </div>
          <div classname="options-detail">
            <h3>{keys}</h3>
            <p>{renderOptionDescription(keys, values)}</p>
            <div className="add-button">
              <button
                id={keys}
                type="button"
                className="btn btn-dark"
                onClick={(e) => checkSelection(keys, values)}
              >
                {!values[keys].click ? "ADD" : "REMOVE"}
              </button>
            </div>
          </div>
        </div>
      );
    }
  };



  const options = () => {
    const renderOptionList = selectedOptions.map((values, index) => {
      return <div key={index}>{renderEachOptions(values)}</div>;
    });
    return renderOptionList;
  };
  return <div>{options()}</div>;
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
    selectedOptions: state.userSelection.selectedOptions,
  };
};

export default connect(mapStateToProps, {
  userSelectedTrim,
  userSelectedOptions,
  removeOrAdd,
})(OptionsSection);
