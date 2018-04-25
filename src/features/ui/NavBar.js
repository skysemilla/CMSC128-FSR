import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericLogout from './GenericLogout';
import SendtoAdmin from './../SendtoAdmin';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: this.props.Label,
      subMenu: this.props.subLabel,
      emp_id: this.props.emp_id,
      is_being_approved: '',
      username: ''
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmenus = this.handleSubmenus.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        Api.getEmployeeData({ empid: result.data.data.emp_id }).then(res => {
          if (res.data.data.is_active === 1) {
            this.setState({
              username: res.data.data.username,
              is_being_approved: res.data.data.is_being_approved
            });
          } else {
            this.props.history.push('/');
          }
        });
      } else {
        this.props.history.push('/');
      }
    });
  }

  handleLogout(e) {
    e.preventDefault();
    Api.logout()
      .then(window.location.replace('/'));
  }

  handleChange(e) {
    this.setState({ activeMenu: e.currentTarget.id });
    if (e.currentTarget.id === 'profile') {
      this.props.history.push('/profile');
    } else if (
      e.currentTarget.id === 'FSR' &&
      this.state.is_being_approved === 1
    ) {
      this.props.history.push('/beingApproved');
    } else {
      this.props.history.push('/teachingload/view');
    }
  }

  handleSubmenus(e) {
    e.preventDefault();
    this.setState({ activeMenu: 'FSR' });
    this.setState({ subMenu: e.currentTarget.id });
    if (e.currentTarget.id === 'teachingload') {
      this.props.history.push('/teachingload/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'publications') {
      this.props.history.push('/publications/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'adminwork') {
      this.props.history.push('/adminwork/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'extension') {
      this.props.history.push('/extension/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'studyload') {
      this.props.history.push('/studyload/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'profession') {
      this.props.history.push('/profession/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'profchair') {
      this.props.history.push('/professorialchair/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'consultation') {
      this.props.history.push('/consultationhours/view', {
        empid: this.state.emp_id
      });
    } else if (e.currentTarget.id === 'subjects') {
      this.props.history.push('/subjects/view', {
        empid: this.state.emp_id
      });
    }
    this.forceUpdate();
  }

  render() {
    if (this.state.activeMenu === 'profile') {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="active item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeMenu === 'beingapproved') {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'teachingload'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a
              id="teachingload"
              className="item active"
              onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'publications'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a
              id="publications"
              className="item active"
              onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'adminwork'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a
              id="adminwork"
              className="item active"
              onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'extension'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a
              id="extension"
              className="item active"
              onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'studyload'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a
              id="studyload"
              className="item active"
              onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'profession'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a
              id="profession"
              className="item active"
              onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'profchair'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a
              id="profchair"
              className="item active"
              onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    } else if (
      this.state.activeMenu === 'FSR' &&
      this.state.subMenu === 'consultationhours'
    ) {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a
              id="consultation"
              className="item active"
              onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a id="subjects" className="item" onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
          <Modal
            size={this.state.size}
            open={this.state.open}
            onClose={this.close}
            style={{ marginTop: '18%', marginLeft: '40%' }}>
            <Modal.Header>APPROVE FSR</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to approve this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Yes"
              />
            </Modal.Actions>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <div className="ui blue inverted huge menu div1">
            <a className="item" id="profile" onClick={this.handleChange}>
              Profile
            </a>
            <a className="active item" id="FSR" onClick={this.handleChange}>
              FSR
            </a>
            <div className="right menu">
              <label className="ui item">
                Logged in as {this.state.username}
                <i className="user circle icon" />
              </label>
              <GenericLogout {...this.props} />
            </div>
          </div>
          <div className="ui large inverted blue vertical menu flex-container large navDiv">
            <a id="teachingload" className="item" onClick={this.handleSubmenus}>
              Teaching Load
            </a>
            <a id="publications" className="item" onClick={this.handleSubmenus}>
              Publications
            </a>
            <a id="adminwork" className="item" onClick={this.handleSubmenus}>
              Administrative Work
            </a>
            <a id="extension" className="item" onClick={this.handleSubmenus}>
              Extension and Community Service
            </a>
            <a id="studyload" className="item" onClick={this.handleSubmenus}>
              Study Load
            </a>
            <a id="profession" className="item" onClick={this.handleSubmenus}>
              Limited Practice of Profession
            </a>
            <a id="profchair" className="item" onClick={this.handleSubmenus}>
              Professorial Chair
            </a>
            <a id="consultation" className="item" onClick={this.handleSubmenus}>
              Consultation Hours
            </a>
            <div className="ui inverted horizontal divider" />
            <a
              id="subjects"
              className="item active"
              onClick={this.handleSubmenus}>
              Subjects
            </a>
            <div className="ui inverted horizontal divider" />
            <SendtoAdmin {...this.props} empid={this.state.emp_id} />
          </div>
        </div>
      );
    }
  }
}
