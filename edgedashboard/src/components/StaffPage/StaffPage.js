import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import WorkshopGrid from '../StaffPage/WorkshopGrid';

class StaffPage extends Component {
  render() {
    return (
      <div className="StaffPage">
        <NavBar />
        <h2>Staff stuff will be here!</h2>
        <WorkshopGrid />
      </div>
    );
  }
}

export default StaffPage;