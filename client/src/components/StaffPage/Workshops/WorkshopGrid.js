import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Grid from '@material-ui/core/Grid';

class WorkshopGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Name", field: "name"
        }, {
          headerName: "Member", field: "member"
        }, {
          headerName: "RSVP", field: "rsvp"
        }, {
          headerName: "Transport", field: "transport"
        }],
        rowData: [{
          name: "Evie", member: "student", rsvp: "no", transport: "needs"
        }]
      }
    }

    getAttendanceRecords = () => {
      fetch(`http://localhost:5000/api/attendance/`)
      .then(res => res.json())
      .then(res => {
        var attendanceRecords = res.map(r => [r.eventtime, r.username]);
        console.log(attendanceRecords);
      });
    };
  
   componentDidMount() {
     this.getAttendanceRecords();
   }

    render() {
        return (
          <div
            className="ag-theme-fresh"
            style={{ 
              borderWidth: 0.5,
              vorderColor: '#d6d7da',
              width: '50%',
              margin: 'auto' }} 
          >
            <div 
              className="ag-theme-fresh"
              style={{ 
              height: '500px',    
              width: '800px' }} 
            >
            {this.props.selectedWorkshop}
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
              </AgGridReact>
            </div>
          </div>
      );
    }
  }
  
  export default WorkshopGrid;