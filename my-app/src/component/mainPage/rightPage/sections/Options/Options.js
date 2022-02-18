import React from 'react';
import './options.css';
import {connect} from 'react-redux';
import { userSelectedTrim } from '../../../../../Actions';

 const OptionsSection =()=>{
  return(
    <div>
      Options Section!
    </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    state,
  }
}

export default connect (mapStateToProps,{userSelectedTrim})(OptionsSection)
