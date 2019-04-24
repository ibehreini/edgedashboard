import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class LoginPage extends Component {
  constructor () {
    super()
    this.state = {
      username: "",
      password: "",
      value: ""
    }  
  this.handleChangedUsername = this.handleChangedUsername.bind(this);
  this.handleChangedPassword = this.handleChangedPassword.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangedUsername(event) {
  this.setState({username: event.target.value});
}

handleChangedPassword(event) {
  this.setState({password: event.target.value});
}

handleSubmit(event) {
  alert('Username is ' + this.state.username + 'Password is ' + this.state.password);
  event.preventDefault();
}

   loginForm() {
     return (
      <form onSubmit={this.handleSubmit}>
        <div><h2>Login</h2></div>
        <div><label>Username<input type="text" value={this.state.username} onChange={this.handleChangedUsername}></input></label></div>
        <div><label>Password<input type="text" value={this.state.password} onChange={this.handleChangedPassword}></input></label></div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  handleForm() {
    if (document.readyState = "complete"){
    var num = document.getElementById("uname").value;
    var num1 = document.getElementById("pussy").value;
    console.log(num);
    console.log(num1);
    }
  }

  onSuccess=(response) => {
    console.log(response);
  }

  onFailure=(response) => {
    console.log(response);
  }

    render() {
      return (
        <GoogleLogin
clientId="95770693193-qjl5187o86chsqd7vuad0avjh4r40u5g.apps.googleusercontent.com"
buttonText="Login"
onSuccess={this.onSuccess}
onFailure={this.onFailure}
cookiePolicy={'single_host_origin'}
/>
      );
    }
  }
  
export default LoginPage;