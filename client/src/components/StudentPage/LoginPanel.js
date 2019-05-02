import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

class LoginPanel extends Component {

  logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    console.log("here", localStorage.getItem("isLoggedIn"))
    console.log('cunt');
    window.location.reload();
    // this.forceUpdate()
    // this.props.history.push('/');
  }

  render() {
    return (
      <div className="StudentPage">
        <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={()=>this.logout()}
      redirectUri="/"
    >
    </GoogleLogout>
      </div>
    );
  }
}

export default LoginPanel;