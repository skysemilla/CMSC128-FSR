import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import ViewAdminWorkRow from './AdminWorkViewRow';
import GenerateFSR from './../../GenerateFSR'
import SendtoAdmin from './../../SendtoAdmin'
import NavBar from './../ui/NavBarAdmin'

//Dummy data
const dummySample = {
    positionOfWork : 'ABC',
    officeUnit : '123',
    approvedCreditUnits : '3',
    totalAdminLoadCredits : '3'
};

export default class ViewAdminWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }

  // componentDidMount(){
  //   e.preventDefault();
  //   Api.ViewTeachingLoad({
  //   })
  //     .then(result => {
  //       this.setState({ data: result});
  //     })
  //     .catch(e => alert('Error loading Publications!!'));
  // }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../adminwork/add');
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="adminwork"/>
        </div>
        <div classNameName="bodydiv">
        <div className="ui compact piled very padded text left aligned container segment" color="teal">
          <div>
            <h1 className="ui blue header">
              VIEW ADMINISTRATIVE WORK
            </h1>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table className="ui celled table">
            <thead>
              <tr>
                <th className="center aligned">Position Of Work</th>
                <th className="center aligned">Office Unit</th>
                <th className="center aligned">Approved Credit Units</th>
                <th className="center aligned">Total Admin Load Credits</th>
                <th className="center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <ViewAdminWorkRow {...this.props}
                      positionOfWork={item.positionOfWork}
                      officeUnit={item.officeUnit}
                      approvedCreditUnits={item.approvedCreditUnits}
                      totalAdminLoadCredits={item.totalAdminLoadCredits}
                      editURL = "../adminwork/edit"
                      label = "Administrative Work"
                      subLabel = "administrative work"
                  />
                );
              })}
            </tbody>
          </table>
          <button className="ui blue right floated button" onClick={this.startAdd}>Add Administrative Work</button>
          <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}