import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Grid from '@material-ui/core/Grid';

class MembersList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [{
          headerName: "Check", field: "0", checkboxSelection: true
        }, {
            headerName: "EMail", field: "email", editable: true
          }, {
          headerName: "Role", field: "edgerole", editable: true
        }],
        rowData: []
      }
    }
    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
      };

    getAllUsers = () => {
      fetch(`http://localhost:5000/api/role/`)
      .then(res => res.json())
      .then(res => {
        var myData = res.map(r => [r.email, r.edgerole]);
        let rowData = []
        myData.forEach(row=>{
          let ev = {}
          ev['email'] = row[0]
        ev['edgerole'] = row[1]
        rowData.push(ev);
        })
        this.setState({rowData}, () => console.log(this.state.rowData));
      });
    };

   componentDidMount() {
     this.getAllUsers();
   }

   addRow() {
    let myArr = [];
    const newItems = {id: 'null', email: 'Enter a google email', edgerole: 'Enter role'};
    myArr.push(newItems);
    var res = this.gridApi.updateRowData({ add: myArr });
  }

  saveRow = () => {
    const selectedNodes = this.gridApi.getSelectedNodes()
      const rowData = selectedNodes.map( node => node.data )
      rowData.forEach(row=>{
        let evie = {}
        evie['email'] = row.email
        evie['edgerole'] = row.edgerole
        fetch(`http://localhost:5000/api/role/check/${row.email}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          /*
          var myData = res.map(r => [r.email, r.edgerole]);
          let rowData = []
          myData.forEach(row=>{
            let ev = {}
            ev['email'] = row[0]
          ev['edgerole'] = row[1]
          rowData.push(ev);
          })
          this.setState({rowData}, () => console.log(this.state.rowData)); */
        });
      })
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
            // {this.getAllUsers()}
            <button onClick={this.addRow.bind(this)}>Add Row</button>
            <button onClick={this.saveRow}>Save</button>
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
  
  export default MembersList;