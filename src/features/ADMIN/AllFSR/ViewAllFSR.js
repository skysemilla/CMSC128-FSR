import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import NavBar from './../ui/NavBarAdmin'
import ViewFSRRow from './../ui/FSRViewRow';

//Dummy data
const dummySample = {
  id: '1',
  fname: 'Jasper',
  mname: '123',
  lname: 'Arquilita',
  college: 'CAS',
  dept: 'ICS',
  approved: 'NO'
};

const dummySample2 = {
  id: '2',
  fname: 'Sky',
  mname: 'ABC',
  lname: 'Semilla',
  college: 'CAS',
  dept: 'ICS',
  approved: 'YES'
};

export default class ViewAllFSR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample, dummySample2] //dummmy data
    };
  }

  // componentDidMount(){
  //   e.preventDefault();
  //   Api.ViewAllFSR({
  //   })
  //     .then(result => {
  //       this.setState({ data: result});
  //     })
  //     .catch(e => alert('Error loading All FSRs!!'));
  // }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="all"/>

        <div class="ui piled very padded container segment" color="teal">
          <div>
            <h1 class="ui blue header">
              VIEW ALL FSR
            </h1>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned"> Employee ID </th>
                <th class="center aligned"> Full Name </th>
                <th class="center aligned"> College </th>
                <th class="center aligned"> Department </th>
                <th class="center aligned"> Approved? </th>
                <th class="center aligned"> FSR </th>
              </tr>
            </thead>
            <tbody>
                {this.state.data.map(item => {
                return (
                  <ViewFSRRow {...this.props}
                      id= {item.id}
                      fname= {item.fname}
                      mname= {item.mname}
                      lname= {item.lname}
                      college= {item.college}
                      dept= {item.dept}
                      approved= {item.approved}
                      editURL = "../admin/editFSR"
                      label="all"/>
                );
                })}
            </tbody>
          </table>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewAllFSR/>, document.getElementById('root'));
