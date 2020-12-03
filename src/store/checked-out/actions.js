export const check = (food) => ({
  type: "ADD_TO_CHECKED",
  food,
});

export const uncheck = (list) => ({
  type: "REMOVE_FROM_CHECKED",
  list,
});
