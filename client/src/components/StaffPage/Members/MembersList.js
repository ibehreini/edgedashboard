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
        console.log(rowData);
        this.setState({rowData}, () => console.log(this.state.rowData));
      });
    };

   componentDidMount() {
     this.getAllUsers();
   }

   addRow() {
    let myArr = [];
    const newItems = {email: 'Enter a google email', edgerole: 'Enter role'};
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
          var myData = res.map(r => [r.count]);
          console.log(myData[0]);
          if (myData[0][0] === '0') {
            fetch('http://localhost:5000/api/role/', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(evie)
            })
            .then(res => {
              console.log(res);
              this.getAllUsers();
            });
          }
          else {
            fetch('http://localhost:5000/api/role/u', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(evie)
            })
            .then(res => {
              console.log(res);
              this.getAllUsers();
            });
          }
        });
      })
  }

  removeRow = () => {
    const selectedNodes = this.gridApi.getSelectedNodes()
      const rowData = selectedNodes.map( node => node.data )
      rowData.forEach(row=>{
        console.log(row.email);
    fetch(`http://localhost:5000/api/role/d/${row.email}`, {
              method: 'DELETE',
              // headers: { 'Content-Type': 'application/json' },
              // body: JSON.stringify(row.email)
            })
            .then(res => {
              console.log(res);
              this.getAllUsers();
            }); 
            // const requestOptions = {
            //   method: 'DELETE',
           //    body: row
            //  };
            fetch("http://localhost:5000/api/role/d/" + row.email, {
              headers: {
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
              },
              method: "DELETE",
              body: row
            })
            .then(res => res.json())
            .then(json => {
                console.log('hi');
              });
            });
          
  }

    render() {
        return (
          <div
            className="ag-theme-fresh"
            style={{ 
              borderWidth: 0.5,
              borderColor: '#d6d7da',
              width: '50%',
              margin: 'auto' }} 
          >
            <div 
              className="ag-theme-fresh"
              style={{ 
              height: '500px',    
              width: '800px' }} 
            >
            <button onClick={this.addRow.bind(this)}>Add Row</button>
            <button onClick={this.saveRow}>Save</button>
            <button onClick={this.removeRow}>Delete</button>
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