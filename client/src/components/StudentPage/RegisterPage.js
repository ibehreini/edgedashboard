import React, { Component } from 'react';


class RegisterPage extends Component {
  constructor () {
    super()
    this.state = {
      name: "",
      selectedTransport: "",
      notes: '',
      value: ""
    }  
  this.handleChangedName = this.handleChangedName.bind(this);
  this.handleChangedNotes = this.handleChangedNotes.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangedName(event) {
  this.setState({name: event.target.value});
}

handleChangedNotes(event) {
  this.setState({notes: event.target.value});
}

handleSubmit(event) {
  alert('Username is ' + this.state.name + 'Notes is ' + this.state.selectedTransport);
  event.preventDefault();
}

   loginForm() {
     return (
      <form onSubmit={this.handleSubmit}>
        <div><h2>Register for {this.props.upcomingEvent[1]}</h2></div>
        <div><label>Name<input type="text" value={this.state.name} onChange={this.handleChangedName}></input></label></div>
        <div><label>How are you getting to / from the event?
        <select value={this.state.selectedTransport} 
              onChange={(e) => this.setState({selectedTransport: e.target.value}, () => console.log(this.state)) }>
            <option value="" disabled selected>Select Method of Transport</option>
            <option value = 'pickup'>Pickup</option>
            <option value = 'paratransit'>Access Link</option>
            <option value = 'needed'>Public Transit</option>
          </select></label>
        </div>
        <div><label>Notes<input type="text" value={this.state.notes} onChange={this.handleChangedNotes}></input></label></div>
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
  
export default RegisterPage;