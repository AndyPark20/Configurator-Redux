

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor,wheelSelection,interiorColor,sectionView, defaultOptions,selectedOptionCheck) => {
    return {
      type: "USER_SELECTION",
      payload: { trimSelection, model,exteriorColor,wheelSelection, interiorColor,sectionView,defaultOptions,selectedOptionCheck }
    };
};

//Option Selection
export const userSelectedOptions =(selectedOption,keys)=>{
  return {
    type:"USER_OPTIONS",
    payload:{selectedOption,keys}
  }
}

//Update Button Text ADD or REMOVE
export const removeOrAdd = (selection)=>{
  return{
    type:"ADD_REMOVE",
    paylod:{selection}
  }
}
