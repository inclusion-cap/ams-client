import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LoginFormContainer from './components/auth/loginFormContainer';
import CreateForm from './components/form/createForm';
import CampaignsAll from './components/campaigns/CampaignsAll';
import CampaignSingle from './components/campaigns/CampaignSingle';
import SubmissionSingle from './components/campaigns/SubmissionSingle';

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

          <AuthRoute exact path="/" component={LoginFormContainer} />
          <Route exact path="/campaigns" component={CampaignsAll} />
          <Route exact path="/campaigns/:id" component={CampaignSingle} />
          <Route exact path="/campaigns/:id/submissions/:subid" component={SubmissionSingle} />
        </Switch>


      </div>
    )
  }
}

export default App;
