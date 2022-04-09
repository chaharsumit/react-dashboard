export function setUser(user){
  localStorage.setItem('email', user.email);
  localStorage.setItem('password', user.password);
}

export function getUser(){
  if(localStorage.email && localStorage.password){
    let user = {
      email: localStorage.email,
      password: localStorage.password
    }
    return user;
  }else{
    return null;
  }
}