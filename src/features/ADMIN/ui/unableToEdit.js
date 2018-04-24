import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBarAdmin';
import StafLogo from '../../../assets/stafs-with-skydev2.png';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };
  }

  render() {
    return (
      <div classname="App-header">
        <NavBar {...this.props} Label="pending" subLabel="" />
        <div
          className="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <center>
              <h2 className="ui blue header">
                THIS FEATURE IS CURRENTLY UNAVAILABLE.
              </h2>
              <h3>Please check back again at a later time.</h3>
            </center>
          </div>
          <div>
            <Image src={StafLogo} />
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
