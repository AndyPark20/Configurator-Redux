

export const userSelectedTrim =(packageSelection,trim)=>{
  return{
    type:'TRIM_SELECTED',
    payload:{packageSelection,trim}
  };
};
