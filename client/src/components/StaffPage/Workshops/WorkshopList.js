import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import WorkshopGrid from '../StaffPage/WorkshopGrid';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import spacing from '@material-ui/core/styles/spacing';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});



class WorkshopList extends React.Component {
  constructor () {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  HandleToggle = value => () =>{
    var tst = this.refs.kitten;
    
    this.toggleHidden.bind(tst)
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <List className={classes.root} style={{ backgroundColor: 'red', width: '100%'}}>
      <ListItem style={{ backgroundColor: 'pink'}}>
        <ListItemText
          primary="Workshop 1"
          secondary={
            <div><React.Fragment style={{paddingRight:100}}>
              <Typography component="span" className={classes.inline} color="textPrimary">
                2/03/2019
              </Typography>
              {" Cover letters and resumes        "}
              
            </React.Fragment>
            
            <React.Fragment >
              {[0,1,2,3].map(value => (
              <button onClick={ 
                this.HandleToggle(value)

               } >Show Details</button>
               
               ))};
            </React.Fragment>
            </div>
          }
          
        />
        
        
         <ListItemSecondaryAction style={{ backgroundColor: 'yellow'}}>
           {!this.state.isHidden && <WorkshopGrid id="kitten" ref="kitten" />}
        </ListItemSecondaryAction>
  
      </ListItem>
      </List>
</div>
    );
  }
}

WorkshopList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkshopList);