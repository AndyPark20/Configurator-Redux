

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor) => {
    return {
      type: "TRIM_SELECTED",
      payload: { trimSelection, model,exteriorColor }
    };
};


//Exterior Color Selection
export const exteriorColorSelection =(trimSelection, model, exteriorColor)=>{
  return{
    type:"EXTERIOR_SELECTED",
    payload:{trimSelection,model, exteriorColor}
  };
};
