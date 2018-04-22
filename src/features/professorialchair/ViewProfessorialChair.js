import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import ViewAttachments from './../ViewAttachments';

export default class ViewProfessorialChair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
      
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
            this.setState({ data: result.data.data[0] });
          }
        });
      }
    });
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profchair" />
        </div>
        <div className="bodyDiv">
          <div
            className="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 className="ui blue header">PROFESSORIAL CHAIR</h1>
            </div>

            <div className="ui large list">
              <div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Professorial Chair: </b>
                      {this.state.data.professional_chair}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Grant: </b>
                      {this.state.data.grants}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Grant title: </b>
                      {this.state.data.grant_title}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Start date: </b>
                      {this.state.data.start_date}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>End date: </b>
                      {this.state.data.end_date}
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <p>
                      <b>Attachments: </b>
                      {this.state.data.attachment === '' ? (
                        'None'
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
              className="ui blue right floated button"
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
