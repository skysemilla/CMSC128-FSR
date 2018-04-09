import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import ProfessorialChairViewRow from './ProfessorialChairViewRow';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import NavBar from './../ui/NavBar';
import ViewAttachments from './../ViewAttachments'; 

//Dummy data
const dummySample = {
  profchair: 'CMSC 128',
  grant: 'CAS B04',
  granttitle: 'T-Th',
  startdate: '03/26/18',
  enddate: '03/27/18',
  attachment: 'a'
};

export default class ViewProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample] //dummmy data
    };

    this.startAdd = this.startAdd.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  startAdd(e) {
    e.preventDefault();
    this.props.history.push('../professorialchair/add');
  }

  startEdit(e) {
    e.preventDefault();
    this.props.history.push('../professorialchair/edit');
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="profchair"/>

        <div class="ui compact piled very padded text left aligned container segment" color="teal">
          <div>
            <h1 class="ui blue header">
              <button
                class="ui blue right floated button"
                onClick={this.startEdit}>
                Edit Professorial Chair
              </button>
              PROFESSORIAL CHAIR
            </h1>
          </div>

          <div class="ui large list">
            <div>
              <div class="item">
                <div class="content">
                  <p>
                    <b>
                      Professorial Chair:{' '}
                    </b>
                    {this.state.data[0].profchair}
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <p>
                    <b>
                     Grant: {' '}
                    </b>
                    {this.state.data[0].grant}
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <p>
                    <b>
                     Grant title: {' '}
                    </b>
                    {this.state.data[0].granttitle}
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <p>
                    <b>
                     Start date: {' '}
                    </b>
                    {this.state.data[0].startdate}
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <p>
                    <b>
                     End date: {' '}
                    </b>
                    {this.state.data[0].enddate}
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <p>
                    <b>
                     Attachments: {' '}
                    </b>
                    {this.state.data[0].attachment === ''? 'None' : <ViewAttachments {...this.props}  label="Professorial Chair" subLabel="...this.props not working" />}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button class="ui blue right floated button" onClick={this.startAdd}>Add Professorial Chair</button>
          <Divider hidden="true" />
        </div>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewProfessorialChair />, document.getElementById('root'));
