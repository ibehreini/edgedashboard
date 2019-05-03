import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';

class TimesheetPage extends Component {
  constructor () {
    super()
    this.state = {
      timesheets: ''
    }
  }

  componentDidMount = () => {
    this.getTimesheets();
  }

  getTimesheets = () => {
    fetch(`http://localhost:5000/api/mentorhours/`)
      .then(res => res.json())
      .then(res => {
        var timesheets = res.map(r => [r.username, r.hours, r.period, r.justification, r.notes]);
        this.setState({timesheets}, () => this.formatData());
      });
  }

  formatData = () => {
    return (<div><h2>HIyaaa</h2></div>)
  }

  render() {
    return (
      <div className="StaffPage">
        <NavBar />
        <h2>Timesheets Notes and Hours Data</h2>
      </div>
    );
  }
}

export default TimesheetPage;