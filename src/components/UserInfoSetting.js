import { connect } from "react-redux";
import {
  addUserInput,
  toggleLoader,
  fillCurrUserData,
  toggleSettings,
  switchSettingForm
} from "../store/action";
import { setUser } from "../utils/storage";

function UserInfoSetting(props) {
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
    props.dispatch(fillCurrUserData(user));
    props.dispatch(toggleLoader());
    props.dispatch(toggleSettings());
    props.dispatch(switchSettingForm("account"));
  }

  return (
    <form
      className="form setting-form flex flex-col justify-center align-items-center flex-row-gap-1"
      onSubmit={handleSubmit}
    >
      <h2 className="text-md text-light bold">Update Address Info</h2>
      <fieldset className="flex wd-100 flex-row wrap justify-space-between flex-row-gap-1">
        <legend className="bold text-light mb-1">Your Name</legend>
        <input
          className="form-control flex-48 form-control-sc-md"
          onChange={handleChange}
          value={user.firstName}
          name="firstname"
          type="text"
          placeholder="Enter First Name"
          id="firstName"
        />
        <input
          className="form-control flex-48 form-control-sc-md"
          onChange={handleChange}
          value={user.lastName}
          name="lastname"
          type="text"
          placeholder="Enter Last Name"
          id="lastName"
        />
      </fieldset>
      <fieldset className="flex wd-100 flex-row wrap justify-space-between flex-row-gap-1">
        <legend className="bold text-light mb-1">Address</legend>
        <input
          className="form-control flex-48 form-control-sc-md"
          onChange={handleChange}
          value={user.street}
          name="street"
          type="text"
          placeholder="Enter Street"
          id="lastName"
        />
        <input
          className="form-control flex-48 form-control-sc-md"
          onChange={handleChange}
          value={user.house}
          name="house"
          type="text"
          placeholder="Enter house"
          id="house"
        />
        <input
          className="form-control flex-48 form-control-sc-md"
          onChange={handleChange}
          value={user.postalCode}
          name="postalcode"
          type="text"
          placeholder="Enter postal code"
          id="postalCode"
        />
        <input
          className="form-control flex-48 form-control-sc-md"
          onChange={handleChange}
          value={user.number}
          name="number"
          type="number"
          placeholder="Enter number"
          id="number"
        />
      </fieldset>
      <fieldset className="wd-100">
        <legend className="bold text-light mb-1">Country</legend>
        <select
          className="form-control wd-100 form-control-sc-md"
          onChange={handleChange}
          name="country"
          id="country"
        >
          <option value="" selected disabled>
            Select country
          </option>
          <option value="india">India</option>
          <option value="austria">Austria</option>
          <option value="germany">Germany</option>
          <option value="switzerland">Switzerland</option>
        </select>
      </fieldset>
      <input
        type="submit"
        className="text-xsm btn btn-form bg-green text-light"
        value="Update Address"
      />
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
