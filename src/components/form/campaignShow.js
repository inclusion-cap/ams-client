import React, { useState } from 'react';
import '../../styles/campaign/campaignShow.css';

// data form:
// {label: form.label, tagSpecifier: 'input', tagType: 'text', value: form.label} -> with value if checkbox

function CampaignShow() {
    const [state, setState] = useState([
        {
            label: 'username',
            tagSpecifier: 'input',
            tagType: 'text'
        },
        {
            label: 'cheese',
            tagSpecifier: 'input',
            tagType: 'checkbox',
            value: 'cheese'
        }
    ]);
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id="form-itself">
                {
                    state.map((option, index) => {
                        return option.tagType !== 'checkbox' ? (
                            <div key={index} id="new-inp-cont">
                                <label>{option.label}</label>
                                <option.tagSpecifier type={`${option.tagType}`} id="itself-inp"/>
                            </div>
                        ) : (
                            <div key={index} style={{'display': 'flex'}}>
                                <option.tagSpecifier type={`${option.tagType}`} value={`${option.value}`} id="itself-checkbox"/>
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }

                <input type="submit" value="Submit Form" id="btn-submit"/>
            </form>
        </div>
    )
}

export default CampaignShow;
