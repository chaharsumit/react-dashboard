import { connect } from "react-redux";
import {
  addUserInput,
  toggleLoader,
  setLoginStatus,
  fillCurrUserData,
  toggleLoginForm,
  clearLoginForm
} from "../store/action";
import { getUser, setUser } from "../utils/storage";
import Loader from "./Loader";

function Login(props) {
  let { user, loading } = props;

  function handleChange({ target }) {
    return props.dispatch(addUserInput(target.name, target.value));
  }

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  function authenticateUser() {
    if (
      user.email === getUser().email &&
      user.password === getUser().password
    ) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    props.dispatch(toggleLoader());
    await wait(2000);
    if (authenticateUser()) {
      let currUser = getUser();
      currUser.isLoggedIn = true;
      setUser(currUser);
      props.dispatch(fillCurrUserData(currUser));
      props.dispatch(toggleLoader());
      props.dispatch(toggleLoginForm());
    } else {
      props.dispatch(toggleLoader());
      alert("Email/Password inCorrect");
    }
  }

  return (
    <div className="form-container justify-center align-items-center">
      <span
        className="close-btn text-light bold"
        onClick={() => {
          props.dispatch(clearLoginForm());
          props.dispatch(toggleLoginForm());
        }}
      >
        X
      </span>
      <form
        className="form form-login-signup flex flex-col flex-row-gap-1 justify-center align-items-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-md text-light bold">Login</h2>
        <input
          onChange={handleChange}
          value={user.email}
          name="email"
          type="email"
          placeholder="Enter Email"
          className="form-control form-control-sc-md"
          id="email"
        />
        <input
          onChange={handleChange}
          value={user.password}
          name="password"
          type="password"
          placeholder="Enter Password"
          className="form-control form-control-sc-md"
          id="password"
        />
        <input
          type="submit"
          className="text-xsm btn btn-form bg-green text-light"
          value="Login"
        />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer,
    loading: state.loaderReducer
  };
}

export default connect(mapStateToProps)(Login);
