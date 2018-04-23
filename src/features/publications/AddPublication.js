import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import GenericDropdown from './../GenericDropdown';
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

export default class AddPublication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posCoworkers: [],
      researchType: '',
      researchSubtype: '',
      completeTitle: '',
      Role: '',
      Coworkers: [],
      Funding: 'N/A',
      StartDate: '',
      EndDate: '',
      ApprovedCreditUnits: ''
    };
    this.handleChangePosCoworker = this.handleChangePosCoworker.bind(this);
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
    this.validateAdd = this.validateAdd.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }

  handleChangePosCoworker(e) {
    this.setState({ posCoworkers: e.target.value });
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

  addCoworker(e) {
    if (this.state.Coworkers.includes(e.target.value)) {
      for (var index = 0; index < this.state.Coworkers.length; index++) {
        if (this.state.Coworkers[index] === e.target.value)
          this.state.Coworkers.splice(index, 1);
      }
      this.setState({ Coworkers: this.state.Coworkers });
    } else {
      var newArray = this.state.Coworkers;
      newArray.push(e.target.value);
      this.setState({ Coworkers: newArray });
    }
  }

  validateAdd() {
    // e.preventDefault();
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
    else if (!this.state.ApprovedCreditUnits.match(numRegex))
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
      this.startAdd();
    }

    this.forceUpdate();
  }

  componentDidMount = () => {
    //   e.preventDefault();
    Api.getSession().then(res => {
      if (res.data.data !== null) {
        Api.viewEmployeeCoworkers({ empid: res.data.data.emp_id })
          .then(result => {
            this.setState({ posCoworkers: result.data.data });
          })
          .catch(err => alert('Error loading Employees!!'));
        Api.getSession({})
          .then(result => {
            this.setState({ emp_id: res.data.data.emp_id });
          })
          .catch(err => alert('Error getSession'));
      }
    });
  };

  startAdd(e) {
    // e.preventDefault();
    Api.addPublication({
      credit_units: this.state.ApprovedCreditUnits,
      category: this.state.researchType,
      subcategory: this.state.researchSubtype,
      funding: this.state.Funding,
      title: this.state.completeTitle,
      role: this.state.Role,
      start_date: this.state.StartDate,
      end_date: this.state.EndDate,
      emp_id: this.state.emp_id
    })
      .then(result => {
        this.state.Coworkers.map(item => {
          Api.addCoworker({
            coworker_id: item,
            publication_id: result.data.data
          })
            .then(res => {
              console.log('Successfully Added Coworker');
            })
            .catch(err => alert('Error adding Coworker'));
        });
        this.props.history.push('./view');
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
            className="ui piled very padded text left aligned container segment mainDiv"
            color="teal">
            <div>
              <h2 className="ui blue header">ADD PUBLICATION</h2>
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
                <input type="text" onChange={this.handleChangeTitle} />
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
                  <input type="text" onChange={this.handleChangeRole} />
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
                  />
                </div>
              </p>
            ) : (
              <p>
                <a className="ui small header">Funding Agency</a>
                {!this.state.Funding || this.state.Funding === 'N/A' ? (
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
                  <input type="text" onChange={this.handleChangeFunding} />
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
                  <input type="date" onChange={this.handleChangeStartDate} />
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
                  <input type="date" onChange={this.handleChangeEndDate} />
                </div>
              </p>
            )}
            <p>
              <a className="ui small header">Approved Credit Units</a>
              {!this.state.ApprovedCreditUnits ? (
                <div className="ui left pointing red basic label">
                  {errorTexts[0]}
                </div>
              ) : !this.state.ApprovedCreditUnits.match(creditRegex) ? (
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
                  min="0"
                  onChange={this.handleChangeApprovedCreditUnits}
                />
              </div>
            </p>
            <div className="ui center aligned container">
              <button className="ui blue button">Upload Attachments</button>
              <button className="ui blue button" onClick={this.validateAdd}>
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
