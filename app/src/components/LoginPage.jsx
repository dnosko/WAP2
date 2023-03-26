import { React, useState, useEffect, Component, useCallback} from 'react';
import '../css/App.css'
import '../css/LoginPage.css'


class LoginPage extends Component{
  render() {
    return (
      <div className="App">
        <h1>Ready to explore your music universe?</h1>
        <p> First please sign in with your spotify account:</p>
        <div className="card">
          <button className="oauth">
            <a href="http://localhost:3001/auth">LOGIN WITH SPOTIFY</a>
          </button>
        </div>
      </div>
    )}
}


export default LoginPage;