import {connect} from 'react-redux';
import { login } from '../../actions/loginActions';
import LoginForm from './loginForm';

const msp = (state, ownProps) => {
//   const session_errors = state.errors.session;
//   return {errors: session_errors, formType}
}

const mdp = dispatch => {

  return {
      login: (user) => dispatch(login(user))
  };
};

export default connect(msp, mdp)(LoginForm);