import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../api';

export default class GenericDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.startEdit = this.startEdit.bind(this);
    this.startDelete = this.startDelete.bind(this);
  }

  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  startEdit(e) {
    e.preventDefault();
    this.props.history.push(this.props.editURL, { id: this.props.id });
  }

  startDelete(e) {
    e.preventDefault();
    if (this.props.label === 'Publication') {
      Api.removePublication({
        id: this.props.id
      })
        .then(result => {
          window.location.reload();
          alert(this.props.label + ' successfully deleted!');
        })
        .catch(e => alert('Error deleting new' + this.props.label + '!'));
      this.close();
    } else if (this.props.label === 'Profession') {
      console.log('XD');
      Api.deleteLimitedPractice({
        limited_practice_id: this.props.id
      })
        .then(result => {
          window.location.reload();
          alert(this.props.label + ' successfully deleted!');
        })
        .catch(e => alert('Error deleting ' + this.props.label + '!'));
      this.close();
    } else if (this.props.label === 'Extension and Community Services') {
      console.log(':-)');
      Api.deleteExtension({
        id: this.props.id
      })
        .then(result => {
          window.location.reload();
          alert('extension successfully deleted');
        })
        .catch(e => alert('Error deleting row!'));
      this.close();
    } else if (this.props.label === 'Administrative Work') {
      console.log(this.props);
      Api.deletePosition({ id: this.props.id });
      this.close();
    } else if (this.props.label === 'Consultation Hours') {
      console.log(this.props);
      Api.deleteConsultation({ id: this.props.id })
        .then(result => {
          alert('Consultation Hours successfully deleted');
          window.location.reload();
        })
        .catch(e => alert('Error deleting row!'));
      this.close();
    }
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
          style={{ marginTop: '18%', marginLeft: '40%' }}>
          <Modal.Header>{this.props.label}</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this {this.props.subLabel}?</p>
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
              onClick={this.startDelete}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
