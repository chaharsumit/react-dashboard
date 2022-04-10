import { connect } from "react-redux";
import {
  addUserInput,
  toggleLoader,
  fillCurrUserData,
  toggleSettings,
  switchSettingForm,
  setLoginStatus
} from "../store/action";
import { setUser } from "../utils/storage";

function UserInfoSetting(props) {

  let { user } = props;

  function handleChange({ target }) {
    console.log(target.name, target.value);
    return props.dispatch(addUserInput(target.name, target.value));
  }

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function handleSubmit(event) {
    event.preventDefault();
    props.dispatch(toggleLoader());
    await wait(2000);
    setUser(user);
    props.dispatch(fillCurrUserData(user));
    props.dispatch(toggleLoader());
    props.dispatch(toggleSettings());
    props.dispatch(switchSettingForm('account'));
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Your Name</legend>
        <input
          onChange={handleChange}
          value={user.firstName}
          name="firstname"
          type="text"
          placeholder="Enter First Name"
          id="firstName"
        />
        <input
          onChange={handleChange}
          value={user.lastName}
          name="lastname"
          type="text"
          placeholder="Enter Last Name"
          id="lastName"
        />
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <input
          onChange={handleChange}
          value={user.street}
          name="street"
          type="text"
          placeholder="Enter Last Name"
          id="lastName"
        />
        <input
          onChange={handleChange}
          value={user.house}
          name="house"
          type="text"
          placeholder="Enter last name"
          id="house"
        />
        <input
          onChange={handleChange}
          value={user.postalCode}
          name="postalcode"
          type="text"
          placeholder="Enter postal code"
          id="postalCode"
        />
        <input
          onChange={handleChange}
          value={user.number}
          name="number"
          type="number"
          placeholder="Enter number"
          id="number"
        />
      </fieldset>
      <fieldset>
        <legend>Country</legend>
        <select onChange={handleChange} name="country" id="country">
        <option value="" selected disabled>
          Select country
        </option>
        <option value="india">
          India
        </option>
        <option value="austria">
          Austria
        </option>
        <option value="germany">
          Germany
        </option>
        <option value="switzerland">
          Switzerland
        </option>
      </select>
      </fieldset>
      <input type="submit" value="Update data" />
    </form>
  );
}

function mapStateToProps(state) {
  return {
    user: state.currUserReducer,
    loader: state.loaderReducer
  };
}

export default connect(mapStateToProps)(UserInfoSetting);
