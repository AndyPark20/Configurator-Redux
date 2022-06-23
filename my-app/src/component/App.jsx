import React from 'react';
import {connect} from 'react-redux';

//CSS Style
import './App.css';

//Components
import MainLeft from '../Component/MainPage/Leftpage/Leftpage';
import {MainRight} from '../Component/MainPage/RightPage/Rightpage';
import Footer from './Footer/Footer';

export const Context = React.createContext();


 const App =({data,trim,model,extColor,wheelSelection,intColor})=>{
  return (
    <Context.Provider
      value={{ data, trim, model, extColor, wheelSelection, intColor }}
    >
      <div className="container">
        <div className="row">
          <div className="page-split">
            <MainLeft />
            <MainRight />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};



const mapStateToProps=(state)=>{
  return {
    data: state.carData,
    trim: state.userSelection.trim,
    model: state.userSelection.model,
    extColor: state.userSelection.extColor,
    wheelSelection: state.userSelection.wheelSelection,
    intColor: state.userSelection.intcolor,
  };
}


export default connect(mapStateToProps)(App);
