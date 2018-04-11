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

export default class AddPublication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posCoworkers: [], //!!!
      researchType: '',
      researchSubtype: '',
      completeTitle: '',
      Role: '',
      Coworkers: [], //!!!
      Funding: 'N/A',
      StartDate: '',
      EndDate: '',
      ApprovedCreditUnits: ''
    };

    this.handleChangePosCoworker = this.handleChangePosCoworker.bind(this); // NEW
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

    this.startAdd = this.startAdd.bind(this);
  }

  handleChangePosCoworker(e) {
    // NEW
    this.setState({ posCoworkers: e.target.value });
  }

  handleChangeType(e) {
    this.setState({ researchType: e.target.value });
    console.log(e.target.value);
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
    if (this.state.Coworkers.includes(e.target.value)) {
      for (var index = 0; index < this.state.Coworkers.length; index++) {
        if (this.state.Coworkers[index] === e.target.value)
          this.state.Coworkers.splice(index, 1);
      }
      this.setState({ Coworkers: this.state.Coworkers });
      console.log('Deleted ' + e.target.value);
    } else {
      var newArray = this.state.Coworkers;
      newArray.push(e.target.value);
      this.setState({ Coworkers: newArray });
      console.log('Added ' + e.target.value);
    }
    console.log(this.state.Coworkers);
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

  componentDidMount = () => {
    // NEW
    //   e.preventDefault();
    Api.viewEmployees({})
      .then(result => {
        this.setState({ posCoworkers: result.data.data });
        console.log(result.data.data);
      })
      .catch(err => alert('Error loading Employees!!'));
    Api.getSession({})
      .then(result => {
        // console.log(result.data.data.emp_id);
        this.setState({ emp_id: result.data.data.emp_id });
      })
      .catch(err => alert('Error getSession'));
  };

  startAdd(e) {
    e.preventDefault();
    Api.addPublication({
      credit_units: this.state.ApprovedCreditUnits,
      category: this.state.researchType,
      funding: this.state.Funding,
      title: this.state.completeTitle,
      role: this.state.Role,
      start_date: this.state.StartDate,
      end_date: this.state.EndDate,
      emp_id: '0000000001'
    })
      .then(result => {
        this.state.Coworkers.map(item => {
          console.log(item);
          Api.addCoworker({
            coworker_id: item,
            publication_id: result.data.data
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
      .catch(e => alert('Error adding new Publication!'));
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
              <h2 class="ui blue header">ADD PUBLICATION</h2>
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
                <input type="text" onChange={this.handleChangeTitle} />
              </div>
            </p>
            {this.state.researchType !== 'Research' ? (
              <p>
                <a class="ui small header"> Role </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="text"
                    onChange={this.handleChangeRole}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a class="ui small header"> Role </a>
                <div class="ui input fluid mini focus">
                  <input type="text" onChange={this.handleChangeRole} />
                </div>
              </p>
            )}
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
            {this.state.researchSubtype !== 'Research Proposal' ? (
              <p>
                <a class="ui small header"> Funding </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="text"
                    onChange={this.handleChangeFunding}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a class="ui small header"> Funding </a>
                <div class="ui input fluid mini focus">
                  <input type="number" onChange={this.handleChangeFunding} />
                </div>
              </p>
            )}

            {this.state.researchSubtype === 'Research Proposal' ? (
              <p>
                <a class="ui small header"> Start Date </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeStartDate}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a class="ui small header"> Start Date </a>
                <div class="ui input fluid mini focus">
                  <input type="date" onChange={this.handleChangeStartDate} />
                </div>
              </p>
            )}

            {this.state.researchSubtype === 'Research Proposal' ? (
              <p>
                <a class="ui small header"> End Date </a>
                <div class="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeEndDate}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a class="ui small header"> End Date </a>
                <div class="ui input fluid mini focus">
                  <input type="date" onChange={this.handleChangeEndDate} />
                </div>
              </p>
            )}

            <p>
              <a class="ui small header"> Approved Credit Units </a>
              <div class="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeApprovedCreditUnits}
                />
              </div>
            </p>

            <div class="ui center aligned container">
              <button class="ui blue button">Upload Attachments</button>
              <button class="ui blue button" onClick={this.startAdd}>
                Add Publication
              </button>
            </div>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
