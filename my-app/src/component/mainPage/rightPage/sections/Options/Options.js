import React from 'react';
import './options.css';
import {connect} from 'react-redux';
import { userSelectedTrim } from '../../../../../Actions';

 const OptionsSection =({carData,currentSelection,trim,model,wheelSelection,extColor,viewPosition,intColor,sectionView})=>{

  return(
    <div>
      {console.log(carData[trim][model])}
      Options Section!
    </div>
  )
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

export default connect (mapStateToProps,{userSelectedTrim})(OptionsSection)
