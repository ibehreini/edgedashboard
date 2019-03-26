import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import StaffPage from './components/StaffPage/StaffPage';
import LoginPage from './components/LoginPage/LoginPage';
import StudentPage from './components/StudentPage/StudentPage';
import MentorPage from './components/MentorPage/MentorPage';

const Login = () => (
  <LoginPage />
);

const Staff = () => (
  <StaffPage />
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
          <Route path="/staff" component={Staff} />
          <Route path="/student" component={Student} />
          <Route path="/mentor" component={Mentor} />
        </div>
      </Router>
    );
  }
}

export default App;