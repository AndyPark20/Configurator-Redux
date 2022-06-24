import React from 'react';
import {connect} from 'react-redux';

import "../SummaryPage/SummaryPage.css"


 const SummaryPage =({userSelection})=>{

  const summaryOptions =()=>{
    if(userSelection.selectedOptions){
 const renderSummaryOptions = userSelection.selectedOptions.map((values,index)=>>{

 })
    }

  }


  const summary =()=>{
    console.log(userSelection)
    return (
      <div>
        <h3>{userSelection.model}</h3>
        <div>
          <p>Color:</p>
          <p className="summary-color">{userSelection.extColor}</p>
          <p className="summary-color">{userSelection.intcolor}</p>
        </div>
        <div>
          <h3>Options:</h3>
          <div>
            {/* <p className="summary-options">{userSelection}</p> */}
          </div>
        </div>
      </div>
    );
  }

return(
  <div>
    <h1>{summary()}</h1>
  </div>
)
}

const mapStateToProps =(state)=>{

  return{
    userSelection: state.userSelection
  }
}

export default connect(mapStateToProps)(SummaryPage)
