import React, { Component } from 'react';
import {
  Header,
  Button,
  Grid,
  Form,
  Image,
  Segment,
  Message,
  Divider
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

// form validation
const error = {
  color: 'red'
};

var messageClass = 'ui negative message';

const errorTexts = [
  <span style={error}> {' is required'}</span>,
  <span style={error}> {' >= 6 characters'}</span>,
  <span style={error}> {' <= 16 characters'}</span>,
  <span style={error}> {' must be alphanumeric'}</span>,
  <span style={error}> {' must be valid'}</span>,
  <div className={messageClass}>
    <p>
      <span style={error}>
        <center>{'Wrong Credentials!'}</center>
      </span>
    </p>
  </div>,
  <div className={messageClass}>
    <p>
      <span style={error}>
        <center>{'This account is disabled'}</center>
      </span>
    </p>
  </div>
];

const alphanumRegex = /^[A-Za-z0-9]+$/;
const passRegex = /^[A-Za-z0-9\-_.]+$/;

var formValid = {
  userValid: false,
  passValid: false
};

var errorCredMessage = <div />;
var apiDidThen = false;
var fetchDiv = (
  <div className="ui active inverted dimmer">
    <div className="ui indeterminate text loader">Loading Session Info</div>
  </div>
);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      type: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.startLogin = this.startLogin.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  componentDidMount() {
    errorCredMessage = <div />;
    this.forceUpdate();
    setTimeout(
      Api.getSession().then(result => {
        if (result.data.data !== null) {
          Api.getEmployeeData({ empid: result.data.data.emp_id }).then(res => {
            if (res.data.data.is_active === 1) {
              this.setState({ type: res.data.data.type });
              if (this.state.type === 'ADMIN') {
                this.props.history.push('/admin/ViewAllFaculty');
              } else if (this.state.type === 'FACULTY') {
                this.props.history.push('/profile');
              }
            } else {
              errorCredMessage = errorTexts[6];
              this.forceUpdate();
            }
          });
        }
        fetchDiv = <div />;
        this.forceUpdate();
      }),
      2000
    );
    this.forceUpdate();
  }

  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  startLogin() {
    Api.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(result => {
        apiDidThen = true;
        if (result.data.data.is_active === 1) {
          this.setState({ type: result.data.data.type });
          if (this.state.type === 'ADMIN') {
            this.props.history.push('/admin/ViewAllFaculty');
          } else if (this.state.type === 'FACULTY') {
            this.props.history.push('/profile');
          }
        } else {
          errorCredMessage = errorTexts[6];
          this.forceUpdate();
        }
      })
      .catch(error => {
        if (!apiDidThen) {
          errorCredMessage = errorTexts[5];
          this.forceUpdate();
        }
      });
  }

  checkLogin(e) {
    e.preventDefault();
    errorCredMessage = <div />;
    // username validate
    if (!this.state.username) formValid.userValid = false;
    else if (!this.state.username.match(alphanumRegex))
      formValid.userValid = false;
    else formValid.userValid = true;

    // password validate
    if (!this.state.password) formValid.passValid = false;
    else if (this.state.password.length < 6) formValid.passValid = false;
    else if (this.state.password.length > 16) formValid.passValid = false;
    else if (!this.state.password.match(passRegex)) formValid.passValid = false;
    else formValid.passValid = true;

    // check validataion
    if (formValid.userValid && formValid.passValid) {
      this.startLogin();
    } else this.forceUpdate();
  }

  render() {
    return (
      <div className="App-header">
        <div className="ui blue inverted menu">
          <a className="item">
            <h1 className="ui white inverted header">
              <Image src={require('./sample-logo-2.jpg')} />
              STAFS
            </h1>
          </a>
        </div>
        <style>
          {' '}
          {`body > div,body > div > div,body > div > div > div.login-form {height: 100%;}`}{' '}
        </style>
        <Divider hidden={true} />
        <Divider hidden={true} />
        <Divider hidden={true} />
        <Divider hidden={true} />
        <Divider hidden={true} />
        <Grid
          container
          columns={2}
          verticalAlign="middle"
          style={{ height: '70%' }}>
          <Grid.Column />
          <Grid.Column style={{ maxWidth: 450 }} floated="center">
            <Header as="h2" color="blue" textAlign="center">
              {' '}
              LOG IN
            </Header>
            {fetchDiv}
            <Form size="large">
              <Segment stacked>
                <div>
                  <Header as="h3">
                    {' '}
                    <span>Username</span>{' '}
                    {!this.state.username ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    ) : !this.state.username.match(alphanumRegex) ? (
                      <div className="ui left pointing red basic label">
                        {errorTexts[3]}
                      </div>
                    ) : (
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    )}
                  </Header>

                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    value={this.state.fname}
                    onChange={this.handleChangeUsername}
                  />
                </div>
                <Header as="h3">
                  {' '}
                  <span>Password</span>{' '}
                  {!this.state.password ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[0]}
                    </div>
                  ) : this.state.password.length < 6 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[1]}
                    </div>
                  ) : this.state.password.length > 16 ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[2]}
                    </div>
                  ) : !this.state.password.match(passRegex) ? (
                    <div className="ui left pointing red basic label">
                      {errorTexts[4]}
                    </div>
                  ) : (
                    <div className="ui left pointing green basic label">
                      {'is valid!'}
                    </div>
                  )}
                </Header>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.fname}
                  onChange={this.handleChangePassword}
                />

                <Button
                  color="blue"
                  fluid
                  size="medium"
                  onClick={this.checkLogin}>
                  {' '}
                  Login{' '}
                </Button>
                {errorCredMessage}
              </Segment>
            </Form>
            <Message attached="bottom">
              <Header as="h4" textAlign="center">
                <a href="/signup"> Don't have an account yet? Sign up here </a>
              </Header>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
