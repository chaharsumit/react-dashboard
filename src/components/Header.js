import { connect } from "react-redux";
import { toggleLoginForm, logout, toggleSettings, setLoginStatus } from "../store/action";
import { setUser, setLogin } from "../utils/storage";

function Header(props){
  return (
    <header className="pd-ver-1">
      <div className="flex justify-space-between align-items-center container">
        <span className="brand">DashBoard</span>
        {
          props.currUser.isLoggedIn ? 
          (
            <>
              <button onClick={() => props.dispatch(toggleSettings())}>Settings</button>
              <button onClick={() => {props.dispatch(logout()); props.currUser.isLoggedIn=false; setLogin()}}>Logout</button>
            </>
          ) : <button onClick={() => props.dispatch(toggleLoginForm())}>Login</button>
        }
      </div> 
    </header>
  )
}

function mapStateToProps(state){
  return {
    currUser: state.currUserReducer,
    formVisibility: state.formVisibilityReducer
  }
}

export default connect(mapStateToProps)(Header);