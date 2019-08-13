import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import LoginFormContainer from './components/auth/loginFormContainer';
import CampaignsAll from './components/campaigns/CampaignsAll';
import CampaignSingle from './components/campaigns/CampaignSingle';

import { AuthRoute, ProtectedRoute, FeedRoute } from './utils/routeUtils';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>

          <AuthRoute exact path="/" component={LoginFormContainer} />
          <Route exact path="/campaigns" component={CampaignsAll} />
          <Route exact path="/campaigns/:id" component={CampaignSingle} />
        </Switch>


      </div>
    )
  }
}

export default App;
