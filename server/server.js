require('dotenv').config()
const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const { default: axios } = require('axios');
const { config } = require('dotenv');
const { access } = require('graceful-fs');
var app = express();


app.use(cors()).use(cookieParser())

const app_url = process.env.APP_URL
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const redirect_uri = process.env.REDIRECT_URI 
const authEndpoint = 'https://accounts.spotify.com/authorize?'
const token_endpoint = 'https://accounts.spotify.com/api/token'
const scopes = ['user-read-private',
    'user-read-email',
    'user-top-read', 'user-read-recently-played'];
var header = {
  'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret)).toString('base64'),
  'Content-Type':'application/x-www-form-urlencoded',
}
console.log(header)

var stateKey = 'auth_state';

function generateRandomString(length) {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const characters = Array.from({ length }, () => possible.charAt(Math.floor(Math.random() * possible.length)));
        return characters.join('');
    }

app.get('/auth', (req, res) => {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: client_id,
    scope: scopes,
    redirect_uri: redirect_uri,
    state: state,
    show_dialog: false
  })

  const loginUrl = authEndpoint + params.toString()
  
  res.redirect(loginUrl);
})

app.get('/callback', function(req, res) {

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state == null || state !== storedState || code == null) {
    res.redirect(app_url)
  }

  res.clearCookie(stateKey);
  console.log(header)

  axios.post(token_endpoint, {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirect_uri
  }, {headers: header}
  ).then((response) => {
    console.log(response.data)
    let access_token = response.data.access_token
    let refresh_token = response.data.refresh_token
    axios.get('https://api.spotify.com/v1/me', { headers: { 'Authorization': 'Bearer ' + access_token } }).then((response) => {
      console.log(response.data)
      const params = new URLSearchParams({
        access_token: access_token,
        refresh_token: refresh_token,
        state: state
      })
      res.redirect(app_url+'welcome?'+params.toString())
    })
    /*res.json({
      accessToken: response.data.access_token,
      token_type: response.data.token_type,
      expiresIn: response.data.expires_in,
      refreshToken: response.data.refresh_token
    })
    res.redirect(app_url+'welcome')*/
  }).catch ((err) => {
    console.log('error: ', err);
    res.status(500).json({ message: 'Internal server error' });
  })

});

app.listen(3001)