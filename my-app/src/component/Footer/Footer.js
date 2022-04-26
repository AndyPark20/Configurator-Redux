import React from 'react';
import {connect} from 'react-redux';


const Footer =({optionedPrice})=>{
  return(
    <div>
      <h1>Price as built:{optionedPrice}</h1>
    </div>
  )
}

const mapStateToProps =(state)=>{
  console.log('state from Footer',state.userSelection.optionedPrice)
  return {
    optionedPrice: state.userSelection.optionedPrice,
  };
}

export default connect(mapStateToProps)(Footer)
