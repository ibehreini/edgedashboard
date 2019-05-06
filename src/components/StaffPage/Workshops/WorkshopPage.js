import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import WorkshopGrid from '../Workshops/WorkshopGrid';

class WorkshopPage extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true,
      workshopList: [],
      selectedWorkshop: ""
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  getWorkshopList = () => {
    fetch(`http://localhost:5000/api/events/W`)
    .then(res => res.json())
    .then(res => {
      var workshopList = res.map(r => [r.title, r.id]);
      this.setState({workshopList}, () => console.log(this.state.workshopList));
    });
  };

 componentDidMount() {
   this.getWorkshopList();
//    fetch(`http://localhost:5000/api/events/`)
   //  .then(data => data.json())
   //  .then((data) => { this.setState({ workshopList: data }) });
   //  console.log("hi this is a test");
  }

  render() { 
    return (
      <div className="StaffPage">
        <NavBar />
        <h2>Workshop Data</h2>
        {this.props.email}
        <div>
          <select value={this.state.selectedWorkshop} 
              onChange={(e) => this.setState({selectedWorkshop: e.target.value}, () => console.log(this.state)) }>
            <option value="" disabled selected>Select workshop</option>
            {this.state.workshopList.map(r => <option key = {r[0]} value = {r[1]}>{r[0]}</option>)}
          </select>
          <div>{this.state.selectedWorkshop}</div>
          {this.state.selectedWorkshop && <WorkshopGrid selectedWorkshop={this.state.selectedWorkshop} />}
        </div>
      </div>
    );
  }
}

export default WorkshopPage;