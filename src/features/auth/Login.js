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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.startLogin = this.startLogin.bind(this);
  }

  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  startLogin(e) {
    e.preventDefault();
    Api.login({
      username: this.state.username,
      password: this.state.password
    })
      .then(result => {
        this.setState({ type: result.data.data.type });
        if (this.state.type === 'ADMIN') {
          this.props.history.push('./teachingload/add');
        } else if (this.state.type === 'USER') {
          this.props.history.push('./studyload/add');
        }
      })
      .catch(e => alert('Wrong Credentials!'));
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
                <Header as="h3"> Username </Header>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={this.state.fname}
                  onChange={this.handleChangeUsername}
                />
                <Header as="h3"> Password </Header>
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
                  onClick={this.startLogin}>
                  {' '}
                  Login{' '}
                </Button>
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
