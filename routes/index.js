const express = require('express');
const router = express.Router();
const request = require('request');
const airtable = require('airtable');
const config = require('../config');

const base = new airtable({apiKey: config.airtableKey}).base(config.airtableBaseId);

router.get('/', (req, res) => { res.render('index', config); });

router.post('/invite', function(req, res) {
    // Post information to Airtable base
    base('Community Members').create({
        "Name": req.body.name,
        "Email": req.body.email,
        "Company": req.body.company,
        "School": req.body.school,
    }, (err, record) => {
        if (err) {
            console.error(err);
            return;
        }
    });

    // Post data to the slack endpoint
    request.post({
        url: 'https://' + config.slackUrl + '/api/users.admin.invite',
        form: {
            email: req.body.email,
            name: req.body.name,
            token: config.slacktoken,
            set_active: true,
        },
    }, (err, httpResponse, body) => {
        if (err) return res.send('Error: ' + err);
        const parsed_body = JSON.parse(body);
        if (parsed_body.ok) {
            res.render('result', {
                message: '<strong>Success! 💯</strong><br>Check your email for the invite.',
            });
        } else {
            let error = parsed_body.error;
            if (error === 'already_invited' || error === 'already_in_team') {
                res.render('result', {
                    community: config.community,
                    message: '<strong>You\'ve already been invited! 🕶</strong><br>' +
                    'Visit <a href="https://' + config.slackUrl + '">' + config.slackUrl + '</a> to get your acccount set up!',
                });
                return '';
            } else if (error === 'invalid_email') {
                error = 'The email you entered is an invalid email.';
            } else if (error === 'invalid_auth') {
                error = 'Something has gone wrong. 👎🏻 <a href="http://m.me/grgwlff" target="_blank">Let me know</a> what\'s not working!';
            }
            res.render('result', {
                message: 'Failed! ' + error,
                isFailed: true,
            });
        }
        return '';
    });
});

module.exports = router;
