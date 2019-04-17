import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Grid from '@material-ui/core/Grid';

class ManageGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Event Date", field: "0", editable: true
        }, {
          headerName: "Type", field: "1", editable: true
        }, {
          headerName: "Location", field: "2", editable: true
        }, {
          headerName: "title", field: "3", editable: true
        }, {
          headerName: "Description", field: "4", editable: true
        }, {
          headerName: "Time", field: "5", editable: true
        }],
        rowData: []
      }
    }

    onGridReady = params => {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    };
  
    getAll = () => {
      fetch(`http://localhost:5000/api/events/`)
      .then(res => res.json())
      .then(res => {
        var rowData = res.map(r => [r.eventdate, r.eventtype, r.eventlocation, r.title, r.description, r.eventtime]);
        this.setState({rowData}, () => console.log(this.state.rowData));
      });
    };

    componentDidMount() {
     this.getAll();
   }

    addRow() {
      let myArr = [];
      const newItems = [{0: 'Enter date'}, {1: 'E/W'}, {2: 'Enter Location'}, {3: 'Enter title'}, {4: 'Enter desc'}, {5: 'Enter time'}];
      myArr.push(newItems);
      // var map = Object.values(newItems);
      var res = this.gridApi.updateRowData({ add: myArr });
    }

    updateRows = () => {
     var rowData = [];
      this.gridApi.forEachNode(function(node) {
        rowData.push(node.data);
      });
      console.log(this.state.rowData);
      console.log(rowData);
      this.setState({rowData}, () => console.log(this.state.rowData));
      const newItem = [{0: 'Enter date', 1: 'E/W', 2: 'Enter Location', 3: 'Enter title', 4: 'Enter desc'}, {5: 'Enter time'}];
      fetch('http://localhost:5000/api/events/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventtime: '1111-11-11',
          eventtype: 'Event',
          eventlocation: 'EVIE',
          title: 'learn how to suck dick',
          description: 'KIBBLE',
          eventtime: '12:00:00'
        })
      })
      .then(res => res.json())
      .then(res => {
        this.getAll();
      });
    };

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
              width: '1500px' }} 
            >
              <button onClick={this.addRow.bind(this)}>Add Row</button>
              <button onClick={this.updateRows.bind(this)}>Save</button>
              <AgGridReact
                onGridReady={ params => this.gridApi = params.api }
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
              </AgGridReact>
            </div>
          </div>
      );
    }
  }
  
  export default ManageGrid;