import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const activated = {
  value: 'item active'
};
const deactivated = {
  value: 'item'
};

export default class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teachingLoadClass: 'item active',
      publicationsClass: 'item',
      studyLoadClass: 'item',
      extensionClass: 'item',
      consultationClass: 'item',
      professionClass: 'item',
      profChairClass: 'item',
      adminWorkClass: 'item'
    };

    this.activateTeachingLoad = this.activateTeachingLoad.bind(this);
    this.activatePublications = this.activatePublications.bind(this);
    this.activateStudyLoad = this.activateStudyLoad.bind(this);
    this.activateExtension = this.activateExtension.bind(this);
    this.activateConsultation = this.activateConsultation.bind(this);
    this.activateProfession = this.activateProfession.bind(this);
    this.activateProfChair = this.activateProfChair.bind(this);
    this.activateAdminWork = this.activateAdminWork.bind(this);
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
      <div>
        <Divider hidden="true" />
        <div className="ui large inverted blue vertical menu flex-container large navDiv">
          <a
            id="teachingload"
            className={this.state.teachingLoadClass}
            onClick={this.activateTeachingLoad.bind(this)}>
            Teaching Load
          </a>
          <a
            id="publications"
            className={this.state.publicationsClass}
            onClick={this.activatePublications.bind(this)}>
            Publications
          </a>
          <a
            id="studyload"
            className={this.state.studyLoadClass}
            onClick={this.activateStudyLoad}>
            Study Load
          </a>
          <a
            id="extension"
            className={this.state.extensionClass}
            onClick={this.activateExtension}>
            Extension and Community Service
          </a>
          <a
            id="consultation"
            className={this.state.consultationClass}
            onClick={this.activateConsultation}>
            Consultation Hours
          </a>
          <a
            id="profession"
            className={this.state.professionClass}
            onClick={this.activateProfession}>
            Limited Practice of Profession
          </a>
          <a
            id="profchair"
            className={this.state.profChairClass}
            onClick={this.activateProfChair}>
            Professorial Chair
          </a>
          <a
            id="adminwork"
            className={this.state.adminWorkClass}
            onClick={this.activateAdminWork}>
            Administrative Work
          </a>
        </div>
      </div>
    );
  }
}
