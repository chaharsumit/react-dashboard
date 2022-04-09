import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Signup from './components/Signup';
import { getUser } from './utils/storage';
import Login from './components/Login';
import Setting from './components/Setting';

function App(props){

  let { isLoading, formVisibility } = props;

  return (
    <>
      <Header />
      {
        isLoading ? <p>loading...</p> : ""
      }
      {
        formVisibility.isLoginVisible && (!props.currUser.email || !props.currUser.password) ? <Login /> : ""
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