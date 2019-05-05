import React, { Component } from 'react';


class RegisterPage extends Component {
  constructor () {
    super()
    this.state = {
      name: "",
      selectedTransport: "",
      notes: '',
      value: "",
      regData: []
    }
  // this.handleChangedName = this.handleChangedName.bind(this);
}
/*
handleChangedName(event) {
  this.setState({name: event.target.value});
}
*/
handleChangedNotes = (event) => {
  this.setState({notes: event.target.value});
}

handleSubmit = (event) => {
  let submission = {}
  submission['event'] = this.props.upcomingEvent[0]
  submission['username'] = localStorage.getItem('email')
  submission['transportneeds'] = this.state.selectedTransport
  submission['notes'] = this.state.notes
  console.log(submission);
  fetch('http://localhost:5000/api/attendance/attending', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission)
        })
        .then(res => {
          alert('Success!');
        });
  event.preventDefault();
}

componentDidMount = () => {
  fetch(`http://localhost:5000/api/attendance/status/${localStorage.getItem('email')}`)
      .then(res => res.json())
      .then(res => {
        var myData = res.map(r => [r.event, r.username, r.transportneeds, r.notes]);
        let regData = []
        myData.forEach(row=>{
          let ev = {}
          ev['event'] = row[0]
          ev['username'] = row[1]
        ev['transportneeds'] = row[2]
        ev['notes'] = row[3]
        if (ev.event === this.props.upcomingEvent[0]) {
        regData.push(ev);
          }
        })
        console.log(regData);
        this.setState({regData}, () => console.log(this.state.regData));
      });
}

   registerForm = () => {
     return (
      <form onSubmit={this.handleSubmit}>
        <div><h2>Register for {this.props.upcomingEvent[2]}</h2></div>
        <div>Name: {localStorage.getItem('email')}</div>
        <div><label>Form of transportation {this.state.regData.transportneeds}
        <select value={this.state.selectedTransport}
              onChange={(e) => this.setState({selectedTransport: e.target.value}, () => console.log(this.state)) }>
            <option value="" disabled selected>Select Method of Transport</option>
            <option value = 'pickup'>Pickup</option>
            <option value = 'paratransport'>Access Link</option>
            <option value = 'public'>Public Transit</option>
          </select></label>
        </div>
        <div><label>Notes<input type="text" value={this.state.notes} onChange={this.handleChangedNotes}></input></label></div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  handleForm() {
    if (document.readyState === "complete"){
    var num = document.getElementById("uname").value;
    var num1 = document.getElementById("pussy").value;
    console.log(num);
    console.log(num1);
    }
  }

  chooseForm = () => {

  }


    render() {
      return (
        <div>
          {this.registerForm()}
        </div>
      );
    }
  }

export default RegisterPage;
