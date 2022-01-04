import { render } from '@testing-library/react';
import React from 'react';

//Import CSS
import './Exterior.css';

//Import connect helper function
import {connect} from 'react-redux';

//Import Actions
import {exteriorColorSelection} from '../../../../../Actions';




const ExteriorSection = ({trimLevel,model,exteriorColor, exteriorColorSelection }) => {
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
            onClick={()=>exteriorColorSelection(trimLevel,model,values.name)}
          />
        </div>
      );
    });
    return renderColor;
  };

  return <div className="exterior-color-container">{q4ExteriorColors()}</div>;
};

const mapStateToProps=(state)=>{
  console.log(state.userSelection.level)
  return{
    trimLevel:state.userSelection.level,
    model:state.userSelection.trim,
    exteriorColor:state.carData.extColorButtons
  };
};


export default connect(mapStateToProps, { exteriorColorSelection })(ExteriorSection);
