import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

const activated = {
  value: 'item active'
};
const deactivated = {
  value: 'item'
};

export default class EditNav extends Component {
  // EditNav is the horizontal and vertical navs for admin/editFSR

  constructor(props) {
    super(props);

    this.state = {
      initaialActiveSubMenu: this.props.activeSubLabel,

      teachingLoadClass: '',
      publicationsClass: '',
      studyLoadClass: '',
      extensionClass: '',
      consultationClass: '',
      professionClass: '',
      profChairClass: '',
      adminWorkClass: '',
      username: ''
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.initializeActiveItem = this.initializeActiveItem.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.initializeActiveSubMenu = this.initializeActiveSubMenu.bind(this);

    this.activateTeachingLoad = this.activateTeachingLoad.bind(this);
    this.activatePublications = this.activatePublications.bind(this);
    this.activateStudyLoad = this.activateStudyLoad.bind(this);
    this.activateExtension = this.activateExtension.bind(this);
    this.activateConsultation = this.activateConsultation.bind(this);
    this.activateProfession = this.activateProfession.bind(this);
    this.activateProfChair = this.activateProfChair.bind(this);
    this.activateAdminWork = this.activateAdminWork.bind(this);
  }

  componentDidMount(e) {
    this.initializeActiveItem(e);
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        Api.getEmployeeData({ empid: result.data.data.emp_id }).then(res => {
          this.setState({ username: result.data.data.username });
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  initializeActiveItem(e) {
    if (this.props.activeSubLabel === 'teachingload') {
      this.activateTeachingLoad();
    } else if (this.props.activeSubLabel === 'publications') {
      this.activatePublications();
    } else if (this.props.activeSubLabel === 'studyload') {
      this.activateStudyLoad();
    } else if (this.props.activeSubLabel === 'extension') {
      this.activateExtension();
    } else if (this.props.activeSubLabel === 'consultation') {
      this.activateConsultation();
    } else if (this.props.activeSubLabel === 'profession') {
      this.activateProfession();
    } else if (this.props.activeSubLabel === 'profchair') {
      this.activateProfChair();
    } else if (this.props.activeSubLabel === 'adminwork') {
      this.activateAdminWork();
    }
  }

  handleChange(e) {
    console.log('');
    console.log('handleChange by EditNav');
    console.log('e.currentTarget.id: ' + e.currentTarget.id);

    e.preventDefault();
    // main nav bar
    if (e.currentTarget.id === 'all') {
      this.props.history.push('/admin/viewAllFSR');
    } else if (e.currentTarget.id === 'pending') {
      this.props.history.push('/admin/viewPendingFSR');
    } else if (e.currentTarget.id === 'approved') {
      this.props.history.push('/admin/viewApprovedFSR');
    } else if (e.currentTarget.id === 'faculty') {
      this.props.history.push('/admin/viewAllFaculty');
    } else if (e.currentTarget.id === 'edit') {
      this.props.history.push('/admin/editFSR/teachingload/view');
    } // end main navbar

    // vertical nav
    else if (e.currentTarget.id === 'teachingload') {
      this.activateTeachingLoad();
      this.props.history.push('/admin/editFSR/teachingload/view');
    } else if (e.currentTarget.id === 'publications') {
      this.activatePublications();
      this.props.history.push('/admin/editFSR/publications/view');
    } else if (e.currentTarget.id === 'studyload') {
      this.activateStudyLoad();
      this.props.history.push('/admin/editFSR/studyload/view');
    } else if (e.currentTarget.id === 'extension') {
      this.activateExtension();
      this.props.history.push('/admin/editFSR/extension/view');
    } else if (e.currentTarget.id === 'consultation') {
      this.activateConsultation();
      this.props.history.push('/admin/editFSR/consultation/edit'); // no view for admin consulataion
    } else if (e.currentTarget.id === 'profession') {
      this.activateProfession();
      this.props.history.push('/admin/editFSR/profession/view');
    } else if (e.currentTarget.id === 'profchair') {
      this.activateProfChair();
      this.props.history.push('/admin/editFSR/profchair/view');
    } else if (e.currentTarget.id === 'adminwork') {
      this.activateAdminWork();
      this.props.history.push('/admin/editFSR/adminwork/view');
    } // end vertical nav

    this.forceUpdate();
  }

  initializeActiveSubMenu() {
    console.log(this.state.initialActiveSubMenu);
  }

  activateTeachingLoad(e) {
    this.setState({ teachingLoadClass: activated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activatePublications(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: activated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activateStudyLoad(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: activated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activateExtension(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: activated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activateConsultation(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: activated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activateProfession(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: activated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activateProfChair(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: activated.value });
    this.setState({ adminWorkClass: deactivated.value });
  }
  activateAdminWork(e) {
    this.setState({ teachingLoadClass: deactivated.value });
    this.setState({ publicationsClass: deactivated.value });
    this.setState({ studyLoadClass: deactivated.value });
    this.setState({ extensionClass: deactivated.value });
    this.setState({ consultationClass: deactivated.value });
    this.setState({ professionClass: deactivated.value });
    this.setState({ profChairClass: deactivated.value });
    this.setState({ adminWorkClass: activated.value });
  }

  render() {
    return (
      <div onChange={this.initializeActiveItem}>
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
          <a class="item" id="faculty" onClick={this.handleChange}>
            All Faculty
          </a>
          <div class="right menu">
            <label className="ui item">
              Logged in as {this.state.username}
              <i class="user circle icon" />
            </label>
            <a class="ui item" onClick={this.handleLogout}>
              Logout
            </a>
          </div>
        </div>

        <div class="ui large inverted blue vertical menu flex-container large navDiv">
          <a
            id="teachingload"
            class={this.state.teachingLoadClass}
            onClick={this.handleChange.bind(this)}>
            Teaching Load
          </a>
          <a
            id="publications"
            class={this.state.publicationsClass}
            onClick={this.handleChange}>
            Publications
          </a>
          <a
            id="studyload"
            class={this.state.studyLoadClass}
            onClick={this.handleChange}>
            Study Load
          </a>
          <a
            id="extension"
            class={this.state.extensionClass}
            onClick={this.handleChange}>
            Extension and Community Service
          </a>
          <a
            id="consultation"
            class={this.state.consultationClass}
            onClick={this.handleChange}>
            Consultation Hours
          </a>
          <a
            id="profession"
            class={this.state.professionClass}
            onClick={this.handleChange}>
            Limited Practice of Profession
          </a>
          <a
            id="profchair"
            class={this.state.profChairClass}
            onClick={this.handleChange}>
            Professorial Chair
          </a>
          <a
            id="adminwork"
            class={this.state.adminWorkClass}
            onClick={this.handleChange}>
            Administrative Work
          </a>
        </div>
      </div>
    );
  }
}
