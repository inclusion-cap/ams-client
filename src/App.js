import React, {Component} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LoginFormContainer from './components/auth/loginFormContainer';
import CreateForm from './components/form/createForm';
import { AuthRoute, ProtectedRoute, FeedRoute } from './utils/routeUtils';
import FormShow from './components/form/formShow';

class App extends Component {

render() {
    return (
      <div>
        <Switch>
          {/* <AuthRoute exact path="/" component={ LoginFormContainer } /> */}
          {/* <AuthRoute exact path="/" component={ CreateForm } /> */}
          <AuthRoute exact path="/" component={ FormShow } />
          {/* <ProtectedRoute exact path="/campaigns" component={  } /> */}
        </Switch>


      </div>
    )
  }
}

export default App;
