import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import GenericDropdown from './../GenericDropdown';
import * as Api from '../../api';
import PublicationSubTypeDropdown from './PublicationSubTypeDropdown';
import NavBar from './../ui/NavBar';

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

// form validation
const error = {
  color: 'red'
};

const errorTexts = [
  <span style={error}> {' is required'}</span>, //0
  <span style={error}> {' number is required'}</span>, //1
  <span style={error}> {' >= 6 characters'}</span>, //2
  <span style={error}> {' <= 16 characters'}</span>, //3
  <span style={error}> {' must be numbers'}</span>, //4
  <span style={error}> {' must contain letters'}</span>, //5
  <span style={error}> {' must be alphanumeric'}</span>, //6
  <span style={error}> {' must be valid'}</span>, //7
  <span style={error}> {' *required'}</span> //8
];

const alphanumRegex = /^[a-zA-Z0-9 ]*[a-zA-Z ][a-zA-Z0-9 ]*$/;
const numRegex = /^[0-9\s\-']+$/;
const creditRegex = /^[0-9]$/;

var formError = {
  bool: {
    researchType: false,
    researchSubtype: false,
    completeTitle: false,
    Role: false,
    Funding: false,
    StartDate: false,
    EndDate: false,
    ApprovedCreditUnits: false
  }
};

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
    this.addCoworker = this.addCoworker.bind(this);
    this.handleChangeFunding = this.handleChangeFunding.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleChangeApprovedCreditUnits = this.handleChangeApprovedCreditUnits.bind(
      this
    );
    this.validateEdit = this.validateEdit.bind(this);
    this.startEdit = this.startEdit.bind(this);
  }

  validateEdit() {
    // check research type
    if (!this.state.researchType) formError.bool.researchType = false;
    else formError.bool.researchType = true;

    // check research subtype
    if (!this.state.researchSubtype) formError.bool.researchSubtype = false;
    else formError.bool.researchSubtype = true;

    // check title
    if (!this.state.completeTitle) formError.bool.completeTitle = false;
    else if (this.state.completeTitle.match(numRegex))
      formError.bool.completeTitle = false;
    else if (!this.state.completeTitle.match(alphanumRegex))
      formError.bool.completeTitle = false;
    else formError.bool.completeTitle = true;

    // check role
    if (!this.state.Role && this.state.researchType === 'Research')
      formError.bool.Role = false;
    else if (
      this.state.Role.match(numRegex) &&
      this.state.researchType === 'Research'
    )
      formError.bool.Role = false;
    else if (
      !this.state.Role.match(alphanumRegex) &&
      this.state.researchType === 'Research'
    )
      formError.bool.Role = false;
    else formError.bool.Role = true;

    // check funding
    if (
      !this.state.Funding &&
      this.state.researchSubtype === 'Research Proposal'
    )
      formError.bool.Funding = false;
    else if (
      this.state.Funding.match(numRegex) &&
      this.state.researchSubtype === 'Research'
    )
      formError.bool.Funding = false;
    else if (
      !this.state.Funding.match(alphanumRegex) &&
      this.state.researchSubtype === 'Research Proposal'
    )
      formError.bool.Funding = false;
    else formError.bool.Funding = true;

    // check start date
    if (
      !this.state.StartDate &&
      this.state.researchSubtype !== 'Research Proposal'
    )
      formError.bool.StartDate = false;
    else formError.bool.StartDate = true;

    // check end date
    if (
      !this.state.EndDate &&
      this.state.researchSubtype !== 'Research Proposal'
    )
      formError.bool.EndDate = false;
    else if (
      this.state.researchSubtype !== 'Research Proposal' &&
      this.state.EndDate <= this.state.StartDate
    )
      formError.bool.EndDate = false;
    else formError.bool.EndDate = true;

    // check approved credit units
    if (!this.state.ApprovedCreditUnits)
      formError.bool.ApprovedCreditUnits = false;
    else if (!this.state.ApprovedCreditUnits.toString().match(numRegex))
      formError.bool.ApprovedCreditUnits = false;
    else formError.bool.ApprovedCreditUnits = true;

    if (
      formError.bool.researchType &&
      formError.bool.researchSubtype &&
      formError.bool.completeTitle &&
      formError.bool.Role &&
      formError.bool.Funding &&
      formError.bool.StartDate &&
      formError.bool.EndDate &&
      formError.bool.ApprovedCreditUnits
    ) {
      this.startEdit();
    }
    this.forceUpdate();
  }

  componentDidMount() {
    if (this.props.history.location.state === undefined)
      this.props.history.push('/publications/view');
    else {
      Api.getSession().then(res => {
        if (res.data.data !== null) {
          if (typeof this.props.history !== 'undefined') {
            Api.viewOnePublication({
              id: this.props.history.location.state.id
            })
              .then(result => {
                this.setState({
                  researchType: result.data.data[0].category,
                  researchSubtype: result.data.data[0].subcategory,
                  completeTitle: result.data.data[0].title,
                  Role: result.data.data[0].role,
                  Funding: result.data.data[0].funding,
                  StartDate: result.data.data[0].start_date,
                  EndDate: result.data.data[0].end_date,
                  ApprovedCreditUnits: result.data.data[0].credit_units
                });
              })
              .catch(err => alert('Error loading pub!'));
          }

          Api.viewEmployeeCoworkers({ empid: res.data.data.emp_id })
            .then(result => {
              this.setState({ posCoworkers: result.data.data });
            })
            .catch(err => alert('Error loading Employees!!'));
        }
      });
    }
  }

  handleChangeType(e) {
    this.setState({ researchType: e.target.value });
    if (e.target.value === 'Research') {
      this.setState({ researchSubtype: 'Research Proposal' });
      this.setState({ StartDate: '' });
      this.setState({ EndDate: '' });
    } else {
      this.setState({ researchSubtype: 'Oral/Poster Papers' });
      this.setState({ Funding: '' });
      this.setState({ Role: '' });
    }
  }

  handleChangeSubtype(e) {
    this.setState({ researchSubtype: e.target.value });
    if (
      e.target.value !== 'Research Proposal' &&
      e.target.value !== 'Research Implementation'
    ) {
      this.setState({ Funding: '' });
      this.setState({ Role: '' });
    }
    if (e.target.value !== 'Research Proposal') {
      this.setState({ Funding: '' });
    }
  }

  handleChangeTitle(e) {
    this.setState({ completeTitle: e.target.value });
  }

  handleChangeRole(e) {
    this.setState({ Role: e.target.value });
  }

  addCoworker(e) {
    if (this.state.newCoworkers.includes(e.target.value)) {
      for (var index = 0; index < this.state.newCoworkers.length; index++) {
        if (this.state.newCoworkers[index] === e.target.value)
          this.state.newCoworkers.splice(index, 1);
      }
      this.setState({ newCoworkers: this.state.newCoworkers });
    } else {
      var newArray = this.state.newCoworkers;
      newArray.push(e.target.value);
      this.setState({ newCoworkers: newArray });
    }
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
    // e.preventDefault();

    Api.removeCoworkers({
      id: this.props.history.location.state.id
    }).catch(err => alert('Error removing Coworkers'));

    Api.editPublication({
      credit_units: this.state.ApprovedCreditUnits,
      category: this.state.researchType,
      subcategory: this.state.researchSubtype,
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
        this.props.history.push('./view');
        console.log(result.data);
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
            className="ui piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h2 className="ui blue header">EDIT PUBLICATION</h2>
            </div>
            <Divider hidden="true" />
            <div>
              <GenericDropdown
                labelHeader={
                  !this.state.researchType ? (
                    <div>
                      <span>Publication Type</span>
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span>Publication Type</span>
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    </div>
                  )
                }
                labelProper="Choose Publication Type"
                value={this.state.researchType}
                handler={this.handleChangeType}
                options={optionsMain}
              />
            </div>
            <div>
              <PublicationSubTypeDropdown
                labelHeader={
                  !this.state.researchSubtype ? (
                    <div>
                      <span>Publication Subtype</span>
                      <div className="ui left pointing red basic label">
                        {errorTexts[0]}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <span>Publication Subtype</span>
                      <div className="ui left pointing green basic label">
                        {'is valid!'}
                      </div>
                    </div>
                  )
                }
                value={this.state.researchSubtype}
                handler={this.handleChangeSubtype}
                options={optionsMain}
                research={this.state.researchType}
              />
            </div>
            <p>
              <a className="ui small header">Complete Title</a>
              {!this.state.completeTitle ? (
                <div className="ui left pointing red basic label">
                  {errorTexts[0]}
                </div>
              ) : this.state.completeTitle.match(numRegex) ? (
                <div className="ui left pointing red basic label">
                  {errorTexts[5]}
                </div>
              ) : !this.state.completeTitle.match(alphanumRegex) ? (
                <div className="ui left pointing red basic label">
                  {errorTexts[6]}
                </div>
              ) : (
                <div className="ui left pointing green basic label">
                  {' is valid!'}
                </div>
              )}
              <div className="ui input fluid mini focus">
                <input
                  type="text"
                  onChange={this.handleChangeTitle}
                  value={this.state.completeTitle}
                />
              </div>
            </p>

            {this.state.researchType !== 'Research' ? (
              <p>
                <a className="ui small header"> Role </a>
                <div className="ui input fluid mini focus">
                  <input
                    disabled
                    type="text"
                    onChange={this.handleChangeRole}
                    value={this.state.Role}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a className="ui small header"> Role </a>
                {!this.state.Role ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[0]}
                  </div>
                ) : this.state.Role.match(numRegex) ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[5]}
                  </div>
                ) : !this.state.Role.match(alphanumRegex) ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[6]}
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    {'is valid!'}
                  </div>
                )}
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    onChange={this.handleChangeRole}
                    value={this.state.Role}
                  />
                </div>
              </p>
            )}

            <a className="ui small header"> Co-workers </a>
            <div className="scrollable">
              {this.state.posCoworkers.map(item => {
                return (
                  <div>
                    <div className="ui checked checkbox">
                      <input
                        type="checkbox"
                        value={item.emp_id}
                        onClick={this.addCoworker}
                      />
                      <label>
                        {item.f_name} {item.l_name}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>

            {this.state.researchSubtype !== 'Research Proposal' ? (
              <p>
                <a className="ui small header"> Funding Agency</a>
                <div className="ui input fluid mini focus">
                  <input
                    disabled
                    type="text"
                    onChange={this.handleChangeFunding}
                    value={this.state.Funding}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a className="ui small header">Funding Agency</a>
                {!this.state.Funding ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[0]}
                  </div>
                ) : this.state.Funding.match(numRegex) ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[5]}
                  </div>
                ) : !this.state.Funding.match(alphanumRegex) ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[6]}
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    {'is valid!'}
                  </div>
                )}
                <div className="ui input fluid mini focus">
                  <input
                    type="text"
                    onChange={this.handleChangeFunding}
                    value={this.state.Funding}
                  />
                </div>
              </p>
            )}

            {this.state.researchSubtype === 'Research Proposal' ? (
              <p>
                <a className="ui small header"> Start Date </a>
                <div className="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeStartDate}
                    value={this.state.StartDate}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a className="ui small header">Start Date</a>
                {!this.state.StartDate ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[0]}
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    {'is valid!'}
                  </div>
                )}
                <div className="ui input fluid mini focus">
                  <input
                    type="date"
                    onChange={this.handleChangeStartDate}
                    value={this.state.StartDate}
                  />
                </div>
              </p>
            )}

            {this.state.researchSubtype === 'Research Proposal' ? (
              <p>
                <a className="ui small header"> End Date </a>
                <div className="ui input fluid mini focus">
                  <input
                    disabled
                    type="date"
                    onChange={this.handleChangeEndDate}
                    value={this.state.EndDate}
                  />
                </div>
              </p>
            ) : (
              <p>
                <a className="ui small header">End Date</a>
                {!this.state.EndDate ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[0]}
                  </div>
                ) : this.state.EndDate <= this.state.StartDate ? (
                  <div className="ui left pointing red basic label">
                    {errorTexts[7]}
                  </div>
                ) : (
                  <div className="ui left pointing green basic label">
                    {'is valid!'}
                  </div>
                )}
                <div className="ui input fluid mini focus">
                  <input
                    type="date"
                    onChange={this.handleChangeEndDate}
                    value={this.state.EndDate}
                  />
                </div>
              </p>
            )}

            <p>
              <a className="ui small header">Approved Credit Units</a>
              {!this.state.ApprovedCreditUnits ? (
                <div className="ui left pointing red basic label">
                  {errorTexts[0]}
                </div>
              ) : !this.state.ApprovedCreditUnits.toString().match(
                creditRegex
              ) ? (
                <div className="ui left pointing red basic label">
                  {errorTexts[4]}
                </div>
              ) : (
                <div className="ui left pointing green basic label">
                  {'is valid!'}
                </div>
              )}
              <div className="ui input fluid mini focus">
                <input
                  type="number"
                  onChange={this.handleChangeApprovedCreditUnits}
                  value={this.state.ApprovedCreditUnits}
                />
              </div>
            </p>

            <div className="ui center aligned container">
              <button className="ui blue button">Upload Attachments</button>
              <button className="ui blue button" onClick={this.validateEdit}>
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
