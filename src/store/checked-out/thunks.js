import { check, uncheck } from "./actions";

export const checkThunk = (food) => (dispatch, getState) => {
  const list = JSON.parse(localStorage.getItem("checked")) || [];
  list.push(food);
  localStorage.setItem("checked", JSON.stringify(list));
  dispatch(check(food));
};

export const uncheckThunk = (id) => (dispatch, getState) => {
  const { checked } = getState();
  const list = checked.filter((product) => product.id !== id);
  localStorage.setItem("checked", JSON.stringify(list));
  dispatch(uncheck(list));
};
