import React, { Component } from 'react';
import RegisterPage from '../StudentPage/RegisterPage';
import ControlledExpansionPanels from '../StudentPage/ControlledExpansionPanels';

class StudentPage extends Component {
  render() {
    return (
      <div className="StudentPage">
        <h2>Sign up for Upcoming Events/Workshops</h2>
        <ControlledExpansionPanels />
      </div>
    );
  }
}

export default StudentPage;