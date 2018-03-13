import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Button, Container, Tab, Segment, Image, Label, Icon, Divider, Grid, Menu } from 'semantic-ui-react'
import SignUp from './SignUp';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      activeItem: 'home'
    }
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}){
    this.setState({
      activeItem: name
    });
  }

  render() {
    let pane = null;
    if(this.state.activeItem === 'SignUp'){
      pane = 'SignUp';
    }
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
