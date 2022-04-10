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
    <form className="form setting-form flex flex-col justify-center align-items-center flex-row-gap-1" onSubmit={handleSubmit}>
      <h2 className="text-md text-light bold">Update Credentials</h2>
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
      <input className="btn btn-form bg-green text-light" type="submit" value="update credentials" />
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