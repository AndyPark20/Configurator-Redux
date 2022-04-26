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
  return {
    optionedPrice: state.userSelection.optionedPrice,
  };
}

export default connect(mapStateToProps)(Footer)
