import React from "react";

//CSS style
import "./Rightpage.css";

//Import Browser Router functionality
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Action creator
import { userSelectedTrim } from "../../../Actions";

//Import Components
import Trim from "./Sections/Trim/Trim";
import ExteriorSection from "./Sections/Exterior/Exterior";
import InteriorSection from './Sections/Interior/Interior';
import { RightSideHeader } from "../RightPage/Header/Header.js";
import { connect } from "react-redux";

const MainRight = () => {
  return (
    <div className="audi-container-right right-side-background">
      <BrowserRouter>
        <RightSideHeader />
        <Routes>
          <Route path="/"  element={<Trim/>} />
          <Route path="/Exterior" element={<ExteriorSection/>} />
          <Route path="/Interior" element={<InteriorSection/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps =(state)=>{
return{
  state
}
}


export default connect(mapStateToProps,{userSelectedTrim})(MainRight)
