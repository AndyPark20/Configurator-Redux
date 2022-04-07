import React from "react";
import "./options.css";
import { connect } from "react-redux";

//Import action creators
import {
  userSelectedTrim,
  userSelectedOptions,
  removeOrAdd,
  removeSelectedOptions
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
  deleteOptions,
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
  const checkSelection = (keys, values, e) => {
    let arrayToString = keys.toString();

    currentSelection.selectedOptions.forEach((optionsArray, index) => {
      optionsArray.option.forEach((eachOption, index) => {
        if (eachOption[arrayToString] && e.target.textContent === "ADD") {
          eachOption[arrayToString].click = true;
          userSelectedOptions(currentSelection.selectedOptions, arrayToString);
        } else if (
          eachOption[arrayToString] &&
          e.target.textContent === "REMOVE"
        ) {
          eachOption[arrayToString].click = false;
          deleteOptions(arrayToString);
        }
      });
    });
  };

  //Options in an array of objects, need to map thru the objects to get the property
  //values are from mapping OptionList.
  //Object.keys(values) is the key name of the option (Convenience Package, trailer, etc..)

  const renderEachOptions = (values) => {
    const renderOptions = values.option.map((values, index) => {
      return (
        <div className="options-container">
          <div className="option-picture">
            <img
              src={values[Object.keys(values)].image}
              alt={Object.keys(values)}
              className="option-image-size"
            />
          </div>
          <div classname="options-detail">
            <h3>{Object.keys(values)}</h3>
            <p>{renderOptionDescription(Object.keys(values), values)}</p>
            <div className="add-button">
              <button
                type="button"
                className="btn btn-dark"
                onClick={(e) => checkSelection(Object.keys(values), values, e)}
              >
                {!values[Object.keys(values)].click ? "ADD" : "REMOVE"}
              </button>
            </div>
          </div>
        </div>
      );
    });
    return renderOptions;
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
  console.log(state.userSelection.userTrimSelectedOptions);
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
    userTrimSelectedOptions: state.userSelection.userTrimSelectedOptions,
    selectedOptions: state.userSelection.selectedOptions,
    // userSelectedOptions:
  };
};

export default connect(mapStateToProps, {
  userSelectedTrim,
  userSelectedOptions,
  removeOrAdd,
})(OptionsSection);
