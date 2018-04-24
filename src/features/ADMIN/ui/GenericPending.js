import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class GenericPending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: '',
      open: false,
      activeButton: ''
    };

    this.startEdit = this.startEdit.bind(this);
    this.startGenerate = this.startGenerate.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.close = this.close.bind(this);
  }

  handleShow(e){
    // e.preventDefault();
    this.setState({size: 'mini'}); 
    this.setState({activeButton: e.currentTarget.value}); 
    this.setState({ open: true});
    console.log(e.currentTarget.value);
  }
  close(){ 
    this.setState({ open: false});
    //this.setState({activeButton: this.state.activeButton});
  }

  startEdit(e) {
    // e.preventDefault();
    this.props.history.push('./../unableToEdit');
    //this.props.history.push('../../admin/editFSR/teachingload/view');
  }

  startGenerate(){
    this.close();
    this.props.history.push('../../AAA', { id: this.props.id });
    // console.log(this.props.id);
    // var printWindow = window.open( "/AAA", 'print', 'left=200, top=200, width=950, height=500, toolbar=0, resizable=0');
    // printWindow.addEventListener('load', function(){
    //     printWindow.print();
    //     printWindow.close();
    // }, true);
  }

  render() {
    return (
      <div className="ui horizontal list">
        <div className="item">
        <button className="ui large compact icon button" onClick={this.startEdit}>
          <i className="pencil icon"> </i>
        </button>
        </div>
        <div className="item">
          <button className = "ui large compact icon button" value="del" onClick={this.handleShow}>
          <i className="trash alternate icon" value="del"/>
          </button>
        </div>
        <div className="item">
          <button className = "ui large compact icon button" value="approve" onClick={this.handleShow}>
          <i className="check icon" value="approve"/>
          </button>
        </div>
        <div className="item">
          <button className = "ui large compact icon button" value="reject" onClick={this.handleShow}>
          <i className="times icon" value="reject"/>
          </button>
        </div>
        {this.state.activeButton === 'del' ?
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              DELETE FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>
        :this.state.activeButton === 'approve' ?
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              APPROVE FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to approve this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>

              <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.startGenerate}/>
            </Modal.Actions>
          </Modal> 
          :
          <Modal size={this.state.size} open={this.state.open} onClose={this.close} style={{marginTop: "18%", marginLeft: "40%"}}>
            <Modal.Header>
              REJECT FSR
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to reject this FSR?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button negative onClick={this.close}>
                No
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content='Yes' />
            </Modal.Actions>
          </Modal>}
        }
      </div>
    )
  }
}