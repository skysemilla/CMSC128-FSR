import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import SendToAdmin from './../SendtoAdmin';

const dummySample = {
  fname: 'Jasper',
  mname: '123',
  lname: 'Arquilita',
  empid: '1',
  college: 'CAS',
  dept: 'ICS',
  emptype: 'Faculty',
  email: 'jasarqui123@up.edu.ph'
};

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ data: result.data.data });
        console.log(result.data.data);
      }
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push('./profile/edit');
  }

  render() {
    if (this.state.data === '') {
      return <div />;
    } else {
      return (
        <div classname="App-header">
          <NavBar {...this.props} Label="beingapproved" subLabel=""/>
          <div
            class="ui piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h2 class="ui blue header">
                YOUR FSR IS CURRENTLY BEING APPROVED BY THE FACULTY.
              </h2>
              <h3>You cannot edit your FSR at this time.</h3>
            </div>
          </div>
          <Divider hidden="true" />
        </div>
      );
    }
  }
}
