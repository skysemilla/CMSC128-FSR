import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Form, Button, Container, Tab, Segment, Image, Label, Icon, Divider, Grid, Menu } from 'semantic-ui-react'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
    return(
      <Container style={{marginTop: '5%' }}>
        <div>
          <div class="ui attached message">
            <div class="content">
              <div class="header">Welcome to our site!</div>
              <p>Fill out the form below to sign-up for a new account</p>
            </div>
          </div>
          <form class="ui form attached fluid segment">
            <div class="equal width fields">
              <div class="field">
                <label>First Name</label>
                <div class="ui fluid input">
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div class="field">
                <label>Last Name</label>
                <div class="ui fluid input">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>
            <div class="field">
              <label>Employee Id</label>
              <div class="ui input">
                <input type="text" placeholder="Employee Id" />
              </div>
            </div>
            <div class="field">
              <label>College</label>
              <div class="ui input">
                <input type="text" placeholder="College" />
              </div>
            </div>
            <div class="field">
              <label>Department</label>
              <div class="ui input">
                <input type="text" placeholder="Department" />
              </div>
            </div>
            <div class="field">
              <label>Username</label>
              <div class="ui input">
                <input type="text" placeholder="Username" />
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui input">
                <input type="password" />
              </div>
            </div>
            <button class="ui blue button" role="button">Submit</button>
          </form>
          <div class="ui warning bottom attached message">
            <i aria-hidden="true" class="help icon"></i>Already have an account? <a href="#">Click here to Login</a> instead.
          </div>
        </div>
      </Container>
    );
  }
}
export default App;
