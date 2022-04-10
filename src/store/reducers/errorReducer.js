let initialState = {
  email: "",
  password: ""
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case "EMAIL_ERROR":
      return { ...state, email: action.payload };
    case "PASSWORD_ERROR":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}