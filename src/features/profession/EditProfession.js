import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

export default class EditProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
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


  
  componentDidMount = () => {
    Api.getSession().then(res => {
      if (res.data.data !== null) {
        Api.viewLimitedPractice({ emp_id: res.data.data.emp_id }).then(result => {
          if (result.data.data !== null) {
            console.log(result.data.data)    
            this.setState({ emp_id: result.data.data[0].emp_id})
            this.setState({ permission: result.data.data[0].haveApplied});
            this.setState({ date: result.data.data[0].date_submitted});
          }
        });
      }
    });
};

  handleChangePermission(e) {
    console.log(e.target.value);
    this.setState({ permission: e.target.value });
    if (e.currentTarget.value === '0') {
      this.setState({ date: "null" });
    }
    this.forceUpdate();
  }

  handleChangeDate(e) {
    this.setState({ date: e.target.value });
  }

  startEdit(e) {
    
    if (
      this.state.permission == 0 ||
      (this.state.permission == '1' && this.state.date != '')
    ) {
      e.preventDefault();
       if (this.state.permission === 0) {this.setState({ date: "none" })}
      Api.editLimitedPractice({
        haveApplied: this.state.permission,
        date_submitted: this.state.date,
        emp_id: this.state.emp_id
      })
        .then(result => {
          this.props.history.push('./view'); //change to profile later!!
          alert('Profession successfully edited!');
        })
        .catch(e => alert('Error editing Profession!'));
    } else {
      console.log()
      alert('Invalid input!');
    }
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
              {this.state.permission === '1' ? (
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
                          name="permission"
                          checked="checked"
                          value={1}
                          onClick={this.handleChangePermission}
                        />
                        <label>Yes</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input
                          type="radio"
                          name="permission"
                          value={0}
                          
                          onClick={this.handleChangePermission}
                        />
                        <label>No</label>
                      </div>
                    </div>
                    {this.state.permission === '' ? (
                      <div className="ui left pointing red basic label">
                        Required
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              ) : (
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
                          name="permission"
                          value={1}
                          
                          onClick={this.handleChangePermission}
                        />
                        <label>Yes</label>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui radio checkbox">
                        <input
                          type="radio"
                          name="permission"
                          value={0}
                          checked="checked"
                          onClick={this.handleChangePermission}
                        />
                        <label>No</label>
                      </div>
                    </div>
                    {this.state.permission === '' ? (
                      <div className="ui left pointing red basic label">
                        Required
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              )}
            </p>
            {this.state.permission !== '1' ? (
              <p>
                <a class="ui small header">Date submitted </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    value={this.state.date}
                    onChange={this.handleChangeDate}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a class="ui small header">Date submitted</a>
                <div class="ui input fluid mini focus">
                  <input
                    type="date"
                    onChange={this.handleChangeDate}
                    value={this.state.date}
                  />
                </div>
                {this.state.date === '' ? (
                  <div className="ui pointing red basic label">
                    Invalid date
                  </div>
                ) : (
                  <div />
                )}
              </p>
            )}
            <div class="ui center aligned container">
              <button class="ui blue button" onClick={this.uploadAttachment}>
                Upload Attachments
              </button>
              <button
                class="ui center aligned blue button"
                onClick={this.startEdit}>
                Add Profession
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}