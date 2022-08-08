import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";

import "./OptionsModal.css";

export const OptionsDetail = ({ userSelection, modal, selectedOption }) => {
  const optionList = () => {
    if (modal) {
      const renderOptionList = userSelection.selectedOptions.map(
        (values, innerIndex) => {
          return <div>{(Object.keys(values.option[selectedOption])[0])}</div>;
        }
      );
      return renderOptionList;
    }
  };

  return <div className="option-detail-modal">{optionList()}</div>;
};

const thisMapStateToProps = (state) => {
  return {
    userSelection: state.userSelection,
  };
};

export default connect(thisMapStateToProps)(OptionsDetail);
