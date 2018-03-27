import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

export default class NavBarAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: this.props.Label
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ activeMenu: e.currentTarget.id});
    if(this.state.activeMenu==='all'){
        this.props.history.push('../../admin/viewAllFSR');
    }else if(this.state.activeMenu==='pending'){
        this.props.history.push('../../admin/viewPendingFSR');
    }else if(this.state.activeMenu==='approved'){
        this.props.history.push('../../admin/viewApprovedFSR');
    }else{
        this.props.history.push('../../admin/viewAllFaculty');
    }
  }

  render() {
        return(
         <div>
         {this.state.activeMenu==='all'?
          <div class="ui huge tabular menu">
              <a class="active item" id="all" onClick={this.handleChange}>
                All FSR
              </a>
              <a class="item" id="pending" onClick={this.handleChange}>
                Pending FSR
              </a>
              <a class="item" id="approved" onClick={this.handleChange}>
                Approved FSR
              </a>
              <a class="item" id="faculty" onClick={this.handleChange}>
                All Faculty
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
        :this.state.activeMenu==='pending'?
          <div class="ui huge tabular menu">
              <a class="item" id="all" onClick={this.handleChange}>
                All FSR
              </a>
              <a class="active item" id="pending" onClick={this.handleChange}>
                Pending FSR
              </a>
              <a class="item" id="approved" onClick={this.handleChange}>
                Approved FSR
              </a>
              <a class="item" id="faculty" onClick={this.handleChange}>
                All Faculty
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
        :this.state.activeMenu==='approved'?
          <div class="ui huge tabular menu">
              <a class="item" id="all" onClick={this.handleChange}>
                All FSR
              </a>
              <a class="item" id="pending" onClick={this.handleChange}>
                Pending FSR
              </a>
              <a class="active item" id="approved" onClick={this.handleChange}>
                Approved FSR
              </a>
              <a class="item" id="faculty" onClick={this.handleChange}>
                All Faculty
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
        :
          <div class="ui huge tabular menu">
              <a class="item" id="all" onClick={this.handleChange}>
                All FSR
              </a>
              <a class="item" id="pending" onClick={this.handleChange}>
                Pending FSR
              </a>
              <a class="item" id="approved" onClick={this.handleChange}>
                Approved FSR
              </a>
              <a class="active item" id="faculty" onClick={this.handleChange}>
                All Faculty
              </a>
              <div class="right menu">
              <a class="ui item" onClick={this.handleLogout}>
                Logout
              </a>
            </div>
          </div>
        }
        </div>
      )
  }
}
//=========================
ReactDOM.render(<NavBarAdmin/>, document.getElementById('root'));