import { createStore, combineReducers } from "redux";

import foodsReducer from "./foods/";
import checkReducer from "./checked-out/";

const reducers = combineReducers({
  foods: foodsReducer,
  checked: checkReducer,
});

const store = createStore(reducers);

export default store;
