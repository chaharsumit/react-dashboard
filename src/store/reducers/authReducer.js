let initialState = {
  email: "",
  password: "",
}

function authReducer(state = initialState, action){
  switch(action.type){
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "CLEAR_FORM":
      return initialState;
    default:
      return state;
  }
}

export default authReducer;