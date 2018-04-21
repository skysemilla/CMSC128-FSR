import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

export default class GenericLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.startLogout = this.startLogout.bind(this);
  }

  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  startLogout(e) {
    e.preventDefault();
    Api.logout();
    this.props.history.push('/');
  }

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <a className="ui item" onClick={this.show('mini')}>
          Logout
        </a>

        <Modal
          size={size}
          open={open}
          onClose={this.close}
          style={{ marginTop: '18%', marginLeft: '40%' }}>
          <Modal.Header>{this.props.label}</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to log out?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              No
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
              onClick={this.startLogout}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
