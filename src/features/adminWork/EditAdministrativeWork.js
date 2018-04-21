import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import NavBar from './../ui/NavBar';
import GenerateFSR from './../GenerateFSR';
import SendtoAdmin from './../SendtoAdmin';


export default class EditAdministrativeWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nature_of_work: '',
      office: '',
      credit_units: 0,
      emp_id: ''
    };

    this.handleChangeNature_of_work = this.handleChangeNature_of_work.bind(this);
    this.handleChangeOffice = this.handleChangeOffice.bind(this);
    this.handleChangeCreditUnits = this.handleChangeCreditUnits.bind(this);
    this.startAdd = this.startAdd.bind(this);
  }
  
  componentDidMount() {
    // Api.getSession().then(result => {
    //   if (result.data.data !== null) {
    //     this.setState({ emp_id: result.data.data.emp_id });
    //     if (typeof this.props.history !== 'undefined') {
    //       Api.viewPosition({
    //         id : this.props.history.location.state.id
    //       })
    //         .then(result => {
    //           this.setState({
    //             emp_id : result.data.data.emp_id,
    //             prev_nature_of_work: result.data.data.nature_of_work,
    //             prev_office: result.data.data.office,
    //             prev_credit_units: result.data.data.credit_units,
    //           });

    //         /*  console.log(result.data.data.emp_id );
    //           if(result.data.data.emp_id == "000000003")
    //           {
    //             console.log("hi" );
    //           }
    //         })*/
    //     }
    //   }
    // });
  }

  handleChangeNature_of_work(e) {
    this.setState({ nature_of_work: e.target.value });
  }
  handleChangeOffice(e) {
    this.setState({ office: e.target.value });
  }
  handleChangeCreditUnits(e) {
    this.setState({ credit_units: e.target.value });
  }

  startAdd(e) {
    e.preventDefault();
    Api.editPosition({
      position_id: this.props.history.location.state.id,
      emp_id: this.state.emp_id,
      nature_of_work: this.state.nature_of_work,
      office: this.state.office,
      credit_units: this.state.credit_units,
    })
      .then(result => {
        this.props.history.push('./positions/view'); //change to profile later!!
        alert('Position successfully added!');
      })
      .catch(e => alert('Edited Position!'));
  }

//save in state
  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="adminwork" />
        <div
          class="ui piled very padded text left aligned container segment"
          color="teal">
          <div>
            <h2 class="ui blue header">EDIT ADMINISTRATIVE WORK</h2>
          </div>
          <Divider hidden="true" />
          <p>
            <a class="ui small header">
              {' '}
              Nature of Adminstrative Work{' '}
            </a>
            <div class="ui input fluid mini focus">
              <input type="text" placeholder={this.state.prev_nature_of_work} onChange={this.handleChangeNature_of_work} />
            </div>
          </p>

          <p>
            <a class="ui small header"> Office </a>{' '}
            {/* Can change to dropdown? */}
            <div class="ui input fluid mini focus">
              <input type="text" placeholder={this.state.prev_office} onChange={this.handleChangeOffice} />
            </div>
          </p>

          <p>
            <a class="ui small header"> Credit Units </a>{' '}
            {/* Can change to number? */}
            <div class="ui input fluid mini focus">
              <input type="number" placeholder={this.state.prev_credit_units} onChange={this.handleChangeCreditUnits} />
            </div>
          </p>

          <div class="ui center aligned container">
            <button class="ui blue button">Upload Attachment</button>
            <button class="ui blue button" onClick={this.startAdd}>
              Edit Administrative Work
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
