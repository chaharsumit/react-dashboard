export function addUserInput(field, value){
  field = field.toUpperCase();
  return {
    type: `SET_${field}`,
    payload: value
  }
}

export function toggleLoader(){
  console.log('toggle');
  return {
    type: "TOGGLE_LOADER"
  }
}

export function clearForm(){
  return {
    type: "CLEAR_FORM"
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