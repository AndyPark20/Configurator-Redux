// import React from "react";
// import { connect } from 'react-redux';

// //Import CSS
// import './index.css';
// //Import Reducers
// import userSelectedTrim from '../../../Actions'

// const Trim = ({ data }) => {


//   //get id value for each onClick
//   const trimSelection=(e)=>{
//     console.log(userSelectedTrim)
//   }

//   //Render Trim Level
//   const renderTrimLevel = (values) => {
//     //Array holding values of Audi trim based on package level (i.e. 'Premium', etc....)
//     const trimLevelValueList = Object.keys(data[values]);

//     if (data.hasOwnProperty(values)) {
//       return (
//         <div className="trim-level-container">
//           <h4>{values}</h4>
//           {trimLevelValueList.map((trim, index) => {
//             return (
//               <div key={index} className="trim-border-style" id={trim} onClick={(e)=>trimSelection(e)}>{trim}</div>
//             )
//           })}
//         </div>
//       );
//     };
//   };

//   //Render Package level
//   const renderPackageLevel = () => {

//     //Get package level from data object
//     const packageLevel = Object.keys(data);

//     //loop thru the package list array and pass the value as an agument to renderTrimLevel function
//     const renderPackage = packageLevel.map((values, index) => {
//       return (
//         <div className="trim-option-width" key={index}>
//           {renderTrimLevel(values)}
//         </div>
//       )
//     });
//     return renderPackage;
//   };

//   return <div className="trim-container-width">
//     {renderPackageLevel()}
//   </div>;
// };


// //React-Redux connect to retrieve values from the Redux Store
// const thisMapStateToProps = (state) => {
//   return {
//     data: state.carData,
//   };
// };

// export default connect(thisMapStateToProps,{userSelectedTrim})(Trim);
