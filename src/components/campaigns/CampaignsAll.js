import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/displayAll.css';

const campaigns = [
  {
    id: 1,
    name: 'Inclusion Hire Campaign',
    fields: {},
    status: 'here',
    submissions: [
      { id: 'a', email: 'a@a.a', status: 'a', content: ['a', 'b', 'c'] },
      { id: 'A', email: 'A@A.A', status: 'A', content: ['A', 'b', 'c'] },
      { id: 'C', email: 'C@C.C', status: 'C', content: ['C', 'b', 'c'] },
      { id: 'D', email: 'D@D.D', status: 'D', content: ['D', 'b', 'c'] },
    ]
  },
  {
    id: 2,
    name: 'Inclusion Prospective Applicant Campaign',
    fields: {},
    status: 'here',
    submissions: [
      { id: 'a', email: 'a@a.a', status: 'a', content: ['a', 'b', 'c'] },
      { id: 'A', email: 'A@A.A', status: 'A', content: ['A', 'b', 'c'] },
      { id: 'C', email: 'C@C.C', status: 'C', content: ['C', 'b', 'c'] },
      { id: 'D', email: 'D@D.D', status: 'D', content: ['D', 'b', 'c'] },
    ]
  },
  {
    id: 3,
    name: 'Other Campaign',
    fields: {},
    status: 'here',
    submissions: [
      { id: 'a', email: 'a@a.a', status: 'a', content: ['a', 'b', 'c'] },
      { id: 'A', email: 'A@A.A', status: 'A', content: ['A', 'b', 'c'] },
      { id: 'C', email: 'C@C.C', status: 'C', content: ['C', 'b', 'c'] },
      { id: 'D', email: 'D@D.D', status: 'D', content: ['D', 'b', 'c'] },
    ]
  },
]

function CampaignsAll(props) {
  
  const mapCampaigns = campaigns.map(c => (
    <div className="div-link" key={c.id}>
      <Link to={`/campaigns/${c.id}`} >
        <h2>{c.name}</h2>
        <p>Submissions: {c.submissions.length}</p>
      </Link>
    </div>));

  return (
    <div className="index-container">
      <Link to={'/formCreate'} className="campaign-btn">Create a Campaign</Link>
      {mapCampaigns}
    </div>
  );
}

export default CampaignsAll;
