export function setUser(user){
  console.log('lcoal');
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(){
  if(localStorage.user){
    return JSON.parse(localStorage.user);
  }else{
    return null;
  }
}

export function setLogin(){
  let user = JSON.parse(localStorage.user);
  user.isLoggedIn = false;
  localStorage.setItem('user', JSON.stringify(user));
}


/*
export function setUser(user){
  localStorage.setItem('user', JSON.stringify(user));
  console.log(JSON.parse(localStorage.user));
}

export function getUser(){
  let user = JSON.parse(localStorage.user);
  if(user.email && user.password){
    return user;
  }else{
    return null;
  }
}


*/