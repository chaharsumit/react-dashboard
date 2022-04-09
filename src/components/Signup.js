import { connect } from "react-redux";
import { addUserInput, toggleLoader, clearForm, fillCurrUserData } from "../store/action";
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
    setUser(user);
    props.dispatch(clearForm());
    props.dispatch(toggleLoader());
    props.dispatch(fillCurrUserData(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={user.email}
        name="email"
        type="email"
        placeholder="Enter Email"
        id="email"
      />
      <input
        onChange={handleChange}
        value={user.password}
        name="password"
        type="password"
        placeholder="Enter Password"
        id="password"
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    user: state.authReducer,
    loader: state.loaderReducer,
  };
}

export default connect(mapStateToProps)(Signup);