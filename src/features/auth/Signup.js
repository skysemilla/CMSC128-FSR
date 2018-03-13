import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Form, Button, Container, Tab, Segment, Image, Label, Icon, Divider, Grid, Menu } from 'semantic-ui-react'

class Signup extends Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      fname: '',
      lname: '',
      empid: '',
      college: '',
      dept: ''
    }

    this.handleChangeUsername=this.handleChangeUsername.bind(this);
    this.handleChangePassword=this.handleChangePassword.bind(this);
    this.handleChangeFname=this.handleChangeFname.bind(this);
    this.handleChangeLname=this.handleChangeLname.bind(this);
    this.handleChangeEmpid=this.handleChangeEmpid.bind(this);
    this.handleChangeCollege=this.handleChangeCollege.bind(this);
    this.handleChangeDept=this.handleChangeDept.bind(this);
    this.startSignup=this.startSignup.bind(this);
  }

  handleChangeUsername(e) {
    this.setState({username: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({password: e.target.value});
  }

  handleChangeFname(e) {
    this.setState({fname: e.target.value});
  }

  handleChangeLname(e) {
    this.setState({lname: e.target.value});
  }

  handleChangeEmpid(e) {
    this.setState({empid: e.target.value});
  }

  handleChangeCollege(e) {
    this.setState({college: e.target.value});
  }

  handleChangeDept(e) {
    this.setState({dept: e.target.value});
  }

  startSignup(e) {
    fetch('http://localhost:3000/login/username='+this.state.username+'&password='+this.state.password+'&fname='+this.state.fname+'&lname='+this.state.lname+'&empid='+this.state.empid+'&college='+this.state.college+'&dept='+this.state.dept)
    .then((response)=>{return response.json()})
    .catch((e)=>{console.log(e)})
  }

  render(){
    return(
      <div classname="App-header">
            <div class="ui blue inverted menu">
        <a class="item">
        <h1 class="ui white inverted header">
        <Image src={require('./sample-logo-2.jpg')}/>
          STAFS
        </h1>
        </a>
      </div>
      <Container style={{marginTop: '3%' }}>
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
                  <input type="text" placeholder="First Name" onChange={this.handleChangeFname}/>
                </div>
              </div>
              <div class="field">
                <label>Last Name</label>
                <div class="ui fluid input">
                  <input type="text" placeholder="Last Name" onChange={this.handleChangeLname}/>
                </div>
              </div>
            </div>
            <div class="field">
              <label>Employee Id</label>
              <div class="ui input">
                <input type="text" placeholder="Employee Id" onChange={this.handleChangeEmpid}/>
              </div>
            </div>
            <div class="field">
              <label>College</label>
              <div class="ui input">
                <input type="text" placeholder="College"  onChange={this.handleChangeCollege}/>
              </div>
            </div>
            <div class="field">
              <label>Department</label>
              <div class="ui input">
                <input type="text" placeholder="Department"  onChange={this.handleChangeDept}/>
              </div>
            </div>
            <div class="field">
              <label>Username</label>
              <div class="ui input">
                <input type="text" placeholder="Username"  onChange={this.handleChangeUsername}/>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui input">
                <input type="password" placeholder="Password"  onChange={this.handleChangePassword}/>
              </div>
            </div>
            <button class="ui blue button" role="button" onClick={this.startSignup}>Create an Account</button>
          </form>
          <div class="ui warning bottom attached message">
            <i aria-hidden="true" class="help icon"></i>Already have an account? <a href="/">Click here to Login</a> instead.
          </div>
        </div>
      </Container>
      </div>
    );
  }
}
export default Signup;