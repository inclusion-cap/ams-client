const express = require('express');
const editJsonFile = require('edit-json-file');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const data = editJsonFile('./server/data/data.json');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

// const sendTokenResponse = (token, res) => {
//   res.set('Content-Type', 'application/json');
//   res.send(
//     JSON.stringify({
//       token: token.toJwt()
//     })
//   );
// };

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });


app.get('/api/users/:userId', (req, res) => {
    console.log(req.body)
    console.log(req);
//   res.setHeader('Content-Type', 'application/json');
    
    res.send(JSON.stringify({ greeting: 'Omar' }));
});


app.get('/allCampaigns', (req, res) => {
    let campaigns = Object.values(data.get().Campaign);
    

    console.log(data.get().Campaign);
    // debugger
    res.send(JSON.stringify(campaigns));
    
});

app.post('/addCampaign', (req, res) => {
    // console.log(req.body)
    // debugger
    let campaign = data;
    // campaign.set(`Campaign${[]}`, {...req.body, id: Math.floor((Math.random() * 1000000))})
    let id = Math.floor((Math.random() * 1000000));

    campaign.set(`Campaign.${[id]}`, {id: id, ...req.body});
    campaign.save();
    
    res.send('successful'); 
});

app.post('/addSubmission', (req, res) => {
    
    let sub = data;
    let id = Math.floor((Math.random() * 1000000));
    sub.toObject().Campaign[req.body.campaign_id].submissions.push(id);
    sub.set(`Submission.${[id]}`, {id: id, ...req.body});
    sub.save();

    res.send("successfull");
});

app.get('/campaignForm/:campaignId', (req, res) => {
    let file = data;
    res.send(JSON.stringify(file.get(`Campaign.${req.params.campaignId}`)));
});

app.get('/campaignSubmissions/:campaignId', (req, res) => {
    let file = data;
    let submissions = file.get("Submission");
    let campaign = file.get(`Campaign.${req.params.campaignId}`);
    let subIds = campaign.submissions;
    let campaignName = campaign.name;
    let subs = [];
    for (let i = 0; i < subIds.length; i++) {
        subs.push(submissions[subIds[i]]);
    }
    res.send(JSON.stringify({name: campaignName, subs: subs}));
});






app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
