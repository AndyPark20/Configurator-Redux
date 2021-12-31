import React from 'react';

//CSS style
import './index.css';

//Import Components
import Trim from './sections/trim/';


export const MainRight=()=>{
  return (
    <div className="audi-container right-side-background">
      <div className="sections">
        <h4>TRIM</h4>
        <h4>EXTERIOR</h4>
        <h4>INTERIOR</h4>
        <h4>OPTIONS</h4>
        <h4>PACKAGES</h4>
        <h4>SUMMARY</h4>
      </div>
      <Trim/>
    </div>
  );
}
