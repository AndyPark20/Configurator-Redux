import React from 'react';
import {connect} from 'react-redux';

export const Test =()=>{
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

export default connect(thisMapStateToProps)(Test)
