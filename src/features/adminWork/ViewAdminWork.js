import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewAdminWorkRow from './AdminWorkViewRow'
import NavBar from './../ui/NavBar';

export default class ViewAdminWork extends Component {
  componentDidMount() {
    Api.viewAllPositions()
      .then(result => {
        this.setState({ data: result.data.data });
      })
      .catch(err => alert(err));
  }

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../adminwork/add');
  }

  render() {
    return (
      <div className="App-header">
        <div><NavBar {...this.props} Label="FSR" subLabel="adminwork" /></div>
        <div className="bodyDiv">
        <div
          className="ui compact piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h1 className="ui blue header">ADMINISTRATIVE WORK</h1>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <div className="scrollTable">
          <table className="ui celled table">
            <thead>
              <tr>
                <th className="center aligned">Nature Of Work</th>
                <th className="center aligned">Office</th>
                <th className="center aligned">Credit Units</th>
                <th className="center aligned"> Attachments </th>
                <th className="center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <ViewAdminWorkRow
                    {...this.props}
                    id={item.position_id}
                    nature_of_work={item.nature_of_work}
                    office={item.office}
                    credit_units={item.credit_units}
                    editURL="../adminwork/edit"
                    label="Administrative Work"
                    subLabel="administrative work"
                  />
                );
              })}
            </tbody>
          </table>
          </div>
          <button className="ui blue right floated button" onClick={this.startAdd}>
            Add Administrative Work
          </button>
          <Divider hidden="true" />
        </div>
        </div>
      </div>
    );
  }
}
