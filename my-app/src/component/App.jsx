import React from 'react';
import {connect} from 'react-redux';

//CSS Style
import './App.css';

//Components
import MainLeft from '../Component/MainPage/Leftpage/Leftpage';
import {MainRight} from '../Component/MainPage/RightPage/Rightpage';
import Footer from './Footer/Footer';


export const App =()=>{
  return (
    <div className="container">
      <div className="row">
        <div className="page-split">
          <MainLeft />
          <MainRight />
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{

}

export default connect(mapStateToProps)(App);
