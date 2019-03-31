import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

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
  
    render() {
      return (
        <div 
          className="ag-theme-balham"
          style={{ 
          height: '500px', 
          width: '600px' }} 
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      );
    }
  }
  
  export default WorkshopGrid;