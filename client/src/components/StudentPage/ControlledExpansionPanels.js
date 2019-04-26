import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RegisterPage from '../StudentPage/RegisterPage';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
    upcomingEvents: [],
  };

  handleChange = row => (event, expanded) => {
    this.setState({
      expanded: expanded ? row : false,
    });
  };

  getNext = () => {
    fetch(`http://localhost:5000/api/events/next`)
    .then(res => res.json())
    .then(res => {
      var upcomingEvents = res.map(r => [r.id, r.eventtime, r.title, r.eventtype, r.eventlocation, r.description]);
      this.setState({upcomingEvents}, () => console.log(this.state.upcomingEvents));
    });
  };

 componentDidMount() {
   this.getNext();
 }

  panels() {
    const { classes } = this.props;
    const { expanded } = this.state;
    let thePanels = []

      this.state.upcomingEvents.forEach(row=>{
        thePanels.push(
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === row[0]} onChange={this.handleChange(row[0])}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{row[2]}</Typography>
            <Typography className={classes.secondaryHeading}>Register</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <RegisterPage upcomingEvent ={row} email={this.props.email}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
        )
      })
  return thePanels
  }

  render() {
    console.log(this.state.upcomingEvents)
    return(
      this.panels()
    )
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);