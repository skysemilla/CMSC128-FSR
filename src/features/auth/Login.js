import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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

const errorTexts = [
  <span style={error}> {' is required'}</span>,
  <span style={error}> {' >= 6 characters'}</span>,
  <span style={error}> {' <= 16 characters'}</span>,
  <span style={error}> {' must be alphanumeric'}</span>,
  <span style={error}>
    {' '}
    <center>{'Wrong Credentials!'}</center>
  </span>
];

const userRegex = /[A-Za-z0-9]+/;

var formValid = {
  userError: '',
  passError: '',
  userValid: false,
  passValid: false
};

var messageClass = 'ui hidden message';

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
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        this.setState({ type: result.data.data.type });
        if (this.state.type === 'ADMIN') {
          this.props.history.push('/admin/ViewAllFaculty');
        } else if (this.state.type === 'FACULTY') {
          this.props.history.push('./profile');
        }
      }
    });
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
        this.setState({ type: result.data.data.type });
        if (this.state.type === 'ADMIN') {
          this.props.history.push('/admin/ViewAllFaculty');
        } else if (this.state.type === 'FACULTY') {
          this.props.history.push('./profile');
        }
      })
      .catch(
        (messageClass = 'ui negative visible message'),
        this.forceUpdate()
      );
  }

  checkLogin(e) {
    e.preventDefault();
    messageClass = 'ui hidden message';

    // username validate
    if (!this.state.username) {
      formValid.userError = errorTexts[0];
      formValid.userValid = false;
    } else if (!this.state.username.match(userRegex)) {
      formValid.userError = errorTexts[3];
      formValid.userValid = false;
    } else {
      formValid.userError = '';
      formValid.userValid = true;
    }

    // password validate
    if (!this.state.password) {
      formValid.passError = errorTexts[0];
      formValid.passValid = false;
    } else if (this.state.password.length < 6) {
      formValid.passError = errorTexts[1];
      formValid.passValid = false;
    } else if (this.state.password.length > 16) {
      formValid.passError = errorTexts[2];
      formValid.passValid = false;
    } else {
      formValid.passError = '';
      formValid.passValid = true;
    }

    // check validataion
    if (formValid.userValid && formValid.passValid) {
      this.startLogin();
    } else this.forceUpdate();
  }

  render() {
    return (
      <div className="App-header">
        <div class="ui blue inverted menu">
          <a class="item">
            <h1 class="ui white inverted header">
              <Image src={require('./sample-logo-2.jpg')} />
              STAFS
            </h1>
          </a>
        </div>
        <style>
          {' '}
          {`body > div,body > div > div,body > div > div > div.login-form {height: 100%;}`}{' '}
        </style>
        <Divider hidden="true" />
        <Divider hidden="true" />
        <Divider hidden="true" />
        <Divider hidden="true" />
        <Divider hidden="true" />
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
            <Form size="large">
              <Segment stacked>
                <Header as="h3">
                  {' '}
                  <span>Username{formValid.userError}</span>{' '}
                </Header>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={this.state.fname}
                  onChange={this.handleChangeUsername}
                />
                <Header as="h3">
                  {' '}
                  <span>Password{formValid.passError}</span>{' '}
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
                <div class={messageClass}>
                  <p>{errorTexts[4]}</p>
                </div>
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
//=========================
ReactDOM.render(<Login />, document.getElementById('root'));
