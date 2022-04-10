import { connect } from "react-redux";
import { addUserInput, toggleLoader, setLoginStatus, fillCurrUserData } from "../store/action";
import { setUser } from '../utils/storage';

function Signup(props) {
  let { user } = props;

  function handleChange({ target }) {
    return props.dispatch(addUserInput(target.name, target.value));
  }

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function handleSubmit(event) {
    event.preventDefault();
    props.dispatch(toggleLoader());
    await wait(2000);
    user.isLoggedIn = true;
    setUser(user);
    props.dispatch(fillCurrUserData(user));
    props.dispatch(toggleLoader());
  }

  return (
    <div className="form-container justify-center align-items-center">
      <form className="form flex flex-col flex-row-gap-1 justify-center align-items-center" onSubmit={handleSubmit}>
        <h2 className="text-md text-light bold">SignUp To Continue</h2>
        <input
          onChange={handleChange}
          value={user.email}
          name="email"
          type="email"
          placeholder="Enter Email"
          className="form-control"
          id="email"
        />
        <input
          onChange={handleChange}
          value={user.password}
          name="password"
          type="password"
          placeholder="Enter Password"
          className="form-control"
          id="password"
        />
        <input type="submit" className="btn btn-form bg-green text-light" value="Sign Up" />
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer,
    loader: state.loaderReducer,
  };
}

export default connect(mapStateToProps)(Signup);