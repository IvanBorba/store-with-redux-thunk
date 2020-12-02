const checkReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CHECKED":
      const { food } = action;
      return [...state, food];

    case "REMOVE_FROM_CHECKED":
      const newChecked = state.filter((food) => food !== action.food);
      return newChecked;

    default:
      return state;
  }
};

export default checkReducer;
