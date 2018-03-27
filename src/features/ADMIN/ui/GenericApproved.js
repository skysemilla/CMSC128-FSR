import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

export default class GenericApproved extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.startView = this.startView.bind(this);
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  startView(e) {
    // e.preventDefault();
    // this.props.history.push(); //view FSR
  }

  render() {
    const { open, size } = this.state

    return (
      <div class="ui horizontal list">
      <div class="item">
        <button class="ui large compact icon button" onClick={this.startView}>
          <i class="eye icon"> </i>
        </button>
      </div>
      <div class="item">
        <button class = "ui large compact icon button" onClick={this.show('mini')}>
        <i class="trash alternate icon" />
        </button>
        <Modal size={size} open={open} onClose={this.close} style={{marginTop: 300, marginLeft: 650}} >
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
      </div>
      </div>
    )
  }
}

//=========================
ReactDOM.render(<GenericApproved />, document.getElementById('root'));
