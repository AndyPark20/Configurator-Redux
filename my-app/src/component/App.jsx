import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

//CSS Style
import './App.css';

//Components
import MainLeft from '../Component/MainPage/Leftpage/Leftpage';
import {MainRight} from '../Component/MainPage/RightPage/Rightpage';
import Footer from './Footer/Footer';

export const Context = React.createContext();


 const App =({data,trim,model,extColor,wheelSelection,intColor})=>{

  const [modal,updateModal] =useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="page-split">
          <MainLeft modal={modal}/>
          <MainRight updateModal={updateModal} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
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
