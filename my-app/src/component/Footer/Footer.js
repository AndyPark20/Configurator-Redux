import React from 'react';
import {connect} from 'react-redux';

import "./Footer.css"


const Footer =({optionedPrice,model,trim})=>{

  //function to put comma for pricing
  const priceComma =()=>{

    let splitPriceArray = optionedPrice.toString().split('');
    if(splitPriceArray.length ===5){
      splitPriceArray.splice(2, 0, ",");
       let finalPrice = splitPriceArray.join("");
       return finalPrice;
    }


  }

  return (
    <div className="footer-container">
      <div className="row footer-layout">
        <div class="col model-trim">
          <p className="year">2022<span className="make">&nbsp; Audi</span></p>
          <p className="user-selected-trim">{`${model} ${trim}`}</p>
        </div>
        <div class="col model-price">
            <p className="footer-styling">Price as built:&nbsp; ${priceComma()}</p>
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
