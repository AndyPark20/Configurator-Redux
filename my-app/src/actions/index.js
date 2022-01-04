

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor) => {
    return {
      type: "USER_SELECTION",
      payload: { trimSelection, model,exteriorColor }
    };
};
