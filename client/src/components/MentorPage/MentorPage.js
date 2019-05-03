import React, { Component } from 'react';
import MentorForm from '../MentorPage/MentorForm';
import LogoutPanel from '../MentorPage/LogoutPanel';

class MentorPage extends Component {
  render() {
    return (
      <div className="MentorPage">
        <LogoutPanel />
        <h2>Mentors Submit Hours Here</h2>
        <MentorForm />
      </div>
    );
  }
}

export default MentorPage;