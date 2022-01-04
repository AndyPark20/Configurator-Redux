import { render } from '@testing-library/react';
import React from 'react';

//Import CSS
import './Exterior.css';

//Import connect helper function
import {connect} from 'react-redux';

//Import Actions
import { userSelectedTrim } from "../../../../../Actions";




const ExteriorSection = ({trim,model,exteriorColor, userSelectedTrim }) => {
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
            onClick={() => userSelectedTrim(trim, model, values.name)}
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
    trim:state.userSelection.trim,
    model:state.userSelection.model,
    exteriorColor:state.carData.extColorButtons
  };
};


export default connect(mapStateToProps, { userSelectedTrim })(ExteriorSection);
