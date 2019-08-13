import {connect} from 'react-redux';
import { login } from '../../actions/loginActions';
import LoginForm from './loginForm';


const mdp = dispatch => {

  return {
      login: (user) => dispatch(login(user))
  };
};

export default connect(null, mdp)(LoginForm);