import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignInScreen from './SignInScreen';

function mapStateToProps(state) {
  return {
    facebookUserID: state.facebookUserID,
    userID: state.userID,
    name: state.name,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (facebookUserID, name) => dispatch({ type: 'SIGN_IN', facebookUserID: facebookUserID, name: name })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen);
