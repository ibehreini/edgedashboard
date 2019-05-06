import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavBar extends React.Component {
  state = {
    left: false,
    cat: ''
  };

  logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    console.log("here", localStorage.getItem("isLoggedIn"))
    console.log('cunt');
    window.location.reload();
    // this.forceUpdate()
    // this.props.history.push('/');
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          > 
            <div className={classes.list}>
              <List>
                <Link to="/staff/workshops">
                  <ListItem button key='Workshops'>
                    <ListItemText primary='Workshops' />
                  </ListItem>
                </Link>
                <Link to="/staff/events">
                  <ListItem button key='Events'>
                    <ListItemText primary='Events' />
                  </ListItem>
                </Link>
                <Link to="/staff/timesheets">
                  <ListItem button key='Timesheets'>
                    <ListItemText primary='Timesheets' />
                  </ListItem>
                </Link>
				<Link to="/staff/manageevents">
                  <ListItem button key='Manage'>
                    <ListItemText primary='Manage Events' />
                  </ListItem>
                </Link>
                <Link to="/staff/members">
                  <ListItem button key='members'>
                    <ListItemText primary='Manage Enrollment' />
                  </ListItem>
                </Link>
                <Link to="/">
                <GoogleLogout
                clientId="95770693193-qjl5187o86chsqd7vuad0avjh4r40u5g.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={()=>this.logout()}
      redirectUri="/"
    >
    </GoogleLogout>
                </Link>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);