let initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  address: {
    street: "",
    house: "",
    number: "",
    postalCode: "",
  },
  country: "",
}

function userReducer(state = initialState, action){
  switch(action.type){
    case "FILL_DATA_ON_LOGIN":
      return { ...state, email: action.payload.email, password: action.payload.password };
    case "LOGOUT":
      return { ...state, email: "", password: "" };
    default:
      return state;
  }
}

export default userReducer;