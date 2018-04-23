import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

export default class GenericPending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '',
      open: false,
      disabled: this.props.disabled
    };

    this.handleShow = this.handleShow.bind(this);
    this.enableFaculty = this.enableFaculty.bind(this);
    this.disableFaculty = this.disableFaculty.bind(this);
    this.close = this.close.bind(this);
  }

  enableFaculty() {
    Api.enableFaculty({ empid: this.props.id }).then(result => {
      window.location.reload();
    });
    this.close();
  }

  disableFaculty() {
    Api.disableFaculty({ empid: this.props.id }).then(result => {
      window.location.reload();
    });
    this.close();
  }

  handleShow(e) {
    // e.preventDefault();
    this.setState({ size: 'mini' });
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
    //this.setState({activeButton: this.state.activeButton});
  }

  render() {
    return (
      <div>
        {this.state.disabled === 0 ? (
          <div>
            <button className="ui large green button" onClick={this.handleShow}>
              Enable
            </button>
            <Modal
              size={this.state.size}
              open={this.state.open}
              onClose={this.close}
              style={{ marginTop: '18%', marginLeft: '40%' }}>
              <Modal.Header>Enable Faculty?</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to enable this faculty?</p>
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
                  onClick={this.enableFaculty}
                />
              </Modal.Actions>
            </Modal>
          </div>
        ) : (
          <div>
            <button className="ui large red button" onClick={this.handleShow}>
              Disable
            </button>
            <Modal
              size={this.state.size}
              open={this.state.open}
              onClose={this.close}
              style={{ marginTop: '18%', marginLeft: '40%' }}>
              <Modal.Header>Disable Faculty?</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to disable this faculty?</p>
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
                  onClick={this.disableFaculty}
                />
              </Modal.Actions>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}
