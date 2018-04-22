import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../api';
import ReactDOM from 'react-dom';

export default class SendtoAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { emp_id: '', open: false };
  }

  componentDidMount() {
    Api.getSession().then(result => {
      if (result.data.data !== null) {
        Api.getEmployeeData({ empid: result.data.data.emp_id }).then(res => {
          this.setState({
            emp_id: res.data.data.emp_id
          });
        });
      }
    });
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });
  send = () => {
    Api.sendToAdmin({ empid: this.state.emp_id }).then(
      this.close(),
      this.props.history.push('/profile')
    );
  };

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <a class="item" onClick={this.show('mini')}>
          Send to Admin
        </a>
        <Modal
          size={size}
          open={open}
          onClose={this.close}
          style={{ marginTop: 300, marginLeft: 650 }}>
          <Modal.Header>Send to Admin</Modal.Header>
          <Modal.Content>
            <h4>Are you sure you want to send the FSR to the admin?</h4>
            You will be directed to your profile afterwards.
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
              onClick={this.send}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

//=========================
ReactDOM.render(<SendtoAdmin />, document.getElementById('root'));
