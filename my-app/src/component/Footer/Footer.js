import React from 'react';
import {connect} from 'react-redux';


const Footer =()=>{
  return(
    <div>
      <h1>Hello</h1>
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
