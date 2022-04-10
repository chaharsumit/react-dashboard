let initialState = {
  password: ""
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CONFIRMPASSWORD":
      return { ...state, password: action.payload };
    case "CLEAR_PASSWORD":
      return initialState;
    default:
      return state;
  }
}

export default userReducer;