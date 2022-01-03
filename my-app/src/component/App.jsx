import React from 'react';

//CSS Style
import './App.css';



//Components
import MainLeft from '../Component/Mainpage/Leftpage/Leftpage';
import {MainRight} from '../Component/Mainpage/Rightpage/Rightpage';


export const App =()=>{
  return(
    <div className="page-split">
      <MainLeft/>
      <MainRight/>
    </div>
  );
};
