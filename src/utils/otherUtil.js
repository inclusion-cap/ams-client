import $ from 'jquery';

export const fetchAllCampaigns = () => {
    return $.ajax({
        url: '/allCampaigns',
        method: 'GET',
    });
};


export const addCampaign = (data) => {
    return $.ajax({
        url: '/addCampaign',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
};

export const addSubmission = (data) => {
    return $.ajax({
        url: '/addSubmission',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
};

export const getCampaign = (id) => {
    return $.ajax({
        url: `/campaignForm/${id}`,
        method: 'GET',
    });
};

export const getCampaignSubmissions = (id) => {
    return $.ajax({
        url: `/campaignSubmissions/${id}`,
        method: 'GET',
    });
};