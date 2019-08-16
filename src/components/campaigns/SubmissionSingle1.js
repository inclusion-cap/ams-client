import React, {useState, useEffect} from 'react';

import { getSubmission, changeStatus } from '../../utils/otherUtil';

import '../../styles/submission/submissionSingleStyle.css';

function SubmissionSingle(props) {
    // {tagSpecifier: 'input', tagType: 'text', label: 'bla bla', content: 'yada yada'} // value if checkbox 

    const [state, setState] = useState({
        content: []
    });
    const [comments, setComments] = useState([
        {
            name: 'Martin Freeman',
            body: 'the prospect has potential'
        },
        {
            name: 'Morgan Freeman',
            body: 'Its alright'
        },
        {
            name: 'Martin man',
            body: 'Needs improvement'
        }
    ]);

    useEffect(() => {
        // fetchAllCampaigns().then(data => {
        //   console.log(data);
        //   window.data = data;
        // })
        getSubmission(props.match.params.subid).then(e => {
            setState(JSON.parse(e));
            window.e = e;
        });
    }, []);

    function handleStatus(e) {
        changeStatus({newStat: e.target.value, id: state.id});
    }

    return (
        <div id="main-container">
            <h2 style={{'textAlign':'center'}}>Campaign Name</h2>
            <br/>
            {state.content.map((el, index) => {
                return (
                    <div className="content-container" key={index}>
                        <label>{el.label}</label>
                        <el.tagSpecifier id="itself-inp" type={`${el.tagType}`} value={`${el.content}`} disabled/>
                    </div>
                );
            })}
            <div className="stat-cnt">
                <h4 >Status</h4>
                <input type="radio" name="status" value="NEW" onClick={handleStatus} /> NEW<br/>
                <input type="radio" name="status" value="UNDER REVIEW"  onClick={handleStatus}/> UNDER REVIEW<br/>
                <input type="radio" name="status" value="ACCEPTED"      onClick={handleStatus}/> ACCEPTED<br/> 
                <input type="radio" name="status" value="DENIED"        onClick={handleStatus}/> DENIED<br/> 
            </div>

            <div className="cmt-cnt">
                <div className="cmt-cnt-1">
                    <textarea id="cmt" placeholder="add a comment"></textarea>
                    <i className="far fa-comment fa-2x"></i>
                </div>
                {comments.map((el, i) => {
                    return (
                        <div className="cmt-cnt-2">
                            <p style={{'fontWeight':'bold'}}>{el.name}</p>
                            <p>{el.body}</p>
                        </div>
                    );
                })}
            </div>

           
        </div>
    )
}

export default SubmissionSingle;
