import React from 'react';
import { connect } from 'react-redux';

import './Interior.css'



const InteriorSection =()=>{


  return(
    <div>
      Hello from Interior Section
    </div>
  )
}

const mapStateToProps =(state)=>{
  console.log('interior',state)
  return{
    test:1
  };
};


export default connect(mapStateToProps)(InteriorSection)
