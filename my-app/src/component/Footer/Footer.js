import React from 'react';
import {connect} from 'react-redux';

import "./Footer.css"


const Footer =({optionedPrice})=>{
  return (
    <div className="footer-container">
      <div class="row">
        <div class="col model-trim">
          <p>2022</p>
        </div>
        <div class="col model-price">
            <p className="footer-styling">Price as built:{optionedPrice}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps =(state)=>{
  console.log('from Footer',state.userSelection.trim)
  console.log('from FOOTER 2', state.userSelection.model)
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
