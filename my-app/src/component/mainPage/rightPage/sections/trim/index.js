import React from "react";
import {connect} from 'react-redux';

const Trim = ({ data }) => {

  const RenderTrim = () => {
    return <div>{console.log(data)}</div>;
  };


  return <div>{RenderTrim()}</div>;
};

const thisMapStateToProps = (state) => {
  console.log(state);
  return {
    data: state,
  };
};

export default connect(thisMapStateToProps)(Trim);
