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
import ManagePage from './components/StaffPage/ManageEvents/ManagePage';
import Members from './components/StaffPage/Members/Members'

const Login = () => (
  <LoginPage />
);

const StaffWorkshopView = () => (
  <WorkshopPage />
);

const StaffEventView = () => (
  <EventPage />
);

const StaffManagePage = () => (
	<ManagePage />
); 

const StaffMembers = () => (
	<Members />
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
  constructor (props) {
    super()
    this.state = ({
      isLoggedIn: false
    });  
}


  authentication = (profile) => {
    if (profile != null) {
    this.setState({isLoggedIn: true}, function() {console.log('blah')} );
    localStorage.setItem( 'isLoggedIn', true);
    localStorage.setItem( 'email', profile[0][0]);
    localStorage.setItem( 'role', profile[0][1]);
  }
  else {
    console.log('error: profile must have been empty');
  }
  } 

/*
  componentDidMount = () => {
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("role", null);
      localStorage.setItem("email", null);
      this.forceUpdate();
    }
  };*/

  render() {
    console.log(localStorage.getItem('isLoggedIn'));
    console.log(localStorage.getItem('role'));
    if (localStorage.getItem('isLoggedIn') === "false") {
      return (
      <Router>         
        <Route path="/" render={ () => (<LoginPage authentication={this.authentication} />)}/>
      </Router>)
    }
    if (localStorage.getItem('role') === 'student' && localStorage.getItem('isLoggedIn') === 'true') {
      // localStorage.setItem('isLoggedIn', false);
      return (
        <Router>
          <div className="AppStu">
            <Route path="/student" component={Student} />
          </div>
        </Router>
      );
    }
    if (localStorage.getItem('role') === 'mentor' && localStorage.getItem('isLoggedIn') === 'true') {
      return (
        <Router>
          <div className="App">
            <Route path="/mentor" component={Mentor} />
          </div>
        </Router>
      );
    }
    if (localStorage.getItem('role') === 'staff' && localStorage.getItem('isLoggedIn') === 'true') {
      return (
        <Router>
          <div className="App">
            <Route path="/staff/workshops" render={ () => (<WorkshopPage email={this.state.email} />)}/>
            <Route path="/staff/events" component={StaffEventView} />
            <Route path="/staff/manageevents" component={StaffManagePage} />
            <Route path="/staff/timesheets" component={StaffTimesheetView} />
            <Route path="/staff/members" component={StaffMembers} />
            </div>
            </Router>
      )}  
      return (
        <Router>         
        <Route path="/" render={ () => (<LoginPage authentication={this.authentication} />)}/>
      </Router>
      )
    }
  }

export default App;