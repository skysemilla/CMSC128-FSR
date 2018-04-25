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
      activeButton: ''
    };

    this.rejectFSR = this.rejectFSR.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.startGenerate = this.startGenerate.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.close = this.close.bind(this);
  }

  handleShow(e) {
    this.setState({ size: 'mini' });
    this.setState({ activeButton: e.currentTarget.value });
    this.setState({ open: true });
  }
  close() {
    this.setState({ open: false });
  }

  startEdit(e) {
    this.props.history.push('./../unableToEdit');
  }

  startGenerate() {
    this.close();
    this.props.history.push('../../AAA', { id: this.props.id });
  }

  rejectFSR() {
    Api.rejectFSR({ empid: this.props.id });
    this.close();
    window.location.reload();
  }

  render() {
    return (
      <div className="ui horizontal list">
        <div className="item">
          <button
            className="ui large compact icon button"
            onClick={this.startEdit}>
            <i className="pencil icon"> </i>
          </button>
        </div>
        <div className="item">
          <button
            className="ui large compact icon button"
            value="approve"
            onClick={this.handleShow}>
            <i className="check icon" value="approve" />
          </button>
        </div>
        <div className="item">
          <button
            className="ui large compact icon button"
            value="reject"
            onClick={this.handleShow}>
            <i className="times icon" value="reject" />
          </button>
        </div>
        {this.state.activeButton === 'approve' ? (
          <Modal
            size={this.state.size}
            open={this.state.open}
            onClose={this.close}
            style={{ marginTop: '18%', marginLeft: '40%' }}>
            <Modal.Header>APPROVE FSR</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to approve this FSR?</p>
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
                onClick={this.startGenerate}
              />
            </Modal.Actions>
          </Modal>
        ) : (
          <Modal
            size={this.state.size}
            open={this.state.open}
            onClose={this.close}
            style={{ marginTop: '18%', marginLeft: '40%' }}>
            <Modal.Header>REJECT FSR</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to reject this FSR?</p>
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
                onClick={this.rejectFSR}
              />
            </Modal.Actions>
          </Modal>
        )}
        }
      </div>
    );
  }
}
