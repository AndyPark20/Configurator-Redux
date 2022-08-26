import React from "react";
//Connect functionality from React-Redux;
import { connect } from "react-redux";
//CSS Styling
import "./Leftpage.css";
//Import Components
import { Gallery } from "./Gallery/Gallery.js";
import OptionsModal from "../../OptionsModal/OptionsModal";

//import Action
import { userSelectedTrim } from "../../../Actions/";

//Import Context
import {Context} from '../../App';


const MainLeft = ({
  carData,
  currentSelection,
  trim,
  model,
  wheelSelection,
  extColor,
  viewPosition,
  userSelectedTrim,
  sectionView,
  intColor,
  price,
  modal,
  selectedOption,
  optionTitle
}) => {
  //Destructre data
  const { acceleration, engine, hp, torque } = carData[trim][model].spec;

  const mainLeftContext = React.useContext(Context);



  const toggleImageSection = () => {
    let exteriorPictures =
      carData[trim][model].spec[wheelSelection][viewPosition][extColor];
    if (sectionView) {
      return exteriorPictures;
    }

    let interiorPictures =
      carData[trim][model].spec.interior.intImage[intColor][extColor];
    return interiorPictures;
  };

  //Specification Render for Trim Selected
  const specRender = () => {
    return (
      <div className="spec">
        <p>
          <span className="spec-category-style">Engine Type: </span>
          <span className="engine-type">{engine}</span>
        </p>
        <p>
          <span className="spec-category-style">Max. Output: </span>
          <span className="engine-type">{hp} HP</span>
        </p>
        <p>
          <span className="spec-category-style">Max. Torque: </span>
          <span className="engine-type">{torque} LB-FT</span>
        </p>
        <p>
          <span className="spec-category-style">Acceleration: </span>
          <span className="engine-type">{acceleration} Seconds</span>
        </p>
      </div>
    );
  };

  //Render Pricing from data
  const pricing = () => {
    //convert Integer into string of array
    if (price) {
      let priceToStringArray = price.toString().split("");

      //add comma into pricing if the length of the array is 5
      if (priceToStringArray.length === 5) {
        priceToStringArray.splice(2, 0, ",");
        let finalPrice = priceToStringArray.join("");
        return finalPrice;
      }
    }
  };

  //Render Model name EXCEPT Q4 keyword phrase
  const ModelNameRender = () => {
    const q4Index = model.replace("Q4 ", "");
    return `${q4Index} ${trim}`;
  };

  return (
    <div className="audi-container-left">
      <div className="row-section">
        <div className="col section-left">
          <div className="description">
            <h2 className="year-model">2022</h2>
            <h1 className="audi-model">
              <span className="model">Q4 </span>
              <span className="current-trim-level">
                {ModelNameRender()}
                <span className="reg-mark">®</span>
              </span>
            </h1>
            <div className="price-info">
              <h4>Starting at:</h4>
              <h3 className="msrp">${pricing()}</h3>
            </div>
          </div>
          <Gallery
            carData={currentSelection}
            gallery={toggleImageSection()}
            sectionView={sectionView}
          />
        </div>
        <OptionsModal modal={modal} selectedOption={selectedOption} optionTitle={optionTitle}></OptionsModal>
        {specRender()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    carData: state.carData,
    currentSelection: state.userSelection,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    wheelSelection: state.userSelection.wheelSelection,
    extColor: state.userSelection.extColor,
    viewPosition: state.userSelection.viewPosition,
    intColor: state.userSelection.intcolor,
    sectionView: state.userSelection.sectionView,
    price: state.userSelection.price,
  };
};

export default connect(mapStateToProps, { userSelectedTrim })(MainLeft);
