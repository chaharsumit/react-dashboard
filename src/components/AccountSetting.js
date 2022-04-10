import { connect } from "react-redux";
import {
  addUserInput,
  toggleLoader,
  setErrors,
  fillCurrUserData,
  toggleSettings,
  clearConfirmPassword
} from "../store/action";
import { setUser } from "../utils/storage";

function AccountSetting(props) {
  let { user, errors, confirmPassword } = props;

  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );
  let mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
  );

  function passwordStrength() {
    let strength;
    if (mediumPassword.test(user.password)) {
      strength = "Medium";
    } else if (strongPassword.test(user.password)) {
      strength = "Strong";
    } else {
      strength = "Weak";
    }
    return strength;
  }

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
    if (confirmPassword.password === user.password) {
      props.dispatch(toggleLoader());
      await wait(2000);
      setUser(user);
      props.dispatch(fillCurrUserData(user));
      props.dispatch(toggleLoader());
      props.dispatch(toggleSettings());
      props.dispatch(clearConfirmPassword());
    } else {
      return alert("Password and confirm password did not match");
    }
  }

  return (
    <form
      className="form setting-form flex flex-col justify-center align-items-center flex-row-gap-1"
      onSubmit={handleSubmit}
    >
      <h2 className="text-md text-light bold">Update Credentials</h2>
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
      <p className="text-light text-usm">{errors.password}</p>
      <input
        onChange={handleChange}
        value={user.password}
        name="password"
        type="password"
        placeholder="Enter Password"
        className="form-control mb-1 form-control-sc-md"
        id="password"
      />
      <input
        onChange={handleChange}
        value={confirmPassword.password}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        className="form-control form-control-sc-md"
        id="confirm-password"
      />
      <p className="text-light text-usm">
        Password Strength: {passwordStrength()}
      </p>
      <input
        className="text-xsm btn btn-form bg-green text-light"
        type="submit"
        value="Update"
      />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer,
    loader: state.loaderReducer,
    errors: state.errorReducer,
    confirmPassword: state.confirmPasswordReducer
  };
}

export default connect(mapStateToProps)(AccountSetting);
