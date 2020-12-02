export const check = (food) => ({
  type: "ADD_TO_CHECKED",
  food,
});

export const uncheck = (food) => ({
  type: "REMOVE_FROM_CHECKED",
  food,
});
