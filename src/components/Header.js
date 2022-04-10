import { connect } from "react-redux";
import { toggleLoginForm, logout, toggleSettings } from "../store/action";
import { setLogin } from "../utils/storage";

function Header(props) {
  return (
    <header className="pd-ver-1 text-md bold text-primary">
      <div className="flex justify-space-between align-items-center container">
        <span className="brand">DashBoard</span>
        {props.currUser.email ||
        props.currUser.password ||
        props.currUser.isLoggedIn ? (
          <div className="flex flex-col-gap-1">
            <button
              className="btn bg-primary text-light bold"
              onClick={() => props.dispatch(toggleSettings())}
            >
              Settings
            </button>
            <button
              className="btn bg-primary text-light bold"
              onClick={() => {
                props.dispatch(logout());
                props.currUser.isLoggedIn = false;
                setLogin();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="btn bg-primary text-light bold"
            onClick={() => props.dispatch(toggleLoginForm())}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    currUser: state.currUserReducer,
    formVisibility: state.formVisibilityReducer
  };
}

export default connect(mapStateToProps)(Header);
