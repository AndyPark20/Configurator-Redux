import React from 'react';
import {connect} from 'react-redux';



 const SummaryPage =({userSelection})=>{


  const test =()=>{
    console.log('selection',userSelection)
    return(
      <div>
        <h3>{userSelection.model}</h3>
      </div>
    )
  }

return(
  <div>
    <h1>{test()}</h1>
  </div>
)
}

const mapStateToProps =(state)=>{

  return{
    userSelection: state.userSelection
  }
}

export default connect(mapStateToProps)(SummaryPage)
