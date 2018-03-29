import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../api';

export default class SendtoAdmin extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <button class="ui blue button">Edit</button>
        <button class="ui blue button" onClick={this.show('mini')}>Send to Admin</button>
        <Modal size={size} open={open} onClose={this.close} style={{marginTop: 300, marginLeft: 650}} >
          <Modal.Header>
            Send to Admin
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to send the FSR to admin?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

//=========================
ReactDOM.render(<SendtoAdmin />, document.getElementById('root'));
