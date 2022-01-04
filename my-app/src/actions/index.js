

//Trim Selection
export const userSelectedTrim =(packageSelection,trim)=>{
  return{
    type:'TRIM_SELECTED',
    payload:{packageSelection,trim}
  };
};

//Exterior and Interior Color Selected
export const extColorSelection=(extColorSelection)=>{
  console.log(extColorSelection)
  return {
    type:'COLOR_SELECTED',
    payload: extColorSelection
  };
};
