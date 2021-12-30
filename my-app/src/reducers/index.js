import { combineReducers } from "redux";


const currentBuild =()=>{
  return{
    model:'Audi'
  };
};


export default combineReducers({
  currentBuildSetting:currentBuild
})
