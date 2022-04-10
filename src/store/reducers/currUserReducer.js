import { getUser } from '../../utils/storage';

let initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  street: "",
  house: "",
  number: "",
  postalCode: "",
  country: "",
  isLoggedIn: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_FIRSTNAME":
    return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_STREET":
      return { ...state, street: action.payload };
    case "SET_HOUSE":
      return { ...state, house: action.payload };
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    case "SET_POSTALCODE":
      return { ...state, postalCode: action.payload };
    case "SET_LOGIN_STATUS":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "FILL_DATA_ON_LOGIN":
      return action.payload;
    case "LOGOUT":
      return initialState;
    case "REVERT_TO_PREV_STATE":
      return { ...getUser() }
    default:
      return state;
  }
}

export default userReducer;
