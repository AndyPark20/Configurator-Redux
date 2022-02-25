import React from 'react';
import './options.css';
import {connect} from 'react-redux';
import { userSelectedTrim } from '../../../../../Actions';

 const OptionsSection =({carData,currentSelection,trim,model,wheelSelection,extColor,viewPosition,intColor,sectionView})=>{


  //Options in an array of objects, need to map thru the objects to get the property
  //values are from mapping OptionList.
  const renderEachOptions=(values)=>{
      for(let keys in values){
        return(
          <div keys={keys}>
            {console.log(values)}
            <img src={values[keys].image}  alt={values[keys].name} className="option-image-size"/>
          </div>
        );
      };
  };

  const options =()=>{
    const optionList = carData[trim][model].spec.optionsPackages;
    const renderOptionList = optionList.map((values,index)=>{
      return(
        <div key={index}>
         {renderEachOptions(values)}
        </div>
      );
    });
    return renderOptionList;
  };


  return(
    <div>
      {options()}
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
