import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'

const dummySample={permission: 'YES', date: ''};

export default class EditProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
        permission: '',
        date: '',
        attachmentLink: ''
    };

    this.handleChangePermission = this.handleChangePermission.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.uploadAttachment = this.uploadAttachment.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  componentDidMount(){
    if(typeof this.props.history!=='undefined'){
      console.log(this.props.history.location.state.id);
    }
  }

  handleChangePermission(e) {
    this.setState({ permission: e.target.value });
  }

  handleChangeDate(e){
    this.setState({ date: e.target.value });
  }

  startEdit(e) {
    // e.preventDefault();
    // Api.addprofession({
    // permission: this.state.permission,
    // date: this.state.date
    // })
    //   .then(result => {
    //     this.props.history.push('./teachingload/view');  //change to profile later!!
    //     alert('Teaching load successfully added!');
    //   })
    //   .catch(e => alert('Error adding new Teaching Load!'));
  }

  uploadAttachment(e){
    //this.setState({ attachmentLink: ???});
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="profession"/>
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
                <label>Have you applied for official permission for limited practice of profession?</label>
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
          {
            this.state.permission !== 'YES' ?
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
               :
              <p>
                <a class="ui small header">Date submitted </a>
                  <div class="ui input fluid mini focus">
                    <input
                      type="date"
                      onChange={this.handleChangeDate}
                    />
                </div>
              </p>
          }
          <div class="ui center aligned container">
            <button class="ui blue button" onClick={this.uploadAttachment}>Upload Attachments</button>
            <button
              class="ui center aligned blue button"
              onClick={this.startEdit}>
              Edit Profession
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<EditProfession/>, document.getElementById('root'));
