import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import DeleteModal from '../GenericDelete';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import ViewProfessionsRow from './ProfessionsViewRow';
import NavBar from './../ui/NavBar';

const dummySample = { id: 1, permission: 'YES', date: '03/26/18' };
const dummySample2 = { id: 2, permission: 'NO', date: '' };

export default class ViewProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample, dummySample2]
    };

    this.startAdd = this.startAdd.bind(this);
  }

  componentDidMount = () => {
    //   e.preventDefault();
    //   Api.viewProfession({
    //   })
    //     .then(result => {
    //       this.setState({ publications: result});
    //     })
    //     .catch(e => alert('Error loading Profession!!'));
  };

  startAdd() {
    this.props.history.push('./add');
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profession" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 class="ui blue header">LIMITED PRACTICE OF PROFESSION</h1>
            </div>
            <Divider hidden="true" />
            <div>
              <style>
                {' '}
                {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
              </style>
              <table class="ui celled table">
                <thead>
                  <tr>
                    <th class="center aligned">Official permission?</th>
                    <th class="center aligned">Date</th>
                    <th class="center aligned">Attachments</th>
                    <th class="center aligned">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(item => {
                    return (
                      <ViewProfessionsRow
                        {...this.props}
                        id={item.id}
                        permission={item.permission}
                        date={item.date}
                        label="Profession"
                        subLabel="profession"
                        editURL="../profession/edit"
                      />
                    );
                  })}
                </tbody>
              </table>
              <button
                class="ui right floated blue button"
                onClick={this.startAdd}>
                Add new Profession
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
