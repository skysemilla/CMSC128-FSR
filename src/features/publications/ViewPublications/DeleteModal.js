import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import * as Api from '../../../api';

export default class DeleteModal extends Component {

  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
      <div>
        <Button onClick={this.show('mini')}><i class="trash alternate icon" /></Button>
        <Modal size={size} open={open} onClose={this.close} style={{marginTop: 300, marginLeft: 650}} >
          <Modal.Header>
            Delete Publication
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this publication?</p>
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
ReactDOM.render(<DeleteModal />, document.getElementById('root'));
