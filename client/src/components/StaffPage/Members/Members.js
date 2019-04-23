import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';

class Members extends Component {
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
        <h2>Edit Members Here</h2>
      </div>
    );
  }
}

export default Members;