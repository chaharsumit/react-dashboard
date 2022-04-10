import { connect } from 'react-redux';
import AccountSetting from './AccountSetting';
import UserInfoSetting from './UserInfoSetting';
import { switchSettingForm, revertToPrevState } from '../store/action';

function Setting(props){

  let { formVisibility } = props;

  return (
    <>
      <p onClick={() => {props.dispatch(switchSettingForm('account')); props.dispatch(revertToPrevState())}}>account</p>
      <p onClick={() => {props.dispatch(switchSettingForm('address')); props.dispatch(revertToPrevState())}}>address</p>
      {
        formVisibility.currSettingForm === 'account' ? <AccountSetting /> : <UserInfoSetting />
      }
    </>
  )
}

function mapStateToProps(state){
  return {
    formVisibility: state.formVisibilityReducer
  }
}

export default connect(mapStateToProps)(Setting);