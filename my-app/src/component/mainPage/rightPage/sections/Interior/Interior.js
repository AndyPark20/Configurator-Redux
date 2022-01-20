import React,{useState} from 'react';
import { connect } from 'react-redux';

import './Interior.css'



const InteriorSection =({data,trim,model,extColor})=>{


  //Render Interior Button
  const InteriorButton =()=>{
    conso
  }


  return(
    <div>
     {/* {console.log(data)} */}
    </div>
  )
}

const mapStateToProps =(state)=>{
  return{
    data:state.carData,
    trim:state.userSelection.trim,
    model:state.userSelection.model,
    extColor:state.userSelection.extColor
  };
};


export default connect(mapStateToProps)(InteriorSection)
