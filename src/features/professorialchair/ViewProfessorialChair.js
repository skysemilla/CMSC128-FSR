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
  professional_chair: 'CMSC 128',
  grants: 'CAS B04',
  grant_title: 'T-Th',
  start_date: '03/26/18',
  end_date: '03/27/18',
  attachment: 'not null'
};

export default class ViewProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
      
    };

    this.startEdit = this.startEdit.bind(this);
  }

  startEdit(e) {
    e.preventDefault();
    this.props.history.push('../professorialchair/edit');
  }
  

  componentDidMount() {
    Api.getSession().then(res => {
      if (res.data.data !== null) {
        Api.viewFacultyGrant({id: res.data.data.emp_id }).then(result => {
          if (result.data.data !== null) {
            this.setState({ data: result.data.data });
          } else { // if no result
            this.setState({ data: null});
          }
        });
      }
    });
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profchair" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 class="ui blue header">PROFESSORIAL CHAIR</h1>
            </div>

            <div class="ui large list">
              <div>
                <div class="item">
                  <div class="content">
                    <p>
                      <b>Professorial Chair: </b>
                      {this.state.data === null ? (
                        <div class="ui disabled input"> None </div>
                      ) : (
                        this.state.data.professional_chair
                      )}
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <p>
                      <b>Grant: </b>
                      {this.state.data === null ? (
                        <div class="ui disabled input"> None </div>
                      ) : (
                        this.state.data.grants
                      )}
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <p>
                      <b>Grant title: </b>
                      {this.state.data === null ? (
                        <div class="ui disabled input"> None </div>
                      ) : (
                        this.state.data.grant_title
                      )}
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <p>
                      <b>Start date: </b>
                      {this.state.data === null ? (
                        <div class="ui disabled input"> None </div>
                      ) : (
                        this.state.data.start_date
                      )}
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <p>
                      <b>End date: </b>
                      {this.state.data === null ? (
                        <div class="ui disabled input"> None</div>
                      ) : (
                        this.state.data.end_date
                      )}
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="content">
                    <p>
                      <b>Attachments: </b>
                      {this.state.data === null ? (
                        <div class="ui disabled input"> None</div>
                      ) : (
                        <ViewAttachments
                          {...this.props}
                          label="Professorial Chair"
                          subLabel="...this.props not working"
                        />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="ui blue right floated button"
              onClick={this.startEdit}>
              Edit Professorial Chair
            </button>
            <Divider hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
