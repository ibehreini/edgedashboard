import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import WorkshopGrid from '../Workshops/WorkshopGrid';
import Grid from '@material-ui/core/Grid';

class WorkshopPage extends Component {
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
        <h2>Workshop Data</h2>
        <div>
        <select>
          <option value="03/23">Resumes</option>
          <option value="5/34">Healthy Relationships</option>
        </select>
          <button onClick={this.toggleHidden.bind(this)} >
            Click to show grid
          </button>
          {!this.state.isHidden && <WorkshopGrid />}
        </div>
      </div>
    );
  }
}

export default WorkshopPage;