import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as Api from '../../api';
import DeleteModal from '../GenericDelete'
import GenerateFSR from './../GenerateFSR'
import SendtoAdmin from './../SendtoAdmin'
import ViewPublicationsRow from './PublicationsViewRow'
import NavBar from './../ui/NavBar'

const dummy1={
  fname: 'Hi',
  lname: 'Hello',
  emp_id: 1
  };

const dummy2={
  fname: 'Hi2',
  lname: 'Hello2',
  emp_id: 2
  };

const dummy3={
  fname: 'Hi3',
  lname: 'Hello3',
  emp_id: 3
  };

const dummySample = { pub_id: 4,
                      researchType : 'Research',
                      researchSubtype : 'Research Proposal',
                      completeTitle: 'Sample',
                      Role: 'ABC',
                      Coworkers: [dummy1, dummy2, dummy3],
                      Funding: 'N/A',
                      StartDate: '03/03/03',
                      EndDate: '04/04/04',
                      ApprovedCreditUnits: '3'};

export default class ViewPublications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [dummySample]
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.startAdd = this.startAdd.bind(this);
    this.generate = this.generate.bind(this);
  }


  componentDidMount = () => {
    //   e.preventDefault();
    //   Api.viewPublications({
    //   })
    //     .then(result => {
    //       this.setState({ publications: result});
    //     })
    //     .catch(e => alert('Error loading Publications!!'));
  };

  handleLogout() {
    Api.logout();
    this.props.history.push('../..');
  }

 startAdd() {
    this.props.history.push('./add');
  }

  generate() {
  }

  render() {
    return (
      <div className="App-header">
        <NavBar {...this.props} Label="FSR" subLabel="publications"/>
        <div
          class="ui compact piled very padded text left aligned container segment mainDiv"
          color="teal">
          <div>
            <h1 class="ui blue header">
              PUBLICATIONS
            </h1>
          </div>
          <Divider hidden="true" />
          <div>

          <style> {`.ui.celled.table {max-width: 85vw;border-width: 0.5vh;border-color: rgb(0,10,200); padding: 10px 10px 10px 10px;}`} </style>
          <table class = "ui celled table">
              <thead>
                <tr>
                  <th class = "center aligned">Title</th>
                  <th class = "center aligned">Type</th>
                  <th class = "center aligned">Role</th>
                  <th class = "center aligned">Co-workers</th>
                  <th class = "center aligned">Funding</th>
                  <th class = "center aligned">Start Date</th>
                  <th class = "center aligned">End Date</th>
                  <th class = "center aligned">Approved Credit Units</th>
                  <th class = "center aligned">Edit/Delete</th>
                </tr>
              </thead>
            <tbody>
              {this.state.data.map((item) =>{
                return(
                    <ViewPublicationsRow {...this.props}
                          id={item.pub_id}
                          completeTitle= {item.completeTitle}
                          researchSubtype ={item.researchSubtype}
                          Role= {item.Role}
                          Coworkers= {item.Coworkers}
                          Funding={item.Funding}
                          StartDate={item.StartDate}
                          EndDate= {item.EndDate}
                          ApprovedCreditUnits= {item.ApprovedCreditUnits}
                          editURL = "../publications/edit"
                          label = "Publication"
                          subLabel = "publication"/>
                  )
                })
              }
            </tbody>
          </table>
            <button class="ui right floated blue button" onClick={this.startAdd}>
              Add Publication
            </button>
          </div>
        </div>
        <Divider hidden="true" />
      </div>
    );
  }
}
//=========================
ReactDOM.render(<ViewPublications />, document.getElementById('root'));
