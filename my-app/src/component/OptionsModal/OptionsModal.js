import React from 'react';
import {connect} from 'react-redux';

export const OptionsDetail =()=>{
  return(
    <div>
      Hello
    </div>
  )
}

const thisMapStateToProps =(state)=>{
  return{

  }
}

export default connect(thisMapStateToProps)(OptionsDetail)
