export function addUserInput(field, value){
  field = field.toUpperCase();
  console.log(field);
  return {
    type: `SET_${field}`,
    payload: value
  }
}

export function toggleLoader(){
  return {
    type: "TOGGLE_LOADER"
  }
}

export function setLoginStatus(){
  console.log('ss');
  return {
    type: "SET_LOGIN_STATUS"
  }
}

export function fillCurrUserData(user){
  return {
    type: "FILL_DATA_ON_LOGIN",
    payload: user,
  }
}

export function toggleLoginForm(){
  return {
    type: "TOGGLE_LOGIN_FORM",
  }
}

export function clearLoginForm(){
  return {
    type: "SET_DATA_ON_LOGIN_FORM_TOGGLE"
  }
}

export function toggleSettings(){
  return {
    type: "TOGGLE_SETTING_FORM"
  }
}

export function logout(){
  return {
    type: 'LOGOUT'
  }
}

export function switchSettingForm(tab){
  tab = tab.toUpperCase();
  return {
    type: `SWITCH_CURRENT_SETTING_FORM_TO_${tab}`
  }
}

export function revertToPrevState(){
  return {
    type: "REVERT_TO_PREV_STATE"
  }
}

export function setErrors(name,value=''){
  name=name.toUpperCase();
  return {
    type: `${name}_ERROR`,
    payload: value
  }
}

export function clearConfirmPassword(){
  return {
    type: 'CLEAR_PASSWORD'
  }
}