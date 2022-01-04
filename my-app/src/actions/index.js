//Trim Selection
export const userSelectedTrim = (selection, trim) => {
  if (selection && trim) {
    return {
      type: "TRIM_SELECTED",
      payload: { selection, trim },
    };
  }
};
