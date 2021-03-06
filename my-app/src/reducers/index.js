import { combineReducers } from "redux";
// import { userSelectedOptions } from "../Actions";

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
          optionsPackages: [
            {
              "Convenience Package": {
                image: require("../img/premium/Q440e-tron/Options/Convenience package.png"),
                description: [
                  "Audi phone box light",
                  "Anti-theft alarm system",
                  "Acoustic front door windows",
                  "Logo projectors in exterior mirrors",
                  "Power front seats",
                  "4-way power lumbar for front seats",
                  "Power tailgate with hands-free opening",
                  "Audi advanced key (keyless engine start/stop & entry - doors and trunk)",
                  "Auto-dimming, power-folding exterior mirrors",
                  "Auto-dimming interior mirror with compass",
                  "Heated steering wheel",
                  "Memory for driver’s seat",
                  "SiriusXM® All Access service (w/ 3-month trial subscription)",
                ],
                click: false,
              },
            },
            {
              "Garage door opener (Homelink®)": {
                image: require("../img/premium/Q440e-tron/Options/Homelink.jpg"),
                description: [],
                click: false,
              },
            },
            {
              "Trailer hitch": {
                image: require("../img/premium/Q440e-tron/Options/Trailer-hitch.png"),
                description: [],
                click: false,
              },
            },
          ],
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
          interior: {
            intColorImage: [
              {
                name: "Santos Brown with Steel Gray stitching",
                url: require("../img/premium/Q440e-tron/Interior/InteriorButton/Santos Brown with Steel Gray stitching.png"),
              },
              {
                name: "Parchment Beige with steel gray stitching",
                url: require("../img/premium/Q440e-tron/Interior/InteriorButton/Parchment Beige with steel gray stitching.png"),
              },
              {
                name: "Black with Rock Gray stitching",
                url: require("../img/premium/Q440e-tron/Interior/InteriorButton/Black with Rock Gray stitching.png"),
              },
            ],
            intImage: {
              "Santos Brown with Steel Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/1-Santos-Brown-with-steel-Gray-stitching--Navarra Blue metallic.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/2-Santos-Brown-with-steel-Gray-stitching--Navarra Blue metallic.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Mythos Black metallic/Santos Brown with Steel Gray stitching/1-Santos Brown with Steel Gray stitching-Mythos Black metallic.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Mythos Black metallic/Santos Brown with Steel Gray stitching/2-Santos Brown with Steel Gray stitching-Mythos Black metallic.png"),
                ],
                "Glacier White metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Glacier White metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Glacier White metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/premium/Q440e-tron/Interior/No options/Pebble Gray/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Pebble Gray/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
              },

              "Parchment Beige with steel gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Mythos Black metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Mythos Black metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Glacier White metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Glacier White metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/premium/Q440e-tron/Interior/No options/Pebble Gray/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Pebble Gray/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
              },

              "Black with Rock Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Mythos Black metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Mythos Black metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/premium/Q440e-tron/Interior/No options/Glacier White metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Glacier White metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/premium/Q440e-tron/Interior/No options/Pebble Gray/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q440e-tron/Interior/No options/Pebble Gray/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
              },
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
          price: 49900,
          optionsPackages: [
            {
              "Convenience Package": {
                image: require("../img/premium/Q440e-tron/Options/Convenience package.png"),
                description: [
                  "Audi phone box light",
                  "Anti-theft alarm system",
                  "Acoustic front door windows",
                  "Logo projectors in exterior mirrors",
                  "Power front seats",
                  "4-way power lumbar for front seats",
                  "Power tailgate with hands-free opening",
                  "Audi advanced key (keyless engine start/stop & entry - doors and trunk)",
                  "Auto-dimming, power-folding exterior mirrors",
                  "Auto-dimming interior mirror with compass",
                  "Heated steering wheel",
                  "Memory for driver’s seat",
                  "SiriusXM® All Access service (w/ 3-month trial subscription)",
                ],
                click: false,
                price:1800
              },
            },
            {
              "Garage door opener (Homelink®)": {
                image: require("../img/premium/Q440e-tron/Options/Homelink.jpg"),
                description: [],
                click: false,
                price:250
              },
            },
            {
              "Trailer hitch": {
                image: require("../img/premium/Q440e-tron/Options/Trailer-hitch.png"),
                description: [],
                click: false,
                price:650
              },
            },
          ],
          wheels: {
            wheelImage: [
              {
                standard_wheel_one: {
                  wheelName: "19 5-arm design wheels",
                  img: require("../img/premium/Q450e-tron/Wheels/Standard/19 5-arm design wheels.png"),
                  price:'Standard'
                  //Need standard_one two, etc or premium key value pair
                },
              },
              {
                premium_wheel_one: {
                  wheelName: '20" 5-Y-spoke design, graphite gray wheels',
                  img: require("../img/premium/Q450e-tron/Wheels/Premium/20 5-Y-spoke design, graphite gray wheels.png"),
                  price: 800
                  //Need standard_one two, etc or premium key value pair
                },
              },
            ],
          },
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/premium/Q450e-tron/StandardWheels/NavarraBluemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/NavarraBluemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/NavarraBluemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/NavarraBluemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/NavarraBluemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/premium/Q450e-tron/StandardWheels/MythosBlackmetallic/1-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/MythosBlackmetallic/2-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/MythosBlackmetallic/3-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/MythosBlackmetallic/4-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/MythosBlackmetallic/5-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/premium/Q450e-tron/StandardWheels/PebbleGray/1-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/StandardWheels/PebbleGray/2-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/StandardWheels/PebbleGray/3-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/StandardWheels/PebbleGray/4-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/premium/Q450e-tron/StandardWheels/PebbleGray/5-Standard Audi Q4 40 e-tron Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/premium/Q450e-tron/StandardWheels/GlacierWhitemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/GlacierWhitemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/GlacierWhitemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/GlacierWhitemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/premium/Q450e-tron/StandardWheels/GlacierWhitemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
              ],
            },
          },
          premium_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/premium/Q450e-tron/PremiumWheels/NavarraBluemetallic/1-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/NavarraBluemetallic/2-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/NavarraBluemetallic/3-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/NavarraBluemetallic/4-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/NavarraBluemetallic/5-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/premium/Q450e-tron/PremiumWheels/MythosBlackmetallic/1-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/MythosBlackmetallic/2-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/MythosBlackmetallic/3-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/MythosBlackmetallic/4-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/MythosBlackmetallic/5-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/premium/Q450e-tron/PremiumWheels/PebbleGray/1-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/PebbleGray/2-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/PebbleGray/3-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/PebbleGray/4-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/PebbleGray/5-Audi-Q4-50-e-tron-Pebble-Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/premium/Q450e-tron/PremiumWheels/GlacierWhitemetallic/1-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/GlacierWhitemetallic/2-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/GlacierWhitemetallic/3-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/GlacierWhitemetallic/4-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/premium/Q450e-tron/PremiumWheels/GlacierWhitemetallic/5-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
              ],
            },
          },
          interior: {
            intColorImage: [
              {
                name: "Santos Brown with Steel Gray stitching",
                url: require("../img/premium/Q450e-tron/Interior/InteriorButton/Santos Brown with Steel Gray stitching.png"),
              },
              {
                name: "Parchment Beige with steel gray stitching",
                url: require("../img/premium/Q450e-tron/Interior/InteriorButton/Parchment Beige with steel gray stitching.png"),
              },
              {
                name: "Black with Rock Gray stitching",
                url: require("../img/premium/Q450e-tron/Interior/InteriorButton/Black with Rock Gray stitching.png"),
              },
            ],
            intImage: {
              "Santos Brown with Steel Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/1-Santos-Brown-with-steel-Gray-stitching--Navarra Blue metallic.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/2-Santos-Brown-with-steel-Gray-stitching--Navarra Blue metallic.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Mythos Black metallic/Santos Brown with Steel Gray stitching/1-Santos Brown with Steel Gray stitching-Mythos Black metallic.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Mythos Black metallic/Santos Brown with Steel Gray stitching/2-Santos Brown with Steel Gray stitching-Mythos Black metallic.png"),
                ],
                "Glacier White metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Glacier White metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Glacier White metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/premium/Q450e-tron/Interior/No options/Pebble Gray/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Pebble Gray/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
              },

              "Parchment Beige with steel gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Mythos Black metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Mythos Black metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Glacier White metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Glacier White metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/premium/Q450e-tron/Interior/No options/Pebble Gray/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Pebble Gray/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
              },

              "Black with Rock Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Mythos Black metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Mythos Black metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/premium/Q450e-tron/Interior/No options/Glacier White metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Glacier White metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/premium/Q450e-tron/Interior/No options/Pebble Gray/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/premium/Q450e-tron/Interior/No options/Pebble Gray/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
              },
            },
          },
        },
      },
    },
    "Premium Plus": {
      /*"Q4 40 e-tron": {
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
              {
                standard_wheel_one: {
                  wheelName: '19" 5-W-spoke Aero design, graphite gray wheels',
                  img: require("../img/PremiumPlus/Q440e-tron/Wheels/Standard/2022-Q4-40-e-tron-premium-standard-wheels.png"),
                  //Need standard_one two, etc or premium key value pair
                },
              },
            ],
          },
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/PremiumPlus/Q440e-tron/NavarraBluemetallic/1-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/NavarraBluemetallic/2-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/NavarraBluemetallic/3-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/NavarraBluemetallic/4-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/NavarraBluemetallic/5-Audi-Q4-40-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/PremiumPlus/Q440e-tron/MythosBlackmetallic/1-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/MythosBlackmetallic/2-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/MythosBlackmetallic/3-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/MythosBlackmetallic/4-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/MythosBlackmetallic/5-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/PremiumPlus/Q440e-tron/PebbleGray/1-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q440e-tron/PebbleGray/2-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q440e-tron/PebbleGray/3-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q440e-tron/PebbleGray/4-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q440e-tron/PebbleGray/5-Standard Audi Q4 40 e-tron Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/PremiumPlus/Q440e-tron/GlacierWhitemetallic/1-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/GlacierWhitemetallic/2-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/GlacierWhitemetallic/3-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/GlacierWhitemetallic/4-standard Audi Q4 40 e-tron Glacier White metallic.png"),
                require("../img/PremiumPlus/Q440e-tron/GlacierWhitemetallic/5-standard Audi Q4 40 e-tron Glacier White metallic.png"),
              ],
            },
          },
          interior: {
            intColorImage: [
              {
                name: "Santos Brown with Steel Gray stitching",
                url: require("../img/PremiumPlus/Q440e-tron/Interior/InteriorButton/Santos Brown with Steel Gray stitching.png"),
              },
              {
                name: "Parchment Beige with steel gray stitching",
                url: require("../img/PremiumPlus/Q440e-tron/Interior/InteriorButton/Parchment Beige with steel gray stitching.png"),
              },
              {
                name: "Black with Rock Gray stitching",
                url: require("../img/PremiumPlus/Q440e-tron/Interior/InteriorButton/Black with Rock Gray stitching.png"),
              },
            ],
            intImage: {
              "Santos Brown with Steel Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Mythos Black metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Mythos Black metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Glacier White metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Glacier White metallic/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/PebbleGray/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/PebbleGray/Santos Brown with Steel Gray stitching/Santos Brown with Steel Gray stitching-2.png"),
                ],
              },

              "Parchment Beige with steel gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Mythos Black metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Mythos Black metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Glacier White metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Glacier White metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],

                "Pebble Gray": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/PebbleGray/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/PebbleGray/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
              },

              "Black with Rock Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Mythos Black metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Mythos Black metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Glacier White metallic": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Glacier White metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/Glacier White metallic/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
                "Pebble Gray": [
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/PebbleGray/Black with Rock Gray stitching/Black with Rock Gray stitching-1.png"),
                  require("../img/PremiumPlus/Q440e-tron/Interior/No options/PebbleGray/Black with Rock Gray stitching/Black with Rock Gray stitching-2.png"),
                ],
              },
            },
          },
        },
      },*/
      "Q4 50 e-tron": {
        spec: {
          engine:
            "Rear Permanently excited synchronous motor and front asynchronous motor",
          hp: "295",
          torque: "N/A",
          acceleration: "5.8",
          layout: "quattro",
          price: 54000,
          wheels: {
            wheelImage: [
              {
                standard_wheel_one: {
                  wheelName: "19 5-arm design wheels",
                  img: require("../img/PremiumPlus/Q450e-tron/Wheels/Standard/19 5-arm design wheels.png"),
                  price:'Standard'
                  //Need standard_one two, etc or premium key value pair
                },
              },
              {
                premium_wheel_one: {
                  wheelName: '20" 5-Y-spoke design, graphite gray wheels',
                  img: require("../img/PremiumPlus/Q450e-tron/Wheels/Premium/20 5-Y-spoke design, graphite gray wheels.png"),
                  //Need standard_one two, etc or premium key value pair
                  price:800
                },
              },
              {
                premium_wheel_two: {
                  wheelName:
                    '20" 10-spoke-star-aero design, black finish wheels',
                  img: require("../img/PremiumPlus/Q450e-tron/Wheels/Premium/20 10-spoke-star-aero design, black finish wheels-1.png"),
                  //Need standard_one two, etc or premium key value pair
                },
              },
            ],
          },
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/NavarraBluemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/NavarraBluemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/NavarraBluemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/NavarraBluemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/NavarraBluemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/MythosBlackmetallic/1-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/MythosBlackmetallic/2-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/MythosBlackmetallic/3-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/MythosBlackmetallic/4-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/MythosBlackmetallic/5-standard Audi Q4 40 e-tron Mythos Black metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/PebbleGray/1-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/PebbleGray/2-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/PebbleGray/3-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/PebbleGray/4-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/PebbleGray/5-Standard Audi Q4 40 e-tron Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/GlacierWhitemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/GlacierWhitemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/GlacierWhitemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/GlacierWhitemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/StandardWheels/GlacierWhitemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-glacier-white-metallic.png"),
              ],
            },
          },
          premium_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/NavarraBluemetallic/1-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/NavarraBluemetallic/2-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/NavarraBluemetallic/3-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/NavarraBluemetallic/4-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/NavarraBluemetallic/5-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/MythosBlackmetallic/1-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/MythosBlackmetallic/2-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/MythosBlackmetallic/3-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/MythosBlackmetallic/4-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/MythosBlackmetallic/5-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/PebbleGray/1-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/PebbleGray/2-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/PebbleGray/3-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/PebbleGray/4-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/PebbleGray/5-Audi-Q4-50-e-tron-Pebble-Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/GlacierWhitemetallic/1-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/GlacierWhitemetallic/2-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/GlacierWhitemetallic/3-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/GlacierWhitemetallic/4-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheels/GlacierWhitemetallic/5-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
              ],
            },
          },
          premium_wheel_two: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/NavarraBluemetallic/1-Audi-Q4-50-e-tron-Navarra Blue metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/NavarraBluemetallic/2-Audi-Q4-50-e-tron-Navarra Blue metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/NavarraBluemetallic/3-Audi-Q4-50-e-tron-Navarra Blue metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/NavarraBluemetallic/4-Audi-Q4-50-e-tron-Navarra Blue metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/NavarraBluemetallic/5-Audi-Q4-50-e-tron-Navarra Blue metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/MythosBlackmetallic/1-Audi-Q4-50-e-tron-Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/MythosBlackmetallic/2-Audi-Q4-50-e-tron-Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/MythosBlackmetallic/3-Audi-Q4-50-e-tron-Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/MythosBlackmetallic/4-Audi-Q4-50-e-tron-Mythos Black metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/MythosBlackmetallic/5-Audi-Q4-50-e-tron-Mythos Black metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/PebbleGray/1-Audi-Q4-50-e-tron-Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/PebbleGray/2-Audi-Q4-50-e-tron-Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/PebbleGray/3-Audi-Q4-50-e-tron-Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/PebbleGray/4-Audi-Q4-50-e-tron-Pebble Gray.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/PebbleGray/5-Audi-Q4-50-e-tron-Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/GlacierWhitemetallic/1-Audi-Q4-50-e-tron-Glacier White metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/GlacierWhitemetallic/2-Audi-Q4-50-e-tron-Glacier White metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/GlacierWhitemetallic/3-Audi-Q4-50-e-tron-Glacier White metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/GlacierWhitemetallic/4-Audi-Q4-50-e-tron-Glacier White metallic.png"),
                require("../img/PremiumPlus/Q450e-tron/PremiumWheelsTwo/GlacierWhitemetallic/5-Audi-Q4-50-e-tron-Glacier White metallic.png"),
              ],
            },
          },
          interior: {
            intColorImage: [
              {
                name: "Santos Brown with Steel Gray stitching",
                url: require("../img/PremiumPlus/Q450e-tron/Interior/InteriorButton/Santos Brown with Steel Gray stitching.png"),
              },
              {
                name: "Parchment Beige with steel gray stitching",
                url: require("../img/PremiumPlus/Q450e-tron/Interior/InteriorButton/Parchment Beige with steel gray stitching.png"),
              },
              {
                name: "Black with Rock Gray stitching",
                url: require("../img/PremiumPlus/Q450e-tron/Interior/InteriorButton/Black with Rock Gray stitching.png"),
              },
              {
                name: "Black with Rock Gray stitching S-Line®",
                url: require("../img/PremiumPlus/Q450e-tron/Interior/InteriorButton/Black with Rock Gray stitching bolstered.png"),
              },
            ],
            intImage: {
              "Santos Brown with Steel Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/1-Santos Brown with Steel Gray stitching.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/No options/Navarra Blue metallic/Santos Brown with Steel Gray stitching/2-Santos Brown with Steel Gray stitching.png"),
                ],
                "Mythos Black metallic": [],
                "Glacier White metallic": [],
                "Pebble Gray": [],
              },

              "Parchment Beige with steel gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-1.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/No options/Navarra Blue metallic/Parchment Beige with steel gray stitching/Parchment Beige with steel gray stitching-2.png"),
                ],
                "Mythos Black metallic": [],
                "Glacier White metallic": [],

                "Pebble Gray": [],
              },

              "Black with Rock Gray stitching": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/1-Black with Rock Gray stitching.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/No options/Navarra Blue metallic/Black with Rock Gray stitching/2-Black with Rock Gray stitching.png"),
                ],
                "Mythos Black metallic": [],
                "Glacier White metallic": [],
                "Pebble Gray": [],
              },
              "Black with Rock Gray stitching S-Line®": {
                "Navarra Blue metallic": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/NavarraBluemetallic/1-Black with Rock Gray stitching.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/NavarraBluemetallic/2-Black with Rock Gray stitching.png"),
                ],
                "Mythos Black metallic": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/MythosBlackmetallic/1-Black with Rock Gray stitching.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/MythosBlackmetallic/2-Black with Rock Gray stitching.png"),
                ],
                "Glacier White metallic": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/GlacierWhitemetallic/1-Black with Rock Gray stitching.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/GlacierWhitemetallic/2-Black with Rock Gray stitching.png"),
                ],
                "Pebble Gray": [
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/PebbleGray/1-Black with Rock Gray stitching.png"),
                  require("../img/PremiumPlus/Q450e-tron/Interior/Sline/PebbleGray/2-Black with Rock Gray stitching.png"),
                ],
              },
            },
          },
        },
      },
    },
    Prestige: {
      "Q4 50 e-tron": {
        spec: {
          engine:
            "Rear Permanently excited synchronous motor and front asynchronous motor",
          hp: "295",
          torque: "N/A",
          acceleration: "5.8",
          layout: "quattro",
          price: 57500,
          wheels: {
            wheelImage: [
              {
                standard_wheel_one: {
                  wheelName: "19 5-arm design wheels",
                  img: require("../img/PremiumPlus/Q450e-tron/Wheels/Standard/19 5-arm design wheels.png"),
                  price:'Standard'
                  //Need standard_one two, etc or premium key value pair
                },
              },
              {
                premium_wheel_one: {
                  wheelName: '20" 5-Y-spoke design, graphite gray wheels',
                  img: require("../img/PremiumPlus/Q450e-tron/Wheels/Premium/20 5-Y-spoke design, graphite gray wheels.png"),
                  price:800
                  //Need standard_one two, etc or premium key value pair
                },
              },
            ],
          },
          standard_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/Prestige/Q450e-tron/StandardWheels/NavarraBluemetallic/1-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/NavarraBluemetallic/2-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/NavarraBluemetallic/3-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/NavarraBluemetallic/4-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/NavarraBluemetallic/5-standard-One-wheel-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/Prestige/Q450e-tron/StandardWheels/MythosBlackmetallic/1-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/MythosBlackmetallic/2-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/MythosBlackmetallic/3-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/MythosBlackmetallic/4-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/MythosBlackmetallic/5-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/Prestige/Q450e-tron/StandardWheels/PebbleGray/1-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/PebbleGray/2-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/PebbleGray/3-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/PebbleGray/4-Standard Audi Q4 40 e-tron Pebble Gray.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/PebbleGray/5-Standard Audi Q4 40 e-tron Pebble Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/Prestige/Q450e-tron/StandardWheels/GlacierWhitemetallic/1-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/GlacierWhitemetallic/2-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/GlacierWhitemetallic/3-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/GlacierWhitemetallic/4-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/StandardWheels/GlacierWhitemetallic/5-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
              ],
            },
          },
          premium_wheel_one: {
            extImage: {
              "Navarra Blue metallic": [
                require("../img/Prestige/Q450e-tron/PremiumWheels/NavarraBluemetallic/1-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/NavarraBluemetallic/2-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/NavarraBluemetallic/3-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/NavarraBluemetallic/4-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/NavarraBluemetallic/5-Audi-Q4-50-e-tron-Navarra-Blue-metallic.png"),
              ],
              "Mythos Black metallic": [
                require("../img/Prestige/Q450e-tron/PremiumWheels/MythosBlackmetallic/1-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/MythosBlackmetallic/2-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/MythosBlackmetallic/3-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/MythosBlackmetallic/4-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/MythosBlackmetallic/5-Audi-Q4-50-e-tron-Mythos-Black-metallic.png"),
              ],
              "Pebble Gray": [
                require("../img/Prestige/Q450e-tron/PremiumWheels/PebbleGray/1-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/PebbleGray/2-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/PebbleGray/3-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/PebbleGray/4-Audi-Q4-50-e-tron-Pebble-Gray.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/PebbleGray/5-Audi-Q4-50-e-tron-Pebble-Gray.png"),
              ],
              "Glacier White metallic": [
                require("../img/Prestige/Q450e-tron/PremiumWheels/GlacierWhitemetallic/1-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/GlacierWhitemetallic/2-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/GlacierWhitemetallic/3-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/GlacierWhitemetallic/4-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
                require("../img/Prestige/Q450e-tron/PremiumWheels/GlacierWhitemetallic/5-Audi-Q4-50-e-tron-Glacier-White-metallic.png"),
              ],
            },
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
  wheelName: '19" 5-W-spoke Aero design, graphite gray wheels',
  extColor: "Navarra Blue metallic",
  viewPosition: "extImage",
  intcolor: "Santos Brown with Steel Gray stitching",
  price:49999,
  optionedPrice:49999,
  sectionView: true,
  selectedOptions: [],
  userTrimSelectedOptions: [],
};

const userSelectedValues = (userValue = userSelectionDataObject, action) => {
  let updatedSelection = {};
  switch (action.type) {
    case "USER_SELECTION":
      updatedSelection = {
        ...userValue,
        trim: action.payload.trimSelection,
        model: action.payload.model,
        extColor: action.payload.exteriorColor,
        wheelSelection: action.payload.wheelSelection,
        intcolor: action.payload.interiorColor,
        sectionView: action.payload.sectionView,
        price: action.payload.price,
        optionedPrice:action.payload.price,
        selectedOptions: [
          {
            option: action.payload.defaultOptions,
            click: action.payload.selectedOptionCheck,
          },
        ],
        wheelName:action.payload.wheelTitle
      };
      return updatedSelection;

    case "USER_OPTIONS":
      //push new selected optionn into the selected Options array.
      updatedSelection = {
        ...userValue,
        selectedOptions: action.payload.selectedOption,
        userTrimSelectedOptions: [
          ...userValue.userTrimSelectedOptions,
          action.payload.keys,
        ],
        optionedPrice: userValue.optionedPrice +action.payload.optionPricing
      };
      return updatedSelection;

    case "DELETE_OPTIONS":
      if(userValue.userTrimSelectedOptions.length !==0){
        userValue.userTrimSelectedOptions.forEach((values,index) =>{
          if(values === action.payload.removeSelectedOptions){
            //Use Splice method to remove de-selected option from userTrimSelectedoptions array.
             userValue.userTrimSelectedOptions.splice(index, 1);
               updatedSelection = {
                 ...userValue,
                 userTrimSelectedOptions: userValue.userTrimSelectedOptions,
                 optionedPrice: userValue.optionedPrice - action.payload.removeSelectedPricing
               };
          };
        });
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
