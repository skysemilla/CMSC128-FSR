import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown';
import PublicationSubTypeDropdown from './PublicationSubTypeDropdown';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';
import GenericDisabledInput from './../GenericDisabledInput';

const optionsMain = [
  {
    id: 0,
    text: 'Research',
    Subtype: ['Research Proposal', 'Research Implementation']
  },
  {
    id: 1,
    text: 'Creative Work',
    Subtype: [
      'Oral/Poster Papers',
      'Papers for Conferences',
      'Monographs',
      'Articles in referred journals',
      'Chapters in a book',
      'Books',
      'Others'
    ]
  }
];

export default class EditPublication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posCoworkers: [],
      researchType: '',
      researchSubtype: '',
      completeTitle: '',
      Role: '',
      Coworkers: [],
      newCoworkers: [],
      Funding: '',
      StartDate: '',
      EndDate: '',
      ApprovedCreditUnits: ''
    };

    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleChangeSubtype = this.handleChangeSubtype.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.addCoworker = this.addCoworker.bind(this); //!!!
    this.handleChangeFunding = this.handleChangeFunding.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(
      this
    );

    this.startEdit = this.startEdit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.id);
    if (typeof this.props.history !== 'undefined') {
      console.log(this.props.history.location.state.id);
      //Kianaaaa yung piniprint dito yung pub_id HAHAHA
      console.log(this.props.history.location.state.id);
      Api.viewOnePublication({
        id: this.props.history.location.state.id
      })
        .then(result => {
          this.setState({
            researchType: result.data.data[0].category,
            completeTitle: result.data.data[0].title,
            Role: result.data.data[0].role,
            // Coworkers: [],
            Funding: result.data.data[0].funding,
            StartDate: result.data.data[0].start_date,
            EndDate: result.data.data[0].end_date,
            ApprovedCreditUnits: result.data.data[0].credit_units,
            TotalWorkLoadUnits: ''
          });

          Api.getCoworkers({
            id: this.props.history.location.state.id
          })
            .then(result => {
              console.log(result.data.data);
              result.data.data.map(item => {
                console.log(item.emp_id);
                this.state.Coworkers.push(item.emp_id);
              });
              console.log(this.state.Coworkers);
            })
            .catch(err => alert('Error loading coworkers!!'));

          // get coworkers for this publication HERE

          console.log(result.data.data[0]);
        })
        .catch(err => alert('Error loading pub!'));
    }
    //   e.preventDefault();
    Api.viewEmployees({})
      .then(result => {
        this.setState({ posCoworkers: result.data.data });
        console.log(result.data.data);
      })
      .catch(err => alert('Error loading Employees!!'));
  }

  handleChangeType(e) {
    this.setState({ researchType: e.target.value });
  }

  handleChangeSubtype(e) {
    this.setState({ researchSubtype: e.target.value });
  }

  handleChangeTitle(e) {
    this.setState({ completeTitle: e.target.value });
  }

  handleChangeRole(e) {
    this.setState({ Role: e.target.value });
  }

  addCoworker(e) {
    //!!!
    if (this.state.newCoworkers.includes(e.target.value)) {
      for (var index = 0; index < this.state.newCoworkers.length; index++) {
        if (this.state.newCoworkers[index] === e.target.value)
          this.state.newCoworkers.splice(index, 1);
      }
      this.setState({ newCoworkers: this.state.newCoworkers });
      console.log('Deleted ' + e.target.value);
    } else {
      var newArray = this.state.newCoworkers;
      newArray.push(e.target.value);
      this.setState({ newCoworkers: newArray });
      console.log('Added ' + e.target.value);
    }
    console.log(this.state.newCoworkers);
  }

  handleChangeFunding(e) {
    this.setState({ Funding: e.target.value });
  }

  handleChangeStartDate(e) {
    this.setState({ StartDate: e.target.value });
  }

  handleChangeEndDate(e) {
    this.setState({ EndDate: e.target.value });
  }

  handleChangeApprovedCreditUnits(e) {
    this.setState({ ApprovedCreditUnits: e.target.value });
  }

  startEdit(e) {
    e.preventDefault();
    console.log(this.state);
    // remove prev coworkers here
    Api.removeCoworkers({
      id: this.props.history.location.state.id
    })
      .then(result => alert('successfully Deleted Coworkers'))
      .catch(err => alert('Error removing Coworkers'));

    Api.editPublication({
      credit_units: this.state.ApprovedCreditUnits,
      category: this.state.researchType,
      funding: this.state.Funding,
      title: this.state.completeTitle,
      role: this.state.Role,
      start_date: this.state.StartDate,
      end_date: this.state.EndDate,
      publication_id: this.props.history.location.state.id
    })
      .then(result => {
        this.state.newCoworkers.map(item => {
          console.log(item);
          Api.addCoworker({
            coworker_id: item,
            publication_id: this.props.history.location.state.id
          })
            .then(res => {
              console.log('Successfully Added Coworker');
            })
            .catch(err => alert('Error adding Coworker'));
        });
        this.props.history.push('./view'); //change to profile later!!
        console.log(result.data);
        alert('Publication successfully added!');
      })
      .catch(e => alert('Error editing Publication!'));
  }

  render() {
    return (
      <div className="App-header">
        <div>
          <NavBar {...this.props} Label="FSR" subLabel="publications" />
        </div>
        <div className="bodyDiv">
          <div
            class="ui piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h2 class="ui blue header">EDIT PUBLICATION</h2>
            </div>
            <Divider hidden="true" />
            <div>
              <GenericDropdown
                labelHeader="Publication Type"
                labelProper="Choose Publication Type"
                value={this.state.researchType}
                handler={this.handleChangeType}
                options={optionsMain}
              />
            </div>
            <div>
              <PublicationSubTypeDropdown
                value={this.state.researchSubtype}
                handler={this.handleChangeSubtype}
                options={optionsMain}
                research={this.state.researchType}
              />
            </div>
            <p>
              <a class="ui small header"> Complete Title </a>
              <div class="ui input fluid mini focus">
                <input
                  type="text"
                  onChange={this.handleChangeTitle}
                  placeHolder={this.state.completeTitle}
                />
              </div>
            </p>
            <GenericDisabledInput
              compareState={this.state.researchType}
              compareString="Research"
              operation="!=="
              label="Role"
              type="text"
              handler={this.handleChangeRole}
            />
            <p>
              <a class="ui small header"> Co-workers </a>
              {this.state.posCoworkers.map(item => {
                return (
                  <p>
                    <div class="ui checked checkbox">
                      <input
                        type="checkbox"
                        value={item.emp_id}
                        onClick={this.addCoworker}
                      />
                      <label>
                        {item.f_name} {item.l_name}
                      </label>
                    </div>
                  </p>
                );
              })}
            </p>
            <GenericDisabledInput
              compareState={this.state.researchSubtype}
              compareString="Research Proposal"
              operation="!=="
              label="Funding"
              type="text"
              handler={this.handleChangeFunding}
              placeHolder={this.state.Funding}
            />

            <GenericDisabledInput
              compareState={this.state.researchSubtype}
              compareString="Research Proposal"
              operation="==="
              label="Start Date"
              type="date"
              handler={this.handleChangeStartDate}
              placeHolder={this.state.StartDate}
            />

            <GenericDisabledInput
              compareState={this.state.researchSubtype}
              compareString="Research Proposal"
              operation="==="
              label="End Date"
              type="date"
              handler={this.handleChangeEndDate}
              placeHolder={this.state.EndDate}
            />

            <p>
              <a class="ui small header"> Approved Credit Units </a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeApprovedCreditUnits}
                  placeHolder={this.state.ApprovedCreditUnits}
                />
              </div>
            </p>

            <div class="ui center aligned container">
              <button class="ui blue button">Upload Attachments</button>
              <button class="ui blue button" onClick={this.startEdit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
