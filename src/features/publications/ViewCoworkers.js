//ADDED THIS PAGE
import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

export default class GenericDelete extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(typeof this.props.Coworkers!=='undefined'){
      return (
        <div class="ui bulleted list">
        {this.props.Coworkers.map((item) =>{
            return(
                  <div class="item">
                        {item.fname} {item.lname}
                  </div>
            )
        })}
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}

//=========================
ReactDOM.render(<GenericDelete />, document.getElementById('root'));
