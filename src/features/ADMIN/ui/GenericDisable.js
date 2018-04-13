import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../../api';

export default class GenericPending extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.disabled);

    this.state = {
      size: '',
      open: false,
      disabled: this.props.disabled
    };

    this.handleShow = this.handleShow.bind(this);
    this.close = this.close.bind(this);
  }

  handleShow(e){
    // e.preventDefault();
    this.setState({size: 'mini'});
    this.setState({ open: true});
  }
  close(){ 
    this.setState({ open: false});
    //this.setState({activeButton: this.state.activeButton});

  }

  render() {
    return (
      <div>
        {this.state.disabled==='YES'?
        <div>
        <button class="ui large green button" onClick={this.handleShow}>
          Enable
        </button>
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}} >
            <Modal.Header>
              Enable Faculty?
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to enable this faculty?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>
        </div>
        :
        <div>
        <button class="ui large red button" onClick={this.handleShow}>
          Disable
        </button>
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}} >
            <Modal.Header>
              Disable Faculty?
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to disable this faculty?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>
          </div>
        }
      </div>
    )
  }
}

//=========================
ReactDOM.render(<GenericPending />, document.getElementById('root'));
