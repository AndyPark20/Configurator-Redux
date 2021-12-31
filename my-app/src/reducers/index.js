import { combineReducers } from "redux";

//Master Car Data
const carData = () => {
  return {
    //-->User Selection
    Premium: {
      "Q4 40 e-tron": {
        spec: {
          engine: "Asynchronous electric motor",
          hp: "201",
          torque: "N/A",
          acceleration: "7.9",
          wheels: {
            wheelImage: [
              //--> user Selection
                //Need standard_one two, etc or premium key value pair
            ],
          },
          //--> User Selection
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/Q440e-tron/NavarraBluemetallic/1-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Q440e-tron/NavarraBluemetallic/2-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Q440e-tron/NavarraBluemetallic/3-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Q440e-tron/NavarraBluemetallic/4-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Q440e-tron/NavarraBluemetallic/5-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
              ],
            },
          },
        },
      },
      "Q4 50 e-tron": {},
    },
    "Premium Plus": {
      "Q4 40 e-tron": {},
      "Q4 50 e-tron": {},
    },
  };
};

const userSelectionDataObject={
  level:'Premium',
  trim:'Q4 40 e-tron',
  wheel_Selection:'standard_wheel_one',
  ext_Color:'Navarra Blue metallic',
  view_Position:'extImage'
};

const userSelectedValues=(userValue=userSelectionDataObject,action)=>{
  return userSelectionDataObject;
}

export default combineReducers({
  carData,
  user_Selection:userSelectedValues
});
