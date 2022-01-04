import { render } from '@testing-library/react';
import React from 'react';

//Import CSS
import './Exterior.css';

//Import connect helper function
import {connect} from 'react-redux';

//Import Reducer
import { extColorSelection } from "../../../../../Actions";



const ExteriorSection = ({ exteriorColor, extColorSelection }) => {
  //Render available exterior colors for Audi Q4 e-tron
  const q4ExteriorColors = () => {
    const renderColor = exteriorColor.map((values, index) => {
      return (
        <div key={index}>
          <img
            src={values.img}
            className="exterior-color-btn"
            alt={values.name}
            id={values.name}
            onClick={() => extColorSelection(values.name)}
          />
        </div>
      );
    });
    return renderColor;
  };

  return <div className="exterior-color-container">{q4ExteriorColors()}</div>;
};

const mapStateToProps=(state)=>{
  return{
    exteriorColor:state.carData.extColorButtons
  };
};


export default connect(mapStateToProps, { extColorSelection })(ExteriorSection);
