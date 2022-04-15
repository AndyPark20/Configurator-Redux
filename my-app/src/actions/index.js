

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor,wheelSelection,interiorColor,sectionView, defaultOptions,selectedOptionCheck, trimBasePrice) => {
  console.log(trimBasePrice)
    return {
      type: "USER_SELECTION",
      payload: { trimSelection, model,exteriorColor,wheelSelection, interiorColor,sectionView,defaultOptions,selectedOptionCheck, price:trimBasePrice }
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

//Delete options that user wants to remove
export const deleteOptions = (removeSelectedOptions)=>{
  return{
    type:"DELETE_OPTIONS",
    payload:{removeSelectedOptions}
  }
}
