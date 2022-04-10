import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Signup from './components/Signup';
import { getUser, setUser } from './utils/storage';
import Login from './components/Login';
import Setting from './components/Setting';
import { useEffect } from 'react';
import { fillCurrUserData, setLoginStatus } from './store/action';

function App(props){

  let { isLoading, formVisibility, currUser } = props;

  useEffect(() => {
    if(getUser() && getUser().isLoggedIn){
      props.dispatch(setLoginStatus());
      props.dispatch(fillCurrUserData(getUser()));
    }
  },[]);

  return (
    <>
      <Header />
      {
        isLoading ? <p>loading...</p> : ""
      }
      {
        formVisibility.isLoginVisible && !currUser.isLoggedIn ? <Login /> : ""
      }
      {
        formVisibility.isSettingsVisible ? <Setting /> : ""
      }
      {
        !getUser() ? <Signup /> : ""
      }
      <main>
        <Dashboard />
      </main> 
    </>
  )
}

function mapStateToProps(state){
  return {
    isLoading: state.loaderReducer,
    currUser: state.currUserReducer,
    formVisibility: state.formVisibilityReducer,
  }
}

export default connect(mapStateToProps)(App);