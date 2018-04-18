import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

export default class GenericPending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      open: false,
      activeButton: ''
    };

    this.startEdit = this.startEdit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.close = this.close.bind(this);
  }

  handleShow(e){
    // e.preventDefault();
    this.setState({size: 'mini'}); 
    this.setState({activeButton: e.currentTarget.value}); 
    this.setState({ open: true});
    console.log(e.currentTarget.value);
  }
  close(){ 
    this.setState({ open: false});
    //this.setState({activeButton: this.state.activeButton});

  }

  startEdit(e) {
    // e.preventDefault();
    // this.props.history.push(); //view FSR
    this.props.history.push('../../admin/editFSR/teachingload/view');
  }

  render() {
    return (
      <div class="ui horizontal list">
        <div class="item">
        <button class="ui large compact icon button" onClick={this.startEdit}>
          <i class="pencil icon"> </i>
        </button>
        </div>
        <div class="item">
          <button class = "ui large compact icon button" value="del" onClick={this.handleShow}>
          <i class="trash alternate icon" value="del"/>
          </button>
        </div>
        <div class="item">
          <button class = "ui large compact icon button" value="approve" onClick={this.handleShow}>
          <i class="check icon" value="approve"/>
          </button>
        </div>
        <div class="item">
          <button class = "ui large compact icon button" value="reject" onClick={this.handleShow}>
          <i class="times icon" value="reject"/>
          </button>
        </div>
        {this.state.activeButton === 'del' ?
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              DELETE FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>
        :this.state.activeButton === 'approve' ?
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              APPROVE FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to approve this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal> 
          :
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              REJECT FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to reject this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>}
        }
      </div>
    )
  }
}
