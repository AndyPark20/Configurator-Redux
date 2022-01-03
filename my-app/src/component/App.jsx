import React from 'react';

//CSS Style
import './App.css';

//Components
import MainLeft from '../Component/MainPage/Leftpage/Leftpage';
import {MainRight} from '../Component/MainPage/RightPage/Rightpage';


export const App =()=>{
  return(
    <div className="page-split">
      <MainLeft/>
      <MainRight/>
    </div>
  );
};
