import React, {useState} from "react";
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
  selectedOptions,
}) => {

  const [optionClicked,updateOption] = useState('')
  const [btnControl,updateBtnControl] = useState('')

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
  const checkSelection = (keys,e) => {
    if (!currentSelection.selectedOptions.includes(keys)) {
      userSelectedOptions(keys);
      updateOption(keys)
      updateBtnControl(e.target.id)
    }
  };

  // A function that will render REMOVE or ADD depending on if the option has been added
  const addOrRemoveBtn = (keys) => {
    if (selectedOptions.length === 0) {
      return "ADD";
    } else {
      const check = selectedOptions.map((values, index) => {
        console.log(optionClicked)
        console.log(btnControl)
        if (values === optionClicked && optionClicked === btnControl ) {
          return "REMOVE";
        }
        return "ADD";
      });
      return check;
    }
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
                onClick={(e) => checkSelection(keys,e)}
              >
                {addOrRemoveBtn(keys)}
              </button>
            </div>
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
    selectedOptions: state.userSelection.selectedOptions,
  };
};

export default connect(mapStateToProps, {
  userSelectedTrim,
  userSelectedOptions,
})(OptionsSection);
