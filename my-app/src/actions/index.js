

//Trim Selection
export const userSelectedTrim = (selection, trim) => {
    return {
      type: "TRIM_SELECTED",
      payload: { selection, trim }
    };
};


//Exterior Color Selection
export const exteriorColorSelection =(selection)=>{
  return{
    type:"EXTERIOR_SELECTED",
    payload:{selection}
  };
};
