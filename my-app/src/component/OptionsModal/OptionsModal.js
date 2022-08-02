import React from 'react';
import {connect} from 'react-redux';

import './OptionsModal.css';

export const OptionsDetail =({userSelection})=>{
  return(
    <div className="option-detail-modal">
      {console.log('from const', userSelection)}
    </div>
  )
}

const thisMapStateToProps =(state)=>{
  return{
    userSelection: state.userSelection
  }
}

export default connect(thisMapStateToProps)(OptionsDetail)
