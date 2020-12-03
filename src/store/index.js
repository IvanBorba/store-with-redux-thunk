import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import foodsReducer from "./foods/";
import checkReducer from "./checked-out/";

const reducers = combineReducers({
  foods: foodsReducer,
  checked: checkReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
