import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ProfessorialChairViewRow from './ProfessorialChairViewRow';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import NavBar from './../ui/NavBar'

//Dummy data
const dummySample = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '4pm-7pm',
  enddate: '3',
};

const dummySample2 = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '4pm-7pm',
  enddate: '3',
};

const dummySample3 = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '4pm-7pm',
  enddate: '3',
};

export default class ViewProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample, dummySample2, dummySample3] //dummmy data
    };
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props}/>

        <div class="ui piled very padded container segment" color="teal">
          <div>
            <h1 class="ui blue header">
              PROFESSORIAL CHAIR
              <GenerateFSR/>
              <SendtoAdmin/>
            </h1>
          </div>
          <Divider hidden="true" />
          <Divider hidden="true" />
          <Divider hidden="true" />

          <style>
            {' '}
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table class="ui celled table">
            <thead>
              <tr>
                <th class="center aligned"> Professorial Chair </th>
                <th class="center aligned"> Grant </th>
                <th class="center aligned"> Grant Title </th>
                <th class="center aligned"> Approve Start Date </th>
                <th class="center aligned"> End Date </th>
                <th class="center aligned"> Edit/Delete </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => {
                return (
                  <ProfessorialChairViewRow {...this.props}
                    profchair={item.profchair}
                    grant={item.grant}
                    granttitle={item.granttitle}
                    startdate={item.startdate}
                    enddate={item.enddate}
                  />
                );
              })}
            </tbody>
          </table>
          <div>
            <h1 class="ui white header">
              <button class="ui right floated button">
                <a color="white" href="./add">
                  {' '}
                  Edit Professorial Chair{' '}
                </a>
              </button>
            </h1>
          </div>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewProfessorialChair />, document.getElementById('root'));
