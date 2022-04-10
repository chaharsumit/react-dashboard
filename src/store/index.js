import { createStore, combineReducers } from "redux";
import loaderReducer from "./reducers/loaderReducer";
import currUserReducer from './reducers/currUserReducer';
import formVisibilityReducer from './reducers/formVisibilityReducer';
import errorReducer from "./reducers/errorReducer";
import confirmPasswordReducer from './reducers/confirmPasswordReducer';

const rootReducer = combineReducers({
  loaderReducer: loaderReducer,
  currUserReducer: currUserReducer,
  formVisibilityReducer: formVisibilityReducer,
  errorReducer: errorReducer,
  confirmPasswordReducer: confirmPasswordReducer
});

const store = createStore(rootReducer);

export default store;