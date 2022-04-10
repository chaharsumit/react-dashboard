import { connect } from "react-redux";
import { addUserInput, toggleLoader, clearForm, fillCurrUserData, toggleSettings } from "../store/action";
import { setUser } from '../utils/storage';

function AccountSetting(props){

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
    console.log(user);
    props.dispatch(fillCurrUserData(user));
    props.dispatch(toggleLoader());
    props.dispatch(toggleSettings());
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
      <input type="submit" value="update credentials" />
    </form>
  )
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer,
    loader: state.loaderReducer,
  };
}

export default connect(mapStateToProps)(AccountSetting);