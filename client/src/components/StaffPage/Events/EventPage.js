import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';

class EventPage extends Component {
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
        <h2>Events Data</h2>
      </div>
    );
  }
}

export default EventPage;