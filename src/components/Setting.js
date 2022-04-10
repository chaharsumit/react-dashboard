import { connect } from 'react-redux';
import AccountSetting from './AccountSetting';
import UserInfoSetting from './UserInfoSetting';
import { switchSettingForm, revertToPrevState, toggleSettings } from '../store/action';

function Setting(props){

  let { formVisibility } = props;

  return (
    <div className='form-container flex-col align-items-center justify-center'>
      <span className='close-btn text-light bold' onClick={() => {props.dispatch(switchSettingForm('account')); props.dispatch(revertToPrevState()); props.dispatch(toggleSettings())}}>X</span>
      <div className='flex justify-center mt-2 mb-2 flex-col-gap-1'>
        <h3 className={formVisibility.currSettingForm === 'account' ? 'text-md text-light bold active' : 'text-md text-light bold'} onClick={() => {props.dispatch(switchSettingForm('account')); props.dispatch(revertToPrevState())}}>Account</h3>
        <h3 className={formVisibility.currSettingForm === 'address' ? 'text-md text-light bold active' : 'text-md text-light bold'} onClick={() => {props.dispatch(switchSettingForm('address')); props.dispatch(revertToPrevState())}}>Address</h3>
      </div>
      {
        formVisibility.currSettingForm === 'account' ? <AccountSetting /> : <UserInfoSetting />
      }
    </div>
  )
}

function mapStateToProps(state){
  return {
    formVisibility: state.formVisibilityReducer
  }
}

export default connect(mapStateToProps)(Setting);