import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import loaderReducer from "./reducers/loaderReducer";
import currUserReducer from './reducers/currUserReducer';
import formVisibilityReducer from './reducers/formVisibilityReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  loaderReducer: loaderReducer,
  currUserReducer: currUserReducer,
  formVisibilityReducer: formVisibilityReducer,
});

const store = createStore(rootReducer);

export default store;