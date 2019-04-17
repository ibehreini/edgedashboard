import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

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
  };

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