import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';

export default class ViewProfession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      permission: '',
      date: '',
      emp_id: ''
    };

    this.startEdit = this.startEdit.bind(this);
  }

  componentDidMount = () => {
        // Api.getSession().then(res => {
        //   if (res.data.data !== null) {
        //     Api.viewLimitedPractice({ emp_id: res.data.data.emp_id }).then(result => {
        //       if (result.data.data !== null) {
        //         console.log({data: result.data.data[0]})
        //         this.setState({ data: result.data.data});
        //       }
        //     });
        //   }
        // });
  };

  startEdit() {
    this.props.history.push('./edit');
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="profession" />
        </div>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <Divider hidden="true"/>
        <div className="bodyDiv">
          <div
            className="ui compact piled very padded text left aligned container segment"
            color="teal">
            <div>
              <h1 className="ui blue header">LIMITED PRACTICE OF PROFESSION</h1>
            </div>
            <div className="ui list">
              <div className="item">
                <b>
                  <i className="right triangle icon" />Have you applied for official permission for limited practice of profession?{' '}
                </b>
                {this.state.permission === '1'?
                    "Yes"
                :
                    "No"
                }
              </div>
              <div className="item">
                <b>
                  <i className="right triangle icon" />Date submitted:{' '}
                </b>
                {this.state.date}
              </div>
            </div>
            <Divider hidden="true" />
            <div>
              <button
                className="ui right floated blue button"
                onClick={this.startEdit}>
                Edit Limited Practice of Profession
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
