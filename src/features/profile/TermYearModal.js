import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import GenericDropdown from './../GenericDropdown';
import * as Api from '../../api';

const optionsMain = [
  { id: 0, text: '1st Semester' },
  { id: 1, text: '2nd Semester' }
];

const optionsMain2 = [
  { id: 0, text: '2018' },
  { id: 0, text: '2019' },
  { id: 0, text: '2020' },
  { id: 0, text: '2021' },
  { id: 0, text: '2022' },
  { id: 0, text: '2023' },
  { id: 0, text: '2024' },
  { id: 0, text: '2025' },
  { id: 0, text: '2026' },
  { id: 0, text: '2027' },
  { id: 0, text: '2028' },
  { id: 0, text: '2029' },
  { id: 0, text: '2030' }
];

export default class TermYearModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      year: '',
      open: ''
    };
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  state = { open: false };

  componentDidMount() {
    if (typeof this.props !== 'undefined') {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  handleChangeTerm(e) {
    this.setState({ term: e.target.value });
  }

  handleChangeYear(e) {
    this.setState({ year: e.target.value });
  }

  updateProfile(e) {
    if (this.state.year!=='' && this.state.term!=='') {
      e.preventDefault();
      Api.editTerm({
        empid: this.props.empid,
        year: this.state.year,
        term: this.state.term,
        isnew: this.props.is_new + 1
      }).then(result => {
        this.close();
      });
    }else{
      alert('Invalid input!');
    }
  }

  render() {
    if (this.props.is_new === 0) {
      return (
        <div>
          <Modal
            closeOnDimmerClick={false}
            size={'mini'}
            open={this.state.open}
            onClose={this.close}
            style={{ marginTop: '18%', marginLeft: '40%' }}>
            <Modal.Header>Welcome to STAFS!</Modal.Header>
            <Modal.Content>
              <div>
                <label>
                  <strong>Enter the Current Academic Term and Year!</strong>
                </label>
              </div>
              <div>
                <label>Term:</label>
                    {this.state.term === '' ?
                      (
                        <div className="ui left pointing red basic label">
                          Required
                        </div>
                      ) : (<div></div>)
                    }
                <GenericDropdown
                  labelProper="Select Term"
                  value={this.state.handleChangeTerm}
                  handler={this.handleChangeTerm}
                  options={optionsMain}
                />
                <label>Year:</label>
                {this.state.year === '' ?
                      (
                        <div className="ui left pointing red basic label">
                          Required
                        </div>
                      ) : (<div></div>)
                    }
                <div className="ui input fluid mini focus">
                  <GenericDropdown
                    labelProper="Select Year"
                    value={this.state.handleChangeYear}
                    handler={this.handleChangeYear}
                    options={optionsMain2}
                  />
                </div>
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Proceed"
                onClick={this.updateProfile}
              />
            </Modal.Actions>
          </Modal>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
