import React from 'react';
import { loginUrl } from '../authorization';
import '../css/App.css'


export function LoginPage() {
    
    return (
        <div className="App">
          <h1>Ready to explore your music universe?</h1>
          <p> First please sign in with your spotify account:</p>
          <div className="card">
            <button className="oauth">
              <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            </button>
          </div>
        </div>
      )
}
