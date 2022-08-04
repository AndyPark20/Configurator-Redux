import React from 'react';
import {connect} from 'react-redux';

import './OptionsModal.css';

export const OptionsDetail =({userSelection, modal})=>{

  const optionList =()=>{
      // if(userSelection){
      //   const renderOptionList = userSelection.selectedOptions.map((value,index)=>{
      //     return(
      //       <div>
      //         {console.log('values',value)}
      //       </div>
      //     )
      //   })
      //   renderOptionList();
      // };
      console.log('userSelection', modal)
  }

  return(
    <div className="option-detail-modal">
      {optionList()}
    </div>
  )
}

const thisMapStateToProps =(state)=>{
  return{
    userSelection: state.userSelection
  }
}

export default connect(thisMapStateToProps)(OptionsDetail)
