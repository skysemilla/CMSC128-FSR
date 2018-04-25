import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class ViewAttachments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  componentDidMount() {
    if (typeof this.props.history !== 'undefined') {
      this.setState({ id: this.props.id });
    }
  }

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <button className="ui button" onClick={this.show('large')}>
          <i className="eye icon" />
        </button>
        <Modal
          size={size}
          open={open}
          onClose={this.close}
          style={{ marginTop: '15%', marginLeft: '10%' }}>
          <Modal.Header>{this.props.label}</Modal.Header>
          <Modal.Content>
            <p>Attachments for {this.props.subLabel}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              className="right blue botton"
              icon="checkmark"
              labelPosition="right"
              content="Proceed"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
