import React, { useState, useEffect } from 'react';
import axios from 'axios';


const client_id  = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
const redirectURI = 'http://localhost:5173/callback';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = ['user-read-private',
    'user-read-email',
    'user-top-read', 'user-read-recently-played'];

console.log(import.meta.env.VITE_CLIENT_ID);

export const loginUrl = `${authEndpoint}?
client_id=${client_id}
&redirect_uri=${redirectURI}
&scope=${scopes.join("%20")}
&response_type=token
&show_dialog=true`

function generateRandomString(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characters = Array.from({ length }, () => possible.charAt(Math.floor(Math.random() * possible.length)));
    return characters.join('');
  }

