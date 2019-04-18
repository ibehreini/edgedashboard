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
          headerName: "Check", field: "0, ", checkboxSelection: true
        }, {
          headerName: "Event Date", field: "1", editable: true
        }, {
          headerName: "Type", field: "2", editable: true
        }, {
          headerName: "Location", field: "3", editable: true
        }, {
          headerName: "title", field: "4", editable: true
        }, {
          headerName: "Description", field: "5", editable: true
        }, {
          headerName: "Time", field: "6", editable: true
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
      const selectedNodes = this.gridApi.getSelectedNodes()
      const rowData = selectedNodes.map( node => node.data )
      this.setState({rowData}, () => console.log(this.state.rowData));
      let fucker = {
        eventdate: rowData[0][1],
        eventtype: rowData[0][2],
        eventlocation: rowData[0][3],
        title: rowData[0][4],
        description: rowData[0][5],
        eventtime: rowData[0][6]
      }
      console.log(fucker);
      fetch('http://localhost:5000/api/events/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fucker)
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
                rowSelection="multiple"
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
