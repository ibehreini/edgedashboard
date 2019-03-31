import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import WorkshopGrid from '../StaffPage/WorkshopGrid';
import WorkshopList from '../StaffPage/WorkshopList';

class StaffPage extends Component {
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
        <h2>Staff stuff will be here!</h2>
        <WorkshopList />
        <button onClick={this.toggleHidden.bind(this)} >Click Here</button>
        {!this.state.isHidden && <WorkshopGrid />}
      </div>
    );
  }
}

export default StaffPage;