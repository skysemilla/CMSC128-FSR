import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

import LimitedPracticeOfProfessionRow from './ViewLimitedPracticeOfProfession/LimitedPracticeOfProfessionRow'; 
import ScriptInserter from './ViewLimitedPracticeOfProfession/ScriptInserter'; 

import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

//import DeleteModal from './ViewAdministrativeWork/AdministrativeWorkRow'; //delete this later

import NavBar from './../ui/NavBar'


//Dummy data
const dummySample = {
  workPosition: 'Instructor 1',
  officeUnit: 'C-112',
  approvedCreditUnits: '6',
  totalAdministrativeLoadCredits: '0'
};

const dummySample2 = {
  workPosition: 'Assistant Professor 1',
  officeUnit: 'C-114',
  approvedCreditUnits: '6',
  totalAdministrativeLoadCredits: '1'
};

const dummySample3 = {
  workPosition: 'Instructor 2',
  officeUnit: 'C-112',
  approvedCreditUnits: '3',
  totalAdministrativeLoadCredits: '3'
};

const disabled = {
  inputClass: 'ui input disabled',
  labelClass: 'inline disabled fields',
};
const enabled = {
  inputClass: 'ui input',
  labelClass: 'inline fields',
};

export default class ViewLimitedPracticeOfProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // data : []
      data: [dummySample, dummySample2, dummySample3], //dummmy data
      dateFormClass: enabled,
      i: 0,
    };
  }

  radioHandleInputChange(param, e) {
    var checked = e.target.checked;
    var id = e.target.id;
    //console.log('Oooh! What was that?')

    console.log('--------------- ' + ++this.state.i);
    //console.log('id: ' + id);
    console.log('param: ' + param);
    console.log('checked: ' + checked);

    if (param=='yes') {
      console.log('action: enable');
      this.handleEnable();
    } else if (param=='no') {
      console.log('action: disable');
      this.handleDisable();
    }

  }

  handleEnable() {
    this.setState({ dateFormClass: enabled });
  }
  handleDisable() {
    this.setState({ dateFormClass: disabled });
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props}/>

        <div class="ui piled very padded container segment" color="teal">
          <div>
            <h1 class="ui blue header">
              ADMINISTRATIVE WORK
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

          <script></script>

         <div>
          <ScriptInserter />
         </div>

          <div class="ui form">
            <div class="inline fields" >
              <label>Have you applied for an official permission for limited practice of profession? </label>
              <div class="field" >
                <div class="ui radio checkbox">
                  <input id="yes" type="radio" name="applied" checked="checked" onclick="check()" onChange={this.radioHandleInputChange.bind(this, 'yes')} ></input>
                  <label>Yes</label>
                </div>
              </div>
              <div class="field" >
                <div class="ui radio checkbox">
                  <input id="no" type="radio" name="applied" onclick="uncheck()" onChange={this.radioHandleInputChange.bind(this, 'no')}>
                  </input>
                  <label>No</label>
                </div>
              </div>
            </div>
          </div>

          <div class="ui form" >
            <div class={this.state.dateFormClass.labelClass}>
                <label>When did you apply for the permission for limited practice of profession?    </label>
                <div class={this.state.dateFormClass.inputClass}>
                  <input style={{ width: '165px' }} type="date" />
                </div>
            </div>
          </div>
          
          <div>
            <h1 class="ui white header">
              <button class="ui right floated button">
                <a color="white" href="./add">
                  {' '}
                  Add View Limited Practice Of Profession{' '}
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
ReactDOM.render(<ViewLimitedPracticeOfProfession />, document.getElementById('root'));
