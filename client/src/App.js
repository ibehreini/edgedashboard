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
      email: '',
      role: '',
      isLoggedIn: false
    });  
}


  authentication = (profile) => {
    if (profile != null) {
    this.setState({email: profile[0][0]}, function() {console.log('blah')} );
    this.setState({role: profile[0][1]}, function() {console.log('blah')} );
    this.setState({isLoggedIn: true}, function() {console.log('blah')} );
    localStorage.setItem( 'isLoggedIn', true);
    localStorage.setItem( 'email', profile[0][0]);
    console.log("profile: ", profile)
    localStorage.setItem( 'role', profile[0][1]);
  }
  else {
    console.log('error: profile must have been empty');
  }
  } 

  render() {
    console.log("isloggedin ", localStorage.getItem("isLoggedIn"))
    // localStorage.setItem("isLoggedIn", false)
    console.log("role: ", localStorage.getItem("role"))
    console.log("email: ", localStorage.getItem("email"))
    if (localStorage.getItem('isLoggedIn') == "false") {
      return (
      <Router>         
        <Route path="/" render={ () => (<LoginPage authentication={this.authentication} />)}/>
      </Router>)
    }
    if (localStorage.getItem('role') == 'student' && localStorage.getItem('isLoggedIn') == 'true') {
      return (
        <Router>
          <div className="App">
            <Route path="/student" render={ () => (<StudentPage email={this.state.email} />)}/>
          </div>
        </Router>
      );
    }
    if (localStorage.getItem('role') == 'mentor' && localStorage.getItem('isLoggedIn') == 'true') {
      return (
        <Router>
          <div className="App">
            <Route path="/mentor" component={Mentor} />
          </div>
        </Router>
      );
    }
    if (localStorage.getItem('role') == 'staff' && localStorage.getItem('isLoggedIn') == 'true') {
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
        <p>Hi</p>
      )
    }
  }

export default App;