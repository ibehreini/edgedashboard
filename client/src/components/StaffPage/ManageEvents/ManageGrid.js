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
          headerName: "Event Date", field: "eventtime", editable: true
        }, {
          headerName: "Type", field: "eventtype", editable: true
        }, {
          headerName: "Location", field: "eventlocation", editable: true
        }, {
          headerName: "title", field: "title", editable: true
        }, {
          headerName: "Description", field: "description", editable: true
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
        var myData = res.map(r => [r.eventtime, r.eventtype, r.eventlocation, r.title, r.description]);
        let rowData = []
        myData.forEach(row=>{
          let ev = {}
          ev['eventtime'] = row[0]
        ev['eventtype'] = row[1]
        ev['eventlocation'] = row[2]
        ev['title'] = row[3]
        ev['description'] = row[4]
        rowData.push(ev);
        })
        console.log(rowData);
        this.setState({rowData}, () => console.log(this.state.rowData));
      });
    };

    componentDidMount() {
     this.getAll();
   }

    addRow() {
      let myArr = [];
      const newItems = {eventtime: 'New Date', eventtype: 'event/workshop', eventlocation: 'New Location', title: 'New Title', description: 'New desc'};
      myArr.push(newItems);
      // var map = Object.values(newItems);
      var res = this.gridApi.updateRowData({ add: myArr });
      console.log(this.state.rowData);
    }

    updateRows = () => {
      const selectedNodes = this.gridApi.getSelectedNodes()
      const rowData = selectedNodes.map( node => node.data )
 // console.log(rowData);
    //   const rowData2 = rowData.map( row => [ row[0], row[1], row[2], row[3], row[4], row[5] ]);
    //   let fucker = {
   //      0: rowData[0][1],
  //       1: rowData[0][2],
  //       2: rowData[0][3],
  //       3: rowData[0][4],
  //       4: rowData[0][5],
    //     5: rowData[0][6]
 //      }
//       console.log(JSON.stringify(fucker));
//       console.log(JSON.stringify({eventdate: '2019-01-01', eventtype: 'Workshop', eventlocation: 'bayonne', title: 'la' description: 'yay', eventtime: '10:00:00'}));
        rowData.forEach(row=>{
          let evie = {}
      //     for (let i = 1; i<row.length; i++) {
         //    evie[i.toString()] = row[i]
        //   }
        evie['eventtime'] = row.eventtime
        evie['eventtype'] = row.eventtype
        evie['eventlocation'] = row.eventlocation
        evie['title'] = row.title
        evie['description'] = row.description
          console.log(JSON.stringify(evie));
          // console.log(JSON.stringify({1: '1111-11-11', 2: 'Event', 3: 'LA', 4: 'learn', 5: 'blah', 6: '10:00:00'}));
        fetch('http://localhost:5000/api/events/', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(evie)
        })
        // .then(res => res.json())
        .then(res => {
          console.log(res);
          this.getAll();
        });
      })
    }
  
 /*
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
*/
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
