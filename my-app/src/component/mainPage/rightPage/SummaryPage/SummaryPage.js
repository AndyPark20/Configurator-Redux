import React from 'react';
import {connect} from 'react-redux';



 const SummaryPage =()=>{
return(
  <div>
    <h1>Hello</h1>
  </div>
)
}

const mapStateToProps =(state)=>{
  return{
    state
  }
}

export default connect(mapStateToProps)(SummaryPage)
