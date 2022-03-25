

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor,wheelSelection,interiorColor,sectionView) => {
    return {
      type: "USER_SELECTION",
      payload: { trimSelection, model,exteriorColor,wheelSelection, interiorColor,sectionView }
    };
};

//Option Selection
export const userSelectedOptions =(selectedOption)=>{
  return {
    type:"USER_OPTIONS",
    payload:{selectedOption}
  }
}

//Update Button Text ADD or REMOVE
