import React from 'react';
import {connect} from 'react-redux';

import "./Footer.css"


const Footer =({optionedPrice})=>{
  return(
    <div>
      <p className="footer-styling">Price as built:{optionedPrice}</p>
    </div>
  )
}

const mapStateToProps =(state)=>{
  console.log('from Footer',state.userSelection.trim)
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
    price: state.userSelection.price,
    optionedPrice: state.userSelection.optionedPrice,
  };
}

export default connect(mapStateToProps)(Footer)
