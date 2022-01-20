

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor,wheelSelection,interiorColor) => {
  console.log(interiorColor)
    return {
      type: "USER_SELECTION",
      payload: { trimSelection, model,exteriorColor,wheelSelection, interiorColor }
    };
};
