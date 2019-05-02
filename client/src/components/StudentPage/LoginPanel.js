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
        clientId="95770693193-qjl5187o86chsqd7vuad0avjh4r40u5g.apps.googleusercontent.com"
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