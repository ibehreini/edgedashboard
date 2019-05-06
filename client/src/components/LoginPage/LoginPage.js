import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import {withRouter} from 'react-router-dom';

class LoginPage extends Component {
  constructor (props) {
    super()
    this.state = ({
      username: "",
      password: "",
      profile: null,
      value: ""
    });
}

handleChangedUsername=(event) => {
  this.setState({username: event.target.value});
}

handleChangedPassword=(event) => {
  this.setState({password: event.target.value});
}

handleSubmit = (event) => {
  alert('Username is ' + this.state.username + 'Password is ' + this.state.password);
  event.preventDefault();
}

   loginForm = () => {
     return (
      <form onSubmit={this.handleSubmit}>
        <div><h2>Login</h2></div>
        <div><label>Username<input type="text" value={this.state.username} onChange={this.handleChangedUsername}></input></label></div>
        <div><label>Password<input type="text" value={this.state.password} onChange={this.handleChangedPassword}></input></label></div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  handleForm = () => {
    if (document.readyState === "complete"){
    var num = document.getElementById("uname").value;
    var num1 = document.getElementById("pussy").value;
    console.log(num);
    console.log(num1);
    }
  }

  onSuccess=(response) => {
    // var email = response.map(r => [r.profileobj]);
    let email = response.profileObj.email
    // console.log(email);
    fetch(`http://localhost:5000/api/role/${email}`)
      .then(res => res.json())
      .then(res => {
        var profile = res.map(r => [r.email, r.edgerole]);
        // localStorage.setItem( 'myProfile', profile );
        this.setState({profile}, function() {if (this.state.profile.length > 0) {this.checkRole()} else {console.log('Error')}});
      });
    }

  checkRole = () =>
  {
    if (this.state.profile[0][1] === 'student') {
      this.props.history.push('/student');
    }
    if (this.state.profile[0][1] === 'mentor') {
      this.props.history.push('/mentor');
    }
    if (this.state.profile[0][1] === 'staff') {
      this.props.history.push('/staff/workshops');
    }
    this.props.authentication(this.state.profile)
  }

  onFailure=(response) => {
    console.log(response);
  }

    render() {
      return (
        <GoogleLogin
clientId="65841114402-dlhiqtfi2u8vj4gomcindof4js0egff5.apps.googleusercontent.com"
buttonText="Login"
onSuccess={this.onSuccess}
onFailure={this.onFailure}
cookiePolicy={'single_host_origin'}
/>
      );
    }
  }

export default withRouter(LoginPage);
