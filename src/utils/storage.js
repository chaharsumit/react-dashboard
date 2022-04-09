export function setUser(user){
  localStorage.setItem('user', user);
}

export function getUser(){
  if(localStorage.user){
    return localStorage.user;
  }else{
    return null;
  }
}