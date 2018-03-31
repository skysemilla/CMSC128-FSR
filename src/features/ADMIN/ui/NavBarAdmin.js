import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import EditNav from './EditNav';

export default class NavBarAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: this.props.Label,
      subMenu: this.props.subLabel,
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('../..');
  }

  // https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react ~just leaving it here

  handleChange(e) {
    console.log('');
    console.log('handleChange by NavBarAdmin');

    e.preventDefault();
    this.setState({ activeMenu: e.currentTarget.id});
    if(e.currentTarget.id==='all'){
      this.props.history.push('../../admin/viewAllFSR');
    }else if(e.currentTarget.id==='pending'){
      this.props.history.push('../../admin/viewPendingFSR');
    }else if(e.currentTarget.id==='approved'){
      this.props.history.push('../../admin/viewApprovedFSR');
    }else if(e.currentTarget.id==='faculty'){
      this.props.history.push('../../admin/viewAllFaculty');
    }else if(e.currentTarget.id==='edit'){
      this.props.history.push('../../admin/editFSR/teachingload/view');
    }
    this.forceUpdate();
  }

  render() {
    return(
      <div>
        {
          this.state.activeMenu==='all'?
            <div class="ui blue inverted huge menu div1">
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
              <a class="item" id="edit" onClick={this.handleChange}>
                Edit
              </a>
              <div class="right menu">
                <a class="ui item" onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          :this.state.activeMenu==='pending'?
            <div class="ui blue inverted huge menu div1">
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
              <a class="item" id="edit" onClick={this.handleChange}>
                Edit
              </a>
              <div class="right menu">
                <a class="ui item" onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          :this.state.activeMenu==='approved'?
            <div class="ui blue inverted huge menu div1">
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
              <a class="item" id="edit" onClick={this.handleChange}>
                Edit
              </a>
              <div class="right menu">
                <a class="ui item" onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          :this.state.activeMenu==='faculty'?
            <div class="ui blue inverted huge menu div1">
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
              <a class="item" id="edit" onClick={this.handleChange}>
                Edit
              </a>
              <div class="right menu">
                <a class="ui item" onClick={this.handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          :this.state.activeMenu==='edit'?
            <div>
              <EditNav {...this.props} activeSubLabel={this.state.subMenu} />
            </div>
          : <div> </div>
        }
      </div>
    )
  }
}
//=========================
ReactDOM.render(<NavBarAdmin/>, document.getElementById('root'));