import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import ManageGrid from '../ManageEvents/ManageGrid';

class ManagePage extends Component {
  render() { 
    return (
      <div className="StaffPage">
        <NavBar />
        <h2>Add an event or workshop here</h2>
        <ManageGrid />
	    </div>
    );
  }
}

export default ManagePage;