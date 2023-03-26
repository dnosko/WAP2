import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import express from 'express';
import cors from 'cors';

/*const app = express();
app.use(cors());


const client_id  = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const redirect_uri = 'http://localhost:5173/welcome';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = ['user-read-private',
    'user-read-email',
    'user-top-read', 'user-read-recently-played'];


function generateRandomString(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = Array.from({ length }, () => possible.charAt(Math.floor(Math.random() * possible.length)));
    return characters.join('');
  }

app.get('/authorize', async (req, res) => {
    try {
      const response = await axios.get(authEndpoint, {
        cliend_id: client_id,
        redirect_uri: redirect_uri,
        scope: scopes,
        response_type: 'token',
        show_dialog: true,
      });
  
      res.json({
        accessToken: response.data.access_token,
        token_type: response.data.token_type,
        expiresIn: response.data.expires_in,
        refreshToken: response.data.refresh_token,
        state: state,
      });
    } catch (err) {
      console.log('error: ', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.listen(5173, () => {
    console.log('Server listening on port 5173');
  });

  */
  
  
  
