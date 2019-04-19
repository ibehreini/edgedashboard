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
          headerName: "Event Date", field: "0"
        }, {
          headerName: "Name", field: "1"
        }, {
          headerName: "Transport Needs", field: "2"
        }, {
          headerName: "Other NOtes", field: "3"
        }],
        rowData: []
      }
    }

    getAttendanceRecords = () => {
      fetch(`http://localhost:5000/api/attendance/time/${this.props.selectedWorkshop}`)
      .then(res => res.json())
      .then(res => {
        var rowData = res.map(r => [r.eventdate, r.username, r.transportneeds, r.notes]);
        this.setState({rowData}, () => console.log(this.state.rowData));
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
            {this.getAttendanceRecords()}
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
