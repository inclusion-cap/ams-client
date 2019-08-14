import React from 'react';
import { Link } from 'react-router-dom';

class CampaignSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.campaignDefault = {
      id: 1,
      name: 'c1',
      fields: [
        { label: 'l1', type: 't1' },
        { label: 'l2', type: 't2' },
        { label: 'l3', type: 't3' },
      ],
      submissions: [
        { id: 'a', campaign_id: 1, email: 'a@a.a', status: 'a', content: ['a', 'b', 'c'] },
        { id: 'A', campaign_id: 1, email: 'A@A.A', status: 'A', content: ['A', 'b', 'c'] },
        { id: 'C', campaign_id: 1, email: 'C@C.C', status: 'C', content: ['C', 'b', 'c'] },
        { id: 'D', campaign_id: 1, email: 'D@D.D', status: 'D', content: ['D', 'b', 'c'] },
      ]
    }
  }

  componentDidMount() {
    // if (this.props.location.hasOwnProperty('state')) {
    //   if (this.props.location.state.hasOwnProperty('campaign')) {
    //     console.log('props passed')
    //     this.setState({ campaign: this.props.location.state.campaign })
    //   } else {
    //     console.log('no props')
    //     this.setState({ campaign: campaignDefault })
    //   }
    // } else {
    // }
  }

  render() {
    const campaign = this.campaignDefault;
    const mapSubmissions = campaign.submissions.map(sub => (
      <div className="div-link" key={sub.id}><Link to={{ pathname: `/campaigns/${sub.campaign_id}/submissions/${sub.id}`, state: { campaign: campaign } }}>
        <h2>{sub.email}</h2>
        <p>Status: {sub.status}</p>
      </Link>
      </div>));

    return (
      <div className="index-container">
        {mapSubmissions}
      </div>
    );
  }
}

export default CampaignSingle;
