import React from "react";
import "./options.css";
import { connect } from "react-redux";

//Import action creators
import { userSelectedTrim } from "../../../../../Actions";
import { userSelectedOptions } from "../../../../../Actions";

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
  selectedOptions
}) => {

  //Options checklist description are in an array, use the map method to render the list
  const renderOptionDescription = (keys, values) => {
    const optionDescriptionArray = values[keys].description.map(
      (checkListvalues, index) => {
        return (
          <div keys={index} className="option-container">
            <i class="fa-solid fa-check"></i>
            <p className="options">{checkListvalues}</p>
          </div>
        );
      }
    );
    return optionDescriptionArray;
  };


  //A function that will check if the option has already been selected or not
  const checkSelection =(keys)=>{
    if(!currentSelection.selectedOptions.includes(keys)){
     userSelectedOptions(keys);
    }
  }

  //Options in an array of objects, need to map thru the objects to get the property
  //values are from mapping OptionList.
  const renderEachOptions = (values) => {
    for (let keys in values) {
      return (
        <div className="options-container" keys={keys}>
          <img
            src={values[keys].image}
            alt={keys}
            className="option-image-size"
          />
          <div classname="options-detail">
            <h3>{keys}</h3>
            <p>{renderOptionDescription(keys, values)}</p>
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => checkSelection(keys)}
            >

            </button>
          </div>
        </div>
      );
    }
  };

  const options = () => {
    const optionList = carData[trim][model].spec.optionsPackages;
    const renderOptionList = optionList.map((values, index) => {
      return <div key={index}>{renderEachOptions(values)}</div>;
    });
    return renderOptionList;
  };

  return <div>{options()}</div>;
};

const mapStateToProps = (state) => {
    console.log(state.userSelection);

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
    selectedOptions: state.userSelection.selectedOptions
  };
};

export default connect(mapStateToProps, { userSelectedTrim,userSelectedOptions })(OptionsSection);
