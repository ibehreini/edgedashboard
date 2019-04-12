import React, { Component } from 'react';
import NavBar from '../../NavBar/NavBar';
import EventGrid from '../Events/EventGrid';

class EventPage extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true,
      eventList: [],
      selectedEvent: ""
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  getEventList = () => {
    fetch(`http://localhost:5000/api/events/e`)
    .then(res => res.json())
    .then(res => {
      var eventList = res.map(r => [r.title, r.eventdate]);
      this.setState({eventList}, () => console.log(this.state.eventList));
    });
  };

 componentDidMount() {
   this.getEventList();
//    fetch(`http://localhost:5000/api/events/`)
   //  .then(data => data.json())
   //  .then((data) => { this.setState({ workshopList: data }) });
   //  console.log("hi this is a test");
  }

  render() { 
    return (
      <div className="StaffPage">
        <NavBar />
        <h2>Event Data</h2>
        <div>
          <select value={this.state.selectedEvent} 
              onChange={(e) => this.setState({selectedEvent: e.target.value}, () => console.log(this.state)) }>
            <option value="" disabled selected>Select Event</option>
            {this.state.eventList.map(r => <option key = {r[0]} value = {r[1]}>{r[0]}</option>)}
          </select>
          <div>{this.state.selectedEvent}</div>
          {this.state.selectedEvent && <EventGrid selectedEvent={this.state.selectedEvent} />}
        </div>
      </div>
    );
  }
}

export default EventPage;