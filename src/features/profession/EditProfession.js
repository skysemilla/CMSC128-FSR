import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';

const dummySample = { permission: 'YES', date: '' };

export default class EditProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limited_practice_id: '',
      permission: '',
      date: '',
      emp_id: ''
      // attachmentLink: ''
    };

    this.handleChangePermission = this.handleChangePermission.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({emp_id: result.data.data.emp_id})
      }
    });
  }

  handleChangePermission(e) {
    this.setState({ permission: e.target.value });
  }

  handleChangeDate(e) {
    this.setState({ date: e.target.value });
  }

  startEdit(e) {
    e.preventDefault();
    (this.state.permission == "YES")? this.state.permission = 1 : this.state.permission = 0;
    Api.editLimitedPractice({
      limited_practice_id: this.props.history.location.state.id,
      haveApplied: this.state.permission,
      date_submitted: this.state.date,
      emp_id: this.state.emp_id
    })
      .then(result => {
        this.props.history.push('./view');  //change to profile later!!
        alert('Teaching load successfully edited!');
      })
      .catch(e => alert('Error editing Teaching Load!'));
  }

  uploadAttachment(e) {
    //this.setState({ attachmentLink: ???});
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profession" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">
                EDIT LIMITED PRACTICE OF PROFESSION
              </h2>
            </div>
            <Divider hidden="true" />
            <p>
              <div class="ui form">
                <div class="inline fields">
                  <label>
                    Have you applied for official permission for limited
                    practice of profession?
                  </label>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input
                        type="radio"
                        name="studyleave"
                        value="YES"
                        onClick={this.handleChangePermission}
                      />
                      <label>Yes</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input
                        type="radio"
                        name="studyleave"
                        value="NO"
                        onClick={this.handleChangePermission}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>
            </p>
            {this.state.permission !== 'YES' ? (
              <p>
                <a class="ui small header">Date submitted </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeDate}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a class="ui small header">Date submitted </a>
                <div class="ui input fluid mini focus">
                  <input type="date" onChange={this.handleChangeDate} />
                </div>
              </p>
            )}
            <div class="ui center aligned container">
              <button class="ui blue button" onClick={this.uploadAttachment}>
                Upload Attachments
              </button>
              <button
                class="ui center aligned blue button"
                onClick={this.startEdit}>
                Edit Profession
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
