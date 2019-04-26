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
          headerName: "Email", field: "0"
        }, {
          headerName: "Role", field: "1"
        }],
        rowData: []
      }
    }

    getAllUsers = () => {
      fetch(`http://localhost:5000/api/role/`)
      .then(res => res.json())
      .then(res => {
        var rowData = res.map(r => [r.email, r.edgerole]);
        this.setState({rowData}, () => console.log(this.state.rowData));
      });
    };

   componentDidMount() {
     this.getAllUsers();
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
            {this.getAllUsers()}
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}>
              </AgGridReact>
            </div>
          </div>
      );
    }
  }
  
  export default MembersList;