import React from "react";
import { Link } from "react-router-dom";





export const RightSideHeader=()=>{
  return (
    <div className="sections">
      <Link to="/Trim">
        <h4>TRIM</h4>
      </Link>
      <Link to="/Exterior">
        <h4>EXTERIOR</h4>
      </Link>
      <Link to="/Interior">
        <h4>INTERIOR</h4>
      </Link>
      <Link to="/Options">
        <h4>OPTIONS</h4>
      </Link>
      <Link to="/Packages">
        <h4>PACKAGES</h4>
      </Link>
      <Link to="/Summary">
        <h4>SUMMARY</h4>
      </Link>
    </div>
  );
}
