import { connect } from 'react-redux';
import * as authenticationActions from './../actions';
import LoginForm from './loginForm';

const mapStateToProps = (state) => ({
  user: state.user,
  userRejectedAt: state.userRejectedAt
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) => {
    dispatch(authenticationActions.login(email, password));
  }
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
