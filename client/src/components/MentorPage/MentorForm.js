import React, { Component } from 'react';


class MentorForm extends Component {
  constructor () {
    super()
    this.state = {
      selectedPeriod: "",
        hours: '',
        justification: "",
        notes: "",
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

handleChangedHours = (event) => {
    this.setState({hours: event.target.value});
  }

  handleChangedJustification = (event) => {
    this.setState({justification: event.target.value});
  }  
  
handleSubmit = (event) => {
  let submission = {}
  submission['username'] = localStorage.getItem('email')
  submission['period'] = this.state.selectedPeriod
  submission['hours'] = this.state.hours
  submission['justification'] = this.state.justification
  submission['notes'] = this.state.notes
  console.log(submission);
  fetch('http://localhost:5000/api/mentorhours/hours', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submission)
        })
        .then(res => {
          alert('Success!');
        });
  event.preventDefault();
}

   registerForm = () => {
     return (
      <form onSubmit={this.handleSubmit}>
        <div><h2>Submit Hours</h2></div>
        <div>Name: {localStorage.getItem('email')}</div>
        <div><label>Period: 
        <select value={this.state.selectedPeriod} 
              onChange={(e) => this.setState({selectedPeriod: e.target.value}, () => console.log(this.state)) }>
            <option value="" disabled selected>Select Period</option>
            <option value = '2019-01-01'>Jan</option>
            <option value = '2019-02-02'>Feb</option>
            <option value = '2019-03-03'>Mar</option>
            <option value = '2019-04-04'>Apr</option>
            <option value = '2019-05-05'>May</option>
            <option value = '2019-06-06'>Jun</option>
            <option value = '2019-07-07'>Jul</option>
            <option value = '2019-08-08'>Aug</option>
            <option value = '2019-09-09'>Sep</option>
            <option value = '2019-10-10'>Oct</option>
            <option value = '2019-11-11'>Nov</option>
            <option value = '2019-12-12'>Dec</option>
          </select></label>
        </div>
        <div><label>Hours<input type="text" value={this.state.hours} onChange={this.handleChangedHours}></input></label></div>
        <div><label>Justification<input type="text" value={this.state.justification} onChange={this.handleChangedJustification}></input></label></div>
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
          {this.registerForm()}
        </div>
      );
    }
  }
  
export default MentorForm;