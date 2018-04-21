import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ProfessorialChairViewRow from './ProfessorialChairViewRow';
import NavBar from './../ui/NavBarAdmin'

//Dummy data
const dummySample = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '03/26/18',
  enddate: '03/27/18'
};

const dummySample2 = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '03/26/18',
  enddate: '03/27/18'
};

const dummySample3 = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '03/26/18',
  enddate: '03/27/18'
};

export default class ViewProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample, dummySample2, dummySample3] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../professorialchair/add');
  }

  render() {
    return (
      <div classNameName="App-header">
        <div>
        <NavBar {...this.props} Label="edit" subLabel="profchair"/>
        </div>
        <div classNameName="bodydiv">
        <div className="ui compact piled very padded text left aligned container segment" color="teal">
          <div>
            <h1 className="ui blue header">
              PROFESSORIAL CHAIR
            </h1>
          </div>
          <Divider hidden="true" />

          <style>
            {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`}{' '}
          </style>
          <table className="ui celled table">
            <thead>
              <tr>
                <th className="center aligned"> Professorial Chair </th>
                <th className="center aligned"> Grant </th>
                <th className="center aligned"> Grant Title </th>
                <th className="center aligned"> Approve Start Date </th>
                <th className="center aligned"> End Date </th>
                <th className="center aligned"> Edit/Delete </th>
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
                    editURL="../Professorialchair/edit"
                    label="Professorial Chair"
                    subLabel="Professorial chair"
                  />
                );
              })}
            </tbody>
          </table>
          <button className="ui blue right floated button" onClick={this.startAdd}>Add Professorial Chair</button>
          <Divider hidden="true" />
        </div>
        </div>
      </div>
    );
  }
}