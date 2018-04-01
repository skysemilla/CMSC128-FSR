import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';
import ViewTeachingLoadRow from './TeachingLoadViewRow';
import GenerateFSR from './../../GenerateFSR'
import SendtoAdmin from './../../SendtoAdmin'
import NavBar from './../ui/NavBarAdmin'

export default class RedirectToTeachingLoad extends Component {
  constructor(props) {
    super(props);

    //this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    //this.props.history.push('../teachingload/view');
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="edit" subLabel="teachingload"/>
      </div>
    );
  }
}
//=========================
ReactDOM.render(<RedirectToTeachingLoad />, document.getElementById('root'));
