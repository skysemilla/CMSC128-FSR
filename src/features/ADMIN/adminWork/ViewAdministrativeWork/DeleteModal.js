import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.startEdit = this.startEdit.bind(this);
  }

  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  startEdit(e) {
    e.preventDefault();
    this.props.history.push('../teachingload/edit');
  }

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <button
          className="ui left attached compact icon button"
          onClick={this.startEdit}>
          <i className="edit icon"> </i>
        </button>

        <button
          className="ui right attached compact icon button"
          onClick={this.show('mini')}>
          <i className="trash alternate icon" />
        </button>
        <Modal
          size={size}
          open={open}
          onClose={this.close}
          style={{ marginTop: 300, marginLeft: 650 }}>
          <Modal.Header>Delete Administrative Work</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete Administrative Work?</p>
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
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
