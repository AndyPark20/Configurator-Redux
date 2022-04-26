import React from 'react';
import {connect} from 'react-redux';

import "./Footer.css"


const Footer =({optionedPrice,model,trim})=>{
  return (
    <div className="footer-container">
      <div className="row">
        <div class="col model-trim">
          <p className="year">2022<span className="make">&nbsp; Audi</span></p>
          <p className="user-selected-trim">{`${model} ${trim}`}</p>
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
