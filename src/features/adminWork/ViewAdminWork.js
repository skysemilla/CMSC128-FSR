import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ViewAdminWorkRow from './AdminWorkViewRow';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
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
        <NavBar {...this.props} Label="FSR" subLabel="adminwork" />

        <div
          class="ui compact piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h1 class="ui blue header">ADMINISTRATIVE WORK</h1>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned">Nature Of Work</th>
                <th class="center aligned">Office</th>
                <th class="center aligned">Credit Units</th>
                <th class="center aligned"> Attachments </th>
                <th class="center aligned"> Edit/Delete </th>
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
          <button class="ui blue right floated button" onClick={this.startAdd}>
            Add Administrative Work
          </button>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
