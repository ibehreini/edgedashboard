import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';

class TimesheetPage extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
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