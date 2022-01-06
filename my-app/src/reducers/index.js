import { combineReducers } from "redux";

//Master Car Data
const carData = () => {
  return {
    //--> EXTERIOR Colors
    extColorButtons: [
      {
        name: "Pebble Gray",
        img: require("../img/premium/Q440e-tron/PebbleGray/Button-Pebble Gray.png"),
      },
      {
        name: "Glacier White metallic",
        img: require("../img/premium/Q440e-tron/GlacierWhitemetallic/Button-Glacier White metallic.png"),
      },
      {
        name: "Mythos Black metallic",
        img: require("../img/premium/Q440e-tron/MythosBlackmetallic/Button-Mythos Black metallic.png"),
      },
      {
        name: "Navarra Blue metallic",
        img: require("../img/premium/Q440e-tron/NavarraBluemetallic/Button-Navarra Blue metallic.png"),
      },
    ],
    //-->User Selection
    Premium: {
      "Q4 40 e-tron": {
        spec: {
          engine: "Asynchronous electric motor®",
          hp: "201",
          torque: "N/A",
          acceleration: "7.9",
          layout: "rear-wheel drive",
          wheels: {
            wheelImage: [
              {
                standard_wheel_one: {
                  wheelName: '19" 5-W-spoke Aero design, graphite gray wheels',
                  img: require("../img/premium/Q440e-tron/Wheels/Standard/2022-Q4-40-e-tron-premium-standard-wheels.png"),
                  //Need standard_one two, etc or premium key value pair
                },
              },
            ],
          },
          //--> User Selection
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/premium/Q440e-tron/NavarraBluemetallic/1-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/2-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/3-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/4-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q440e-tron/NavarraBluemetallic/5-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/premium/Q440e-tron/MythosBlackmetallic/1-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q440e-tron/MythosBlackmetallic/2-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q440e-tron/MythosBlackmetallic/3-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q440e-tron/MythosBlackmetallic/4-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q440e-tron/MythosBlackmetallic/5-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/premium/Q440e-tron/PebbleGray/1-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q440e-tron/PebbleGray/2-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q440e-tron/PebbleGray/3-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q440e-tron/PebbleGray/4-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q440e-tron/PebbleGray/5-Standard Audi Q4 40 e-tron Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/premium/Q440e-tron/GlacierWhitemetallic/1-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/premium/Q440e-tron/GlacierWhitemetallic/2-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/premium/Q440e-tron/GlacierWhitemetallic/3-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/premium/Q440e-tron/GlacierWhitemetallic/4-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/premium/Q440e-tron/GlacierWhitemetallic/5-standard Audi Q4 40 e-tron Glacier White metallic.png"),
              ],
            },
          },
        },
      },
      "Q4 50 e-tron": {
        spec: {
          engine:
            "Rear Permanently excited synchronous motor and front asynchronous motor",
          hp: "295",
          torque: "N/A",
          acceleration: "5.8",
          layout: "quattro",
          wheels: {
            wheelImage: [
              {
                standard_wheel_one: {
                  wheelName: "19 5-arm design wheels",
                  img: require("../img/premium/Q450e-tron/Wheels/Standard/19 5-arm design wheels.png"),
                  //Need standard_one two, etc or premium key value pair
                },
              },
              {
                premium_wheel_one: {
                  wheelName: '20" 5-Y-spoke design, graphite gray wheels',
                  img: require("../img/premium/Q450e-tron/Wheels/Premium/20 5-Y-spoke design, graphite gray wheels.png"),
                  //Need standard_one two, etc or premium key value pair
                },
              },
            ],
          },
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/premium/Q450e-tron/NavarraBluemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/NavarraBluemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/premium/Q450e-tron/PebbleGray/1-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/PebbleGray/2-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/PebbleGray/3-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/PebbleGray/4-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/PebbleGray/5-Standard Audi Q4 40 e-tron Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/premium/Q450e-tron/GlacierWhitemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/GlacierWhitemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/GlacierWhitemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/GlacierWhitemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/GlacierWhitemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
              ],
            },
          },
        },
      },
    },
    "Premium Plus": {
      "Q4 40 e-tron": {
        spec: {
          engine: "Asynchronous electric motor®",
          hp: "201",
          torque: "N/A",
          acceleration: "7.9",
          layout: "rear-wheel drive",
          wheels: {
            wheelImage: [
              //--> user Selection
              //Need standard_one two, etc or premium key value pair
            ],
          },
        },
      },
      "Q4 50 e-tron": {
        spec: {
          engine:
            "Rear Permanently excited synchronous motor and front asynchronous motor",
          hp: "295",
          torque: "N/A",
          acceleration: "5.8",
          layout: "quattro",
          wheels: {
            wheelImage: [],
          },
        },
      },
    },
  };
};

const userSelectionDataObject = {
  trim: "Premium",
  model: "Q4 40 e-tron",
  wheelSelection: "standard_wheel_one",
  wheelName:'19" 5-W-spoke Aero design, graphite gray wheels',
  extColor: "Navarra Blue metallic",
  viewPosition: "extImage",
};

const userSelectedValues = (userValue = userSelectionDataObject, action) => {
  let updatedSelection = {};
  switch (action.type) {
    case "USER_SELECTION":
      updatedSelection = {
        ...userSelectionDataObject,
        trim: action.payload.trimSelection,
        model: action.payload.model,
        extColor: action.payload.exteriorColor,
      };
      return updatedSelection;

    default:
      return userValue;
  }
};

export default combineReducers({
  carData,
  userSelection: userSelectedValues,
});
