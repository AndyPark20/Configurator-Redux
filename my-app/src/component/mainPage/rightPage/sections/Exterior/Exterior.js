import React from 'react';

import {connect} from 'react-redux';


const ExteriorSection =()=>{
  return(
    <div>
      EXTERIOR!
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    state,
  };
};


export default connect (mapStateToProps)(ExteriorSection)
