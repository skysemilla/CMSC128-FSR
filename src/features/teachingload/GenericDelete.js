import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';

export default class GenericDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      data:[]
    };
    this.startDelete = this.startDelete.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.updateUnits=this.updateUnits.bind(this);
  }

  state = { open: false };

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  startEdit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.editURL,
      state: { id: this.props.id }
    });
    this.props.history.push(this.props.editURL, { id: this.props.id });
  }

  componentDidMount() {
    if (typeof this.props.history !== 'undefined') {
      this.setState({ id: this.props.id });
      console.log(this.props.id);
    }
  }

  updateUnits(e){
    var tlcm=0;
    var tlc=0;
    console.log(this.state.id);
    console.log(this.props.id);
    Api.getSubjectByTeachId({
      teachingload_id:this.props.id
    }).then(response => {
      if (response.data.data !== undefined) {
        this.setState({ data: response.data.data });
         if(response.data.data.isLecture===0 && response.data.data.isGraduate===0){
          tlcm=1.5;
        } else if(response.data.data.isLecture===1 && response.data.data.isGraduate===0){
          if(response.data.data.no_of_students<=40) tlcm=tlc;
          else if(response.data.data.no_of_students>40) tlcm=tlc*((response.data.data.no_of_students-40)/120 + 1);
          else if(response.data.data.no_of_students>160) tlcm=tlc*2;
        } else if(response.data.data.subject_code.toLowerCase().replace(" ", "")==="cmsc190"){
          tlcm=tlc*(response.data.data.no_of_students)*(0.5/3);
        } else if(response.data.data.subject_code.toLowerCase().replace(" ", "")==="it1" && response.data.data.no_of_students>=25){ //it1 && lecture && 25 or more studs
          tlcm*=1.33
        } else if(response.data.data.isGraduate===1){
          if(response.data.data.no_of_students<=4) tlcm=tlc;
          else if (response.data.data.no_of_students>4 && response.data.data.no_of_students<=9) tlcm=tlc*1.25;
          else if(response.data.data.no_of_students>9) tlcm=tlc*1.5;
        }

        Api.editRemoveTeachLoadUnits({
          units:tlcm
        }).catch(e=>alert('Error units'));
        console.log("TLCM: "+tlcm);
      } else console.log("WALA");
    });
  }//end of update units

  startDelete(e) {
    this.updateUnits();
    Api.deleteTeachLoad({
      teachingload_id: this.props.id
    })
      .then(result => {
        window.location.reload();
        alert('Successfully deleted!');
      })
      .catch(e => alert('Error deleting row!'));
    this.props.history.push(this.props.deleteURL, { id: this.props.id });
    this.close();
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
