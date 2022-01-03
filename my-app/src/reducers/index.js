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
                require("../img/premium/Q440e-tron/NavarraBluemetallic/2-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/3-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/4-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/5-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/1-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png")
              ],
            },
          },
        },
      },
      "Q4 50 e-tron": {
        spec:{
          engine:"Rear Permanently excited synchronous motor and front asynchronous motor",
          hp:"295",
          torque:"N/A",
          acceleration:"5.8",
          wheels:{
            wheelImage:[

            ]
          },
          standard_wheel_one:{
            extImage:{
              "Navarra Blue metallic": [
                require("../img/premium/Q450e-tron/NavarraBluemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png")
              ],
            }
          }
        }
      },
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
  wheelSelection:'standard_wheel_one',
  extColor:'Navarra Blue metallic',
  viewPosition:'extImage'
};

const userSelectedValues=(userValue=userSelectionDataObject,action)=>{
  console.log(action.payload)
  if (action.type === 'TRIM_SELECTED'){
    console.log(action.payload)
      return action.payload;
  }
  return userValue;
}

export default combineReducers({
  carData,
  userSelection:userSelectedValues
});
