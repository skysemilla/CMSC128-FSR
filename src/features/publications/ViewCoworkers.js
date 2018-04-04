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
    this.state = {
        toDel: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleDelCowerker = this.handleDelCowerker.bind(this);
  }

  state = { open: false }

  handleShow(e){
    // e.preventDefault();
    this.setState({size: 'mini'}); 
    this.setState({toDel: e.currentTarget.value}); 
    this.setState({ open: true});
    console.log(e.currentTarget.value);
  }

  close = () => this.setState({ open: false })

  handleDelCowerker(e){
        console.log("delete this emp_id: "+this.state.toDel);
  }

  render() {
    const { open, size } = this.state
    if(typeof this.props.Coworkers!=='undefined'){
      return (
        <div class="ui list">
        {this.props.Coworkers.map((item) =>{
            return(
                  <div class="item">
                        {item.fname} {item.lname} 
                        <button class = "ui large compact icon button" value={item.emp_id} onClick={this.handleShow}>
                        <i class="times icon"/>
                        </button>
                        <Modal size={size} open={open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
                        <Modal.Header>
                          Delete Coworker
                        </Modal.Header>
                        <Modal.Content>
                          <p>Are you sure you want to remove this co-worker?</p>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button negative onClick={this.close}>
                            No
                          </Button>
                          <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.handleDelCowerker}/>
                        </Modal.Actions>
                      </Modal>
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
