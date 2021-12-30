import React from "react";
import {connect} from 'react-redux';

export const Trim = ({ data }) => {

  const RenderTrim = () => {
    return <div>{console.log(data)}</div>;
  };


  return <div>{RenderTrim()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(Trim);
