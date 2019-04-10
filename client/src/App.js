import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import WorkshopPage from './components/StaffPage/Workshops/WorkshopPage';
import TimesheetPage from './components/StaffPage/Timesheets/TimesheetPage';
import EventPage from './components/StaffPage/Events/EventPage';
import LoginPage from './components/LoginPage/LoginPage';
import StudentPage from './components/StudentPage/StudentPage';
import MentorPage from './components/MentorPage/MentorPage';

const Login = () => (
  <LoginPage />
);

const StaffWorkshopView = () => (
  <WorkshopPage />
);

const StaffEventView = () => (
  <EventPage />
);

const StaffTimesheetView = () => (
  <TimesheetPage />
);

const Student = () => (
  <StudentPage />
);

const Mentor = () => (
  <MentorPage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/staff/workshops" component={StaffWorkshopView} />
          <Route path="/staff/events" component={StaffEventView} />
          <Route path="/staff/timesheets" component={StaffTimesheetView} />
          <Route path="/student" component={Student} />
          <Route path="/mentor" component={Mentor} />
        </div>
      </Router>
    );
  }
}

export default App;