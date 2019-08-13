import React from 'react';
import { Link } from 'react-router-dom';

const campaigns = [
  {
    id: 1,
    name: 'c1',
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
    name: 'c2',
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
    name: 'c3',
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
    <Link className="div-link" key={c.id} to={{ pathname: `/campaigns/${c.id}`, state: { campaign: c } }} >
      <h2>{c.name}</h2>
      <div>Submissions: {c.submissions.length}</div>
    </Link>));

  return (
    <ul className="index-container">
      {mapCampaigns}
    </ul>
  );
}

export default CampaignsAll;
