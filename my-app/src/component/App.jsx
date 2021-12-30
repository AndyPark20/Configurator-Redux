import React from 'react';

//CSS Style
import './App.css';



//Components
import {MainLeft} from '../component/mainPage/leftPage';
import {MainRight} from '../component/mainPage/rightPage';


export const App =()=>{
  return(
    <div className="page-split">
      <MainLeft/>
      <MainRight/>
    </div>
  );
};
