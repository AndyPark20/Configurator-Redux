import React, {useState} from "react";

//CSS style
import "./Rightpage.css";

//Import Browser Router functionality
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Import Components
import Trim from "./Sections/Trim/Trim";
import ExteriorSection from "./Sections/Exterior/Exterior";
import InteriorSection from './Sections/Interior/Interior';
import RightSideHeader  from "../RightPage/Header/Header.js";
import OptionsSection  from "./Sections/Options/Options";
import SummaryPage from "./SummaryPage/SummaryPage";

export const MainRight = () => {

  const [modal,updateModal] = useState(false);

  return (
    <div className="audi-container-right right-side-background">
      <BrowserRouter>
        <RightSideHeader/>
        <Routes>
            <Route path="/" element={<Trim />} />
          <Route path="/Exterior" element={<ExteriorSection />} />
          <Route path="/Interior" element={<InteriorSection />} />
          <Route path="/Options" element={<OptionsSection />} updateModal={updateModal}/>
          <Route path="/Summary" element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
