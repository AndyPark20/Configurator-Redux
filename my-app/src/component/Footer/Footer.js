import React from 'react';
import {connect} from 'react-redux';

import "./Footer.css"


const Footer =({optionedPrice,model,trim})=>{

  //function to put comma for pricing
  const priceComma =(optionedPrice)=>{

      console.log(optionedPrice)

  }

  return (
    <div className="footer-container">
      <div className="row footer-layout">
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
  return {
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    optionedPrice: state.userSelection.optionedPrice,
  };
}

export default connect(mapStateToProps)(Footer)
