import React from 'react';

const SubmissionFields = (props) => {
  const { campaign } = props;
  const { submission } = props;
  console.log(submission)
  let res = [];
  let temp;

  for (let i = 0; i < submission.content.length; i++) {
    temp = (<div className="div-link" key={'con - ' + i}>
      <p><b>{campaign.fields[i]}</b></p>
      <p>{submission.content[i]}</p>
    </div>)
    res.push(temp)
  }
  return res;
}

export default SubmissionFields;
