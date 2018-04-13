import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../api';

export default class GenerateFSR extends Component {
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
        <button class="ui right floated blue button" onClick={this.show('mini')}>Generate FSR</button>
        <Modal size={size} open={open} onClose={this.close} style={{marginTop: 300, marginLeft: 650}} >
          <Modal.Header>
            Generate FSR
          </Modal.Header>
          <Modal.Content>
            <center>
            <p>Enter school year and semester:
                  <div class="ui input mini focus">
                    <input
                      type="text"
                      style={{ width: '200px' }}
                    />
                </div>
            </p>
            </center>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Generate' />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

//=========================
ReactDOM.render(<GenerateFSR />, document.getElementById('root'));
