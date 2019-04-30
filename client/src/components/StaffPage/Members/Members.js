import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import MembersList from '../Members/MembersList';

class Members extends Component {
  render() {
    return (
      <div className="StaffPage">
        <NavBar />
        <h2>Edit Members Here</h2>
        <MembersList />
      </div>
    );
  }
}

export default Members;