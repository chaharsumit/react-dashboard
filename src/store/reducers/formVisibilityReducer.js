let initialState = {
  isLoginVisible: false,
  isSettingsVisible: false,
  currSettingForm: "account",
}

export default function formVisibilityReducer(state=initialState, action){
  switch (action.type) {
    case "TOGGLE_LOGIN_FORM":
      return {...state, isLoginVisible: !state.isLoginVisible};
    case "TOGGLE_SETTING_FORM":
      return {...state, isSettingsVisible: !state.isSettingsVisible};
    case "SWITCH_CURRENT_SETTING_FORM_TO_ACCOUNT":
      return {...state, currSettingForm: "account"};
    case "SWITCH_CURRENT_SETTING_FORM_TO_ADDRESS":
      return {...state, currSettingForm: "address"};
    default:
      return state;
  }
}