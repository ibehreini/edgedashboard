import React, { Component } from 'react';


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


    render() {
      return (
        <div>
          {this.loginForm()}
        </div>
      );
    }
  }
  
export default LoginPage;