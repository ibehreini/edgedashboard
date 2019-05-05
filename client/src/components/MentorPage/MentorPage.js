import React, { Component } from 'react';
import ControlledExpansionPanels from '../StudentPage/ControlledExpansionPanels';
import LoginPanel from '../StudentPage/LoginPanel';

class MentorPage extends Component {
  render() {
    return (
      <div className="MentorPage">
        <h2>Mentor stuff will be here! 3 text boxes + month picker</h2>
        <LoginPanel />
         {localStorage.getItem('isLoggedIn')}
         <ControlledExpansionPanels email={this.props.email} />
      </div>
    );
  }
}

export default MentorPage;
