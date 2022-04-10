import { connect } from "react-redux";
import {
  addUserInput,
  toggleLoader,
  setLoginStatus,
  fillCurrUserData,
  setErrors
} from "../store/action";
import { setUser } from "../utils/storage";

function Signup(props) {
  let { user, errors } = props;

  function handleChange({ target }) {
    if (target.name === "email") {
      if (!target.value.includes("@")) {
        props.dispatch(setErrors(target.name, "Email must include @"));
      } else {
        props.dispatch(setErrors(target.name));
      }
    } else if (target.name === "password") {
      let regex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      );
      if (!regex.test(target.value)) {
        props.dispatch(
          setErrors(
            target.name,
            "Password must at least contain one uppercase, one lowercase, one number & one special character"
          )
        );
      } else {
        props.dispatch(setErrors(target.name));
      }
    }
    return props.dispatch(addUserInput(target.name, target.value));
  }

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function handleSubmit(event) {
    event.preventDefault();
    if (errors.email || errors.password) {
      return alert("Enter Fields Correctly");
    }
    props.dispatch(toggleLoader());
    await wait(2000);
    user.isLoggedIn = true;
    setUser(user);
    props.dispatch(fillCurrUserData(user));
    props.dispatch(toggleLoader());
  }

  return (
    <div className="form-container justify-center align-items-center">
      <form
        className="form form-login-signup flex flex-col flex-row-gap-1 justify-center align-items-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-md text-light bold">SignUp To Continue</h2>
        <p className="text-light text-usm">{errors.email}</p>
        <input
          onChange={handleChange}
          value={user.email}
          name="email"
          type="email"
          placeholder="Enter Email"
          className="form-control form-control-sc-md"
          id="email"
        />
        <p className="text-usm text-light">{errors.password}</p>
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
          className="mt-1 text-xsm btn btn-form bg-green text-light"
          value="Sign Up"
        />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer,
    loader: state.loaderReducer,
    errors: state.errorReducer
  };
}

export default connect(mapStateToProps)(Signup);
