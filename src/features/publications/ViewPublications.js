import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

import DeleteModal from './ViewPublications/DeleteModal'

export default class ViewPublications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      publications: []
    };

    this.handleLogout = this.handleLogout.bind(this);
  }


  componentDidMount = () => {
    //   e.preventDefault();
    //   Api.viewPublications({
    //   })
    //     .then(result => {
    //       this.setState({ publications: result});
    //     })
    //     .catch(e => alert('Error loading Publications!!'));
  };

  handleLogout() {
    Api.logout();
    this.props.history.push('../..');
  }

  render() {
    return (
      <div className="App-header">
        <div class="ui blue inverted fluid ten item menu">
          <a class="item" href="/profile/view">
            Profile
          </a>
          <a class="item" href="/teachingload/view">
            Teaching Load
          </a>
          <a class="item active" href="/publications/view">
            Publications
          </a>
          <a class="item" href="/adminwork/view">
            Administrative Work
          </a>
          <a class="item" href="/ecservice/view">
            Extension and Community Service
          </a>
          <a class="item" href="/studyload/view">
            Study Load
          </a>
          <a class="item" href="/lpp/view">
            Limited Practice of Profession
          </a>
          <a class="item" href="/Professorialchair/view">
            Professorial Chair
          </a>
          <a class="item" href="/consultation/view">
            Consultation Hours
          </a>
          <a class="item" onClick={this.handleLogout}>
            Logout
          </a>
        </div>
        <Divider hidden="true" />
        <div
          class="ui compact piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">
              View Publications
              <button class="ui right floated blue button">Generate FSR</button>
              <button class="ui right floated blue button">
                Send to Admin
              </button>
            </h2>
          </div>
          <Divider hidden="true" />
          <div>
            <table class="ui celled structured table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Role</th>
                  <th>Co-workers</th>
                  <th>Funding</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Approved Credit Units</th>
                  <th>Total Workload Units</th>
                  <th>Edit</th>
                  <th>Attachments</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tr class="center aligned">
                <td>Sample</td>
                <td>Type</td>
                <td>Role</td>
                <td>ABC</td>
                <td>123,456</td>
                <td>03/17/18</td>
                <td>03/17/19</td>
                <td>3</td>
                <td>3</td>
                <td>
                  <button class="ui button">
                    <i class="pencil alternate icon" />
                  </button>
                </td>
                <td>
                  <button class="ui button">
                    <i class="eye icon" />
                  </button>
                </td>
                <td>
                  <div>
                    <DeleteModal />
                  </div>
                </td>
              </tr>
              {this.state.publications.map(item => {
                return (
                  <tr class="center aligned">
                    <td>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.role}</td>
                    <td>{item.Coauthors}</td>
                    <td>{item.funding}</td>
                    <td>{item.startdate}</td>
                    <td>{item.enddate}</td>
                    <td>{item.credit}</td>
                    <td>{item.total}</td>
                    <button class="ui right floated blue button">Edit</button>
                    <button class="ui right floated blue button">
                      View Attachments
                    </button>
                  </tr>
                );
              })}
            </table>
            <button class="ui right floated blue button">
              Add Publications
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewPublications />, document.getElementById('root'));
