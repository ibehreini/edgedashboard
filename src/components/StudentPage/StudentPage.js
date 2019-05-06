import React, { Component } from 'react';
import RegisterPage from '../StudentPage/RegisterPage';
import ControlledExpansionPanels from '../StudentPage/ControlledExpansionPanels';
// import { GoogleLogout } from 'react-google-login';
import LoginPanel from '../StudentPage/LoginPanel';

class StudentPage extends Component {
/*
  logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    console.log("here", localStorage.getItem("isLoggedIn"))
    console.log('cunt');
    window.location.reload();
    // this.forceUpdate()
    // this.props.history.push('/');
  }
*/
  render() {
    return (
      <div className="StudentPage">
        <h2>Sign up for Upcoming Events/Workshops</h2>
       <LoginPanel />
        {localStorage.getItem('isLoggedIn')}
        <ControlledExpansionPanels email={this.props.email} />
      </div>
    );
  }
}

export default StudentPage;