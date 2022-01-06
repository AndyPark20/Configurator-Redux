

//Trim Selection
export const userSelectedTrim = (trimSelection, model, exteriorColor,wheelSelection) => {
    return {
      type: "USER_SELECTION",
      payload: { trimSelection, model,exteriorColor,wheelSelection }
    };
};
