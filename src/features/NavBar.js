import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    //this.handleChangeType = this.handleChangeType.bind(this);
  }

  render() {

    return (
      <div>
        <div class="ui blue inverted fluid ten item menu">
          <a class="item " href="/profile/view">
            Profile
          </a>
          <a class="item" href="/teachingload/view">
            Teaching Load
          </a>
          <a class="item" href="/publications/view">
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
          <a class="item" href="../..">
            Logout
          </a>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<NavBar />, document.getElementById('root'));
